import React from 'react';
import styles from './Post.module.css';
import axios from 'axios';

class Post extends React.Component{
    componentDidMount = async() => {
        try{
            const res = await axios.get('http://localhost:5000/');
            console.log(res);
        } catch(err) {
            console.log(err);
        }
        console.log('mounted');
    }
    render(){
        return (
            <div className={styles.sub}>
                Some post
            </div>
        )
    }
}

export default Post;