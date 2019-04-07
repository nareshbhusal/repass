import React from 'react';
import styles from './Sub.module.css';
import Posts from '../Posts/Posts';

class Sub extends React.Component{
    render(){
        return (
            <div className={styles.sub}>
                Some sub
                <Posts />
            </div>
        )
    }
}

export default Sub;