import React from 'react';
import styles from './Sort.module.css';
import { Link } from 'react-router-dom';

const sort = ({ search, sub, theme, username }) => {
    search=search || '';
    let link='';
    if (sub) {
        link = `/r/${sub}/?search=${search}&`;
    } else {
        link = `/u/${username}/?`;
    }
    return (
        <div className={styles.container+` ${theme==='light' ? styles.light : styles.dark}`}>
            <Link to={link} >
                Latest
            </Link>
            <Link to={link+`t=1`} >
                Today
            </Link>
            <Link to={link+`t=7`} >
                Week
            </Link>
            <Link to={link+`t=30`} >
                Month
            </Link>
            <Link to={link+`t=365`} >
                Year
            </Link>
            <Link to={link+`t=all`} >
                All time
            </Link>
        </div>
    )
}

export default sort;