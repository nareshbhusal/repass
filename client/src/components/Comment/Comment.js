import React from 'react';
import styles from './Comment.module.css';

class Comment extends React.Component{
    constructor(){
        super(props);

        this.state = {
            user: 'username',
            votes: 5,
            time: '1 hour ago',
            body: "There's a guy in our community from Melbourne who made the move to London that could maybe offer some advice. Though he isn't an FE Dev (he's back end and did CS degree in 2000) he only moved here in the last year or so."
        }

        this.upVote = React.createRef();
        this.downVote = React.createRef();
    }

    onSaveHandler = () => {
        this.setState({ isSaved:  !this.state.isSaved});
        if (this.state.isSaved) {
            console.log('saved');
        } else {
            console.log('unsaved');
        }
    }

    UpdateVotes = () => {
        if (this.state.vote == 0) {
            this.upVote.current.style.color = '#878a8c';
            this.downVote.current.style.color = 'blue';

        } else if(this.state.vote == 1) {
            this.upVote.current.style.color = 'red';
            this.downVote.current.style.color = '#878a8c';

        } else if(this.state.vote === null) {
            this.upVote.current.style.color = '#878a8c';
            this.downVote.current.style.color = '#878a8c';
        }
    }

    componentDidMount = () => {
        this.UpdateVotes();
        if (this.props.detailed) {
            console.log('done?');
            this.postRef.current.style.border = 'none';
        }
    }

    componentDidUpdate = () => {
        this.UpdateVotes();
    }

    toggleVote = (e) => {
        const btn = e.target.classList.contains('up') ? 'up' : 'down';

        if ((this.state.vote == 0 && btn ==='down') || (this.state.vote == 1 && btn === 'up')) {
            // case where user undos the vote
            this.setState({ vote: null });
        } else if (btn === 'up') {
            this.setState({ vote: 1 });
        } else if (btn === 'down') {
            this.setState({ vote :0 });
        }
    }

    renderInfo = () => {
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
                    {this.state.time}
                </span>
            </div>
        );
    }
    
    renderSave = () => {
        if (this.state.isSaved) {
            return (
                <button onClick={this.onSaveHandler} className={styles.save}>
                    <i className="fa fa-bookmark"></i>
                    Unsave
                </button>
            )
        } else {
            return (
                <button onClick={this.onSaveHandler} className={styles.save}>
                    <i className="fa fa-bookmark"></i>
                    Save
                </button>
            );
        }
    }
    renderActions = () => {
        return (
            <div className={styles.actions}>
                <Link to={this.state.url} className={styles.comment}>
                    <i className="fa fa-comment"></i>
                    {this.state.comments} Comments
                </Link>
                {this.renderSave()}
            </div>
        )
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
        )
    }
    render(){
        return (
            <div ref={this.postRef} className={styles.comment}>
                <div className={styles.votes}>
                    <i ref={this.upVote} onClick={this.toggleVote} className={`fa fa-arrow-up up ${styles.up}`}></i>
                        {this.state.votes}
                    <i ref={this.downVote} name="down" onClick={this.toggleVote} className={`fa fa-arrow-down down ${styles.down}`}></i>
                </div>
                <div className="main">
                    {this.renderInfo()}
                    {this.renderBody()}
                    {this.renderActions()}
                </div>
            </div>
        )
    }
}

export default Comment;