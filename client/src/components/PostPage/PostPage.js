import React from 'react';
import styles from './PostPage.module.css';
import SubShowcase from '../Sub/SubShowcase/SubShowcase';
import Thread from '../Thread/Thread';
import SubDetails from '../Sub/SubDetails/SubDetails';

class PostPage extends React.Component{
    render() {
        return (
            <div className={styles.postpage}>
                <SubShowcase sub="anime"/>
                <div className={styles.main}>
                    <Thread />
                    <SubDetails />
                </div>
            </div>
        )
    }
}

export default PostPage;