import React from 'react';
import styles from './Thread.module.css';
import Post from '../Posts/Post/Post';
import Input from '../Input/Input';
import Comment from '../Comment/Comment';

class PostPage extends React.Component{

    render() {
        return (
            <div className={styles.thread}>
                <Post detailed/>
                <Input />
                <div className={styles.line}></div>
                <div className={styles.comments}>
                 <Comment />
                </div>
            </div>
        )
    }
}
export default PostPage;