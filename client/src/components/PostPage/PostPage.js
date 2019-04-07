import React from 'react';
import styles from './PostPage.module.css';
import Post from '../Posts/Post/Post';
import Input from '../Input/Input';

class PostPage extends React.Component{

    render() {
        console.log('postpage')
        return (
            <div className={styles.postpage}>
                <Post detailed/>
                <Input />
                comments
            </div>
        )
    }
}
export default PostPage;