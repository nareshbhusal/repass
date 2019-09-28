import React from 'react';
import styles from './PostPage.module.css';
import Comment from '../Comment/Comment';
import Post from '../Posts/Post/Post';
import Input from '../Input/Input';
import repass from '../../repass';
import {connect} from 'react-redux';

class PostPage extends React.Component{

    state = {
        comments: [],
        threadElements: [],
    }

    renderComment = (id, branch) => {
        if (branch ===-1) {
            // this branch includes the parent original post
            return null;
        }
        return <Comment key={id} id={id} branch={branch} updatePostPage={this.updatePostPage} />
    }

    getThreadElements = async (id, branch=-2) => {
        // render comment body
        // if comments.length > 0 getThreadElements with branch++
        const children = await this.getChildren(id);
        branch++;
        const threadElements =  (
            <div key={id} className={styles.threadElement}>
                {this.renderComment(id, branch)}

                {children.length ? await Promise.all( children.map(async id => {
                    return await this.getThreadElements(id, branch)
                })) : null
                }
            </div>
        );
        return threadElements;
    }

    getChildren = async(id) => {
        try {
            const res = await repass.get(`listing/${id}`);
            const children = res.data.children || [];
            const { deleted } = res.data;
            await this.setState({ deleted });
            if (deleted){
                throw "post deleted!"
            }
            return children;

        } catch(err) {
            return [];
        }
    }

    submitComment = async(body) => {
        try {
            const { sub, id } = this.props;
            const res = await repass.post(`/r/${sub}/${id}`, {
                body
            });
            console.log(res.data);
            await this.updatePostPage();

        } catch(err) {
            console.log(err.response);
            alert(err.response.data.err); // alert error
        }
    }

    updatePostPage = async () => {
        const threadElements = await this.getThreadElements(this.props.id);
        await this.setState({ threadElements });
    }

    componentDidMount = async() => {
        await this.updatePostPage();
    }

    render() {
        const theme = this.props.theme.theme;
        const { id, sub } = this.props;
        const { deleted, threadElements } = this.state;
        return (
            <div className={styles.postpage + ` ${theme === 'dark' ? styles.dark : styles.light}`}>
                {deleted ? 
                <React.Fragment>
                    <p style={{padding: '0.5rem'}}>Post not found!</p>
                </React.Fragment>
                :
                <React.Fragment>
                    <Post className={theme === 'dark' ? styles.dark : styles.light} updatePostPage={this.updatePostPage} sub={sub} id={id} detailed/>
                    <div className={styles.input}>
                        <Input onSubmit={this.submitComment} theme={theme} />
                    </div>
                    {threadElements}
                </React.Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {  })(PostPage);