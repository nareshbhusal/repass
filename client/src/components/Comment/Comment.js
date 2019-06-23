import React from 'react';
import styles from './Comment.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../Input/Input';

import repass from '../../repass';
import ta from 'time-ago';

class Comment extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            edit: '',
            reply: ''
        }

        this.upVote = React.createRef();
        this.downVote = React.createRef();
    }

    fetchComment = async () => {
        try {
            const { id } = this.props;
            const res = await repass.get(`listing/${id}`);
            let { data } = res;
            data.ups = data.ups || [];
            data.downs = data.downs || [];
            data.ups = data.ups.length - data.downs.length;
            data.children = data.children || [];
            
            await this.setState({ ...data });

        } catch(err) {
            // console.log(err.response);
        }

        if (!this.state.body) {
            await this.setState({ isHidden: true });
        }
    }

    deleteComment = async() => {
        const confirmQuestion = 'Are you sure you want to delete this comment ?';
        if (confirm(confirmQuestion)){
            try {
                const { sub, id } = this.props;
                const res = await repass.delete(`r/${sub}/${id}`);
                console.log(res.data);
                await this.setState({ isHidden: true });
            } catch(err) {
                alert(err.data.err); // alert error
            }
        }
    }

    vote = async (type) => {
        try {
            const {id} = this.props;
            const res = await repass.post(`${id}/vote/${type}`);
            console.log(res.data);
            await this.fetchComment();
        } catch(err) {
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
        await this.fetchComment();
        this.renderVote();
    }

    getParsedTime = (time) => {
        const parsedTime = ta.ago(new Date(parseInt(time)));
        if (parsedTime.includes('ms ago')) {
            return 'just now';
        }
        return parsedTime;
    }

    toggleReply = async () => {
        const isReplying = this.state.isReplying || false;
        await this.setState({ isReplying: !isReplying });
    }
    
    toggleEdit = async () => {
        const isEditing = this.state.isEditing || false;
        await this.setState({ isEditing: !isEditing });
    }

    editComment = async(body) => {
        try {
            const { sub, id } = this.state;
            await repass.put(`/r/${sub}/${id}`, {
                body
            });

            this.setState({ isEditing: false });
            // update comment data
            await this.fetchComment();

        } catch(err) {
            alert(err.response.data.err); // alert error
        }
    }

    postReply = async(body) => {
        try {
            const { sub, id } = this.state;
            const res = await repass.post(`/r/${sub}/${id}`, {
                body
            });
            await this.toggleReply();
            await this.props.updatePostPage();
            console.log(res.data);
        } catch(err) {
            console.log(err);
            alert(err.response.data.err); // alert error
        }
    }

    renderCtrlBtns = () => {
        return (
            <React.Fragment>
                <button onClick={this.toggleEdit} className={styles.btnEdit}>
                    <i className="fa fa-edit"></i>
                </button>
                <button className={styles.btnDelete} onClick={this.deleteComment}>
                <i className="fa fa-trash"></i>
                </button>
            </React.Fragment>
        );
    }

    renderInfo = () => {
        const { user, createdAt, updatedAt, isThisOP } = this.state;

        const dynamicStyle = isThisOP ? {fontWeight: 'bold'} : {fontWeight: 'normal'};

        return (
            <div className={styles.info}>
                <Link style={dynamicStyle} className={styles.user} to={`/u/${this.state.user}`}>
                    u/{user}
                </Link>
                <span className={styles.points}>
                    {`${this.state.ups} points`}
                </span>
                <span className={styles.time}>
                    {this.getParsedTime(createdAt)}
                </span>

                {updatedAt ? 
                <span className={styles.time +` ${styles.editedTime}`}>
                    edited
                    {' '+this.getParsedTime(updatedAt)}
                </span> : null
                }
            </div>
        );
    }

    renderBody = () => {
        const { theme } = this.props.theme;

        if (this.state.isEditing) {
            return <Input 
                value={this.state.body} 
                theme={theme}
                onSubmit={this.editComment} 
                onCancel={this.toggleEdit} />
        }
        return (
            <React.Fragment>
                <div className={styles.body}>
                    {this.state.body}
                </div>
            </React.Fragment>
        )
    }

    renderActions = () => {
        const loggedUser = this.props.user.username;
        return (
            <div className={styles.actions}>
                <button onClick={this.toggleReply} className={styles.comment}>
                    <i className="fa fa-comment"></i>
                        Reply
                </button>
                {this.state.user === loggedUser ?
                 this.renderCtrlBtns() : null
                }
            </div>
        );
    }
    
    render(){
        const { theme } = this.props.theme;

        const dynamicStyle = {paddingLeft: `${1.6*this.props.branch}rem`}
        if (this.state.isHidden) {
            return (
                <div style={dynamicStyle} className={styles.container + ` ${theme === 'dark' ? styles.dark : styles.light}`}>
                    <p style={{paddingLeft: '2rem'}}>Comment deleted</p>
                </div>
                );
        }
        return (
            <div style={dynamicStyle} className={styles.container + ` ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={styles.votes}>
                    <i ref={this.upVote} onClick={()=>this.vote('up')} className={`fa fa-arrow-up up ${styles.up}`}></i>
                    <i ref={this.downVote} name="down" onClick={()=>this.vote('down')} className={`fa fa-arrow-down down ${styles.down}`}></i>
                </div>
                <div className={styles.main}>

                    {this.state.isEditing? 
                    <Input value={this.state.body} 
                    onSubmit={this.editComment} 
                    theme={theme}
                    onCancel={this.toggleEdit} /> :
                    
                    <React.Fragment >
                        {this.renderInfo()}
                        {this.renderBody()}
                        {this.renderActions()}

                        {this.state.isReplying ? 
                        <Input 
                            type="reply"
                            onSubmit={this.postReply} 
                            theme={theme}
                            onCancel={this.toggleReply} /> 
                            : null
                        }
                    </React.Fragment>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { })(Comment);