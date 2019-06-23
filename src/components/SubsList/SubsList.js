import React from 'react';
import styles from './SubsList.module.css';
import { Link } from 'react-router-dom';

const subsList = ({allSubs, userSubs, theme}) => {

    return (
        <div className={styles.container}>
            <div className={styles.userSubs+ ` ${theme === 'dark' ? styles.dark : styles.light}`}>
                <p className={styles.head}>My Communities</p>
                {userSubs.map(sub => {
                    return <Link className={styles.sub} key={sub+'us'} to={`/r/${sub}`}>{'r/'+sub}</Link>
                })}
            </div>

            <div className={styles.allSubs+ ` ${theme === 'dark' ? styles.dark : styles.light}`}>
                <p className={styles.head}>All Communities</p>
                {allSubs ?
                    allSubs.map(sub => {
                    return <Link className={styles.sub} key={sub.name} to={`/r/${sub.name}`} >{'r/'+sub.name}</Link>
                }) :null}
                <Link to={'/create/sub'} className={styles.btn}>
                    Create Community
                </Link>
            </div>
            
        </div>
        
    );
}

export default subsList;