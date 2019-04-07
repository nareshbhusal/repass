import React from 'react';
import styles from './Sub.module.css';
import Posts from '../Posts/Posts';
import SubDetails from './SubDetails/SubDetails';
import SubShowcase from './SubShowcase/SubShowcase';

class Sub extends React.Component{
    render(){
        return (
                <div className={styles.sub}>
                    <SubShowcase sub="anime"/>
                    <div className={styles.main}>
                        <Posts />
                        <SubDetails />
                    </div>
                </div>
        );
    }
}

export default Sub;