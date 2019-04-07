import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

class Posts extends React.Component{
    render() {
        return (
            <div className={styles.postpage}>
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}
export default Posts;