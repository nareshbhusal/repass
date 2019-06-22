import React from 'react';
import styles from './Post.module.css';
import { Link } from 'react-router-dom';
import repass from '../../../repass';
import ta from 'time-ago';
import { connect } from 'react-redux';

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

    fetchPost = async() => {
        try {
            const { id } = this.props;
            const res = await repass.get(`listing/${id}`);
            const {data} = res;
            if (!data.title) {
                // no title signifies deleted post
                return await this.setState({ isHidden: true });
            }
            data.ups= data.ups.length;
            data.comments=0;
            data.url=`/r/${data.sub}/${id}`;
            if (data.downs) {
                data.ups = data.ups - data.downs.length;
            }
            if (data.children){
                data.comments=data.children.length;
            }
            if (data.originalPost) {
                data.url = `/r/${data.sub}/${data.originalPost}#${id}`;
            }
            await this.setState({ ...data });

        } catch(err) {
            console.log(err.response);
        }
        await this.isPostDeleted();
    }

    isPostDeleted= async () => {
        if (this.state.title) {
            return false;
        }
        await this.setState({ isHidden: true });
        return true;
    }

    vote = async (type) => {
        try {
            const {id} = this.props;
            await repass.post(`${id}/vote/${type}`);
            await this.fetchPost();
        } catch(err) {
            console.log(err.response.data);
            alert(err.response.data.err); // alert error
        }
        this.renderVote();
    }
    renderVote = () => {
        if (this.state.isHidden) {
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

    componentDidMount = async () => {
        await this.fetchPost();
        this.renderVote();
    }

    getParsedTime = () => {
        return ta.ago(new Date(parseInt(this.state.createdAt)));
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

    deletePost = async() => {
        if (confirm('Are you sure you want to delete this post')){
            try {
                const { sub, id } = this.state;
                const res = await repass.delete(`r/${sub}/${id}`);
                console.log(res.data);
                await this.setState({ isHidden: true });
            } catch(err) {
                console.log(err);
                alert(err.response.data.err); // alert error
            }
        }
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
        return (
            <div className={styles.actions}>
                <Link to={this.state.url} className={styles.comment}>
                    <i className="fa fa-comment"></i>
                    {this.state.comments} Comments
                </Link>
                {this.state.user === loggedUser ?
                 this.renderCtrlBtns() : null
                }
                
            </div>
        );
    }
    renderBody = () => {
        return (
            <React.Fragment>
                <p className={styles.title}>
                    {this.state.title}
                </p>
                {
                    this.state.detailed ? 
                    <p className={styles.body}>
                        {this.state.body}
                    </p> :
                    null
                }
            </React.Fragment>
        );
    }
    render(){
        if (this.state.isHidden) {
            return null;
        }
        const dynamicClass = this.props.detailed ? `${styles.post} ${styles.detailed}` : `${styles.post}`;

        return (
            <div ref={this.postRef} className={dynamicClass} >
                <div className={styles.votes}>
                    <i ref={this.upVote} onClick={()=>this.vote('up')} className={`fa fa-arrow-up up`}></i>
                        {this.state.ups}
                    <i ref={this.downVote} name="down" onClick={()=>this.vote('down')} className={`fa fa-arrow-down down`}></i>
                </div>
                <div className="main">
                    {this.renderInfo()}
                    {this.renderBody()}
                    {this.renderActions()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Post);