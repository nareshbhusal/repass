import React from 'react';
import styles from './Post.module.css';
import { Link } from 'react-router-dom';
import repass from '../../../repass';
import ta from 'time-ago';
import { connect } from 'react-redux';

import { fetchPost } from '../../../helpers/index';

// This is just a postItem, not directly accessible via link
// only through PostPage or (Sub)Posts

class Post extends React.Component{
    state = {
        user: null,
        id: null,
        title: '',
        body: '',
        ups: 0,
        comments: 0,
        parent: null,
        createdAt: '',
        sub: '',
        url: '#',
        isSaved: false,
        detailed: true,
        vote: null,
        isHidden: false // set to true when deleted
    }

    upVote=React.createRef();
    downVote=React.createRef();

    vote = async (type) => {
        try {
            const {id} = this.props;
            await repass.post(`${id}/vote/${type}`);
            await this.fetchPostData();
        } catch(err) {
            console.log(err.response);
            alert(err.response.data.err); // alert error
        }
        this.renderVote();
    }
    fetchPostData = async() => {
        await this.setState({ error: '' });
        const { id } = this.props;
        const post = await fetchPost(id);
        await this.setState({ ...post });
        this.renderVote();
    }
    componentWillUnmount(){
        this.setState = () => {};
    }
    renderVote = () => {
        const { deleted, error, title } = this.state;
        if (deleted || error || !title) {
            return;
        }
        if (this.state.vote===1) {
            this.upVote.current.style.color='tomato';
            this.downVote.current.style.color = '#878a8c';
        } else if (this.state.vote===0) {
            this.upVote.current.style.color='#878a8c';
            this.downVote.current.style.color='blue';
        } else {
            this.upVote.current.style.color='#878a8c';
            this.downVote.current.style.color = '#878a8c';
        }
    }

    getParsedTime = () => {
        return ta.ago(new Date(parseInt(this.state.createdAt)));
    }

    deletePost = async() => {
        if (confirm('Are you sure you want to delete this post')){
            try {
                const { sub, id } = this.state;
                const res = await repass.delete(`r/${sub}/${id}`);
                console.log(res.data);
            } catch(err) {
                console.log(err.response.data);
                alert(err.response.data.err); // alert error
            }
        }
        await this.fetchPostData();
    }

    renderInfo = () => {
        const time = this.getParsedTime();
        return (
            <div className={styles.info}>
                <Link to={`/r/${this.state.sub}`} className={styles.sub}>
                    r/{this.state.sub}
                </Link>
                <span className={styles.postedBy}>
                    Posted by 
                    <Link className={styles.user} to={`/u/${this.state.user}`}>
                        u/{this.state.user}
                    </Link>
                </span>
                <span className={styles.time}>
                    {time}
                </span>
            </div>
        );
    }

    renderCtrlBtns = () => {
        return (
            <React.Fragment>
                <Link to={`/r/${this.state.sub}/edit/${this.state.id}`} className={styles.btnEdit}>
                    <i className="fa fa-edit"></i>
                </Link>
                <button className={styles.btnDelete} onClick={this.deletePost}>
                <i className="fa fa-trash"></i>
                </button>
            </React.Fragment>
        );
    }
    
    renderActions = () => {
        const loggedUser = this.props.user.username;
        const { comments, url, user } = this.state;
        return (
            <div className={styles.actions}>
                <Link to={url} className={styles.comment}>
                    <i className="fa fa-comment"></i>
                    {comments} Comments
                </Link>
                {user === loggedUser ?
                 this.renderCtrlBtns() : null
                }
                
            </div>
        );
    }
    renderBody = () => {
        const { title, body } = this.state;
        return (
            <React.Fragment>
                <p className={styles.title} 
                    dangerouslySetInnerHTML={{__html: title}}>
                </p>
                {
                    this.state.detailed ? 
                    <p className={styles.body} 
                        dangerouslySetInnerHTML={{__html: body}}>
                    </p>
                    : null
                }
            </React.Fragment>
        );
    }

    componentDidMount = async () => {
        await this.fetchPostData();
    }

    render(){
        const isPreview = !this.props.detailed;
        const { deleted, ups, error, title } = this.state;
        if ((deleted && isPreview) || !title) {
            return null;
        }
        const dynamicClass = `${styles.post} ${isPreview ? '': styles.detailed}`;
        const { theme } = this.props.theme;

        return (
            <div ref={this.postRef} className={dynamicClass + ` ${theme === 'dark' ? styles.dark : styles.light}`} >
                {deleted || error ? 
                <React.Fragment>
                    <p>Post not found! It was either deleted or never existed.</p>
                </React.Fragment>
                :
                <React.Fragment>
                    <div className={styles.votes}>
                        <i ref={this.upVote} onClick={()=>this.vote('up')} className={`fa fa-arrow-up up`}></i>
                            {ups}
                        <i ref={this.downVote} name="down" onClick={()=>this.vote('down')} className={`fa fa-arrow-down down`}></i>
                    </div>
                    <div className="main">
                        {this.renderInfo()}
                        {this.renderBody()}
                        {this.renderActions()}
                    </div>
                </React.Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Post);