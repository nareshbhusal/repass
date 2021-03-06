import React from 'react';
import styles from './Info.module.css';
import { Link } from 'react-router-dom';

const parseDate = (timestamp) => {
    return new Date(parseInt(timestamp)).toDateString().split(' ').slice(1).join(' ');
}

const info = (props) =>{
        const { sub, user, deleteHandler, theme } = props;

        let {name, isSubbed, numOfUsers, info, isMod} = props.sub;
        const joinBtnText = isSubbed ? 'Joined' : 'Join';
        const head = name ? 'Community Details' : 'User info';

        let link;
        let memberSince;
        let karma;

        if (sub.name) {
            link= `/r/${sub.name}`;
        } else {
            link = `/u/${user.username}`;
            memberSince = parseDate(user.createdAt);
            karma = user.karma || 0;
        }
        return (
            <div className={styles.container + ` ${theme === 'dark' ? styles.dark : styles.light}`}>
                <p className={styles.head}>
                    {head}
                </p>
                <Link to={link} className={styles.sub}>
                    {link}
                </Link>
                {name ? 
                    <p className={styles.numOfUsers}>{numOfUsers} users</p> : 
                    <>
                        <p className={styles.memberSince}>Member since: {memberSince}</p>
                        <p className={styles.karma}>Karma: {karma}</p>
                    </>
                }
                <p className={styles.info}>
                    {info}
                </p>
                <div className={styles.btns}>
                    {name ? 
                    <React.Fragment>
                        <button onClick={props.join}>
                            {joinBtnText}
                        </button>
                        <Link to={`/r/${name}/create/post`}>
                            Create post
                        </Link>
                    </React.Fragment> 
                    : null
                    }

                    {isMod ? 
                    <React.Fragment>
                        <Link to={`/edit/r/${sub.name}`} className={styles.editBtn}>
                            Edit Sub
                        </Link>
                        <button onClick={deleteHandler} className={styles.deleteBtn}>
                            Delete Sub
                        </button>
                    </React.Fragment>
                    : null}
                </div>
            </div>
        );
}

export default info;