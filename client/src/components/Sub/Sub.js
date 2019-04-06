import React from 'react';
import styles from './Sub.module.css';

class Sub extends React.Component{
    render(){
        return (
            <div className={styles.sub}>
                Some sub
            </div>
        )
    }
}

export default Sub;