import React from 'react';
import styles from './PostPage.module.css';
import Post from '../Posts/Post/Post';
import Input from '../Input/Input';
import Comment from '../Comment/Comment';

class PostPage extends React.Component{

    render() {
        console.log('postpage')
        return (
            <div className={styles.postpage}>
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