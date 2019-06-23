import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css';
import repass from '../../repass';
import { Link } from 'react-router-dom';

class Posts extends React.Component{
    
    state = {
        posts: [],
        destType: null,
        sub:null,
        user:null
    }
    fetchPosts = async() => {
        try {
            const { sub, user, destType } = this.state;
            let link;
            if (destType === 'user') {
                console.log('user posts');
                link=`u/${user}`;
            } else {
                link = `r/${sub}`;
            }
            const res = await repass.get(link);
            const posts = res.data.listings || [];
            await this.setState({ posts });

        } catch(err) {
            console.log(err.response);
        }
    }

    determineState = async() => {
        const { sub, user } = this.props;
        const destType = sub ? 'sub' : 'user';
        await this.setState({ sub, user, destType });
        
        await this.fetchPosts();
    }

    async componentDidMount() {
        await this.determineState();
    }

    async componentDidUpdate(){
        const { sub, user } = this.props;
        const newDestType = sub ? 'sub' : 'user';
        
        if (newDestType !==this.state.destType || user !==this.state.user || sub !==this.state.sub) {
            await this.determineState();
        }
    }
    render(){
        const { sub, destType, user } = this.state;
        return (
            <div className={styles.posts}>
                {this.state.posts.length ? 
                this.state.posts.map(post => {
                    return <Post key={post} id={post}/> 
                    // note: sub has to change for user
                }) : <div className={styles.noActivity}>
                    {destType === 'sub' ? 
                        <React.Fragment>
                            <p>No Posts here!</p>
                            <Link to={`/r/${sub}/create/post`} className={styles.firstpost}>
                                Create first post
                            </Link>
                        </ React.Fragment > :

                        <p>User hasn't posted anything!</p>
                    }
                        
                    </ div>
                }
            </div>
        );
    }
}

export default Posts;