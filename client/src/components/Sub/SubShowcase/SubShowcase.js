import React from 'react';
import styles from './SubShowcase.module.css';
import { Link } from 'react-router-dom';

const subShowcase = (props) => {
    return(
        <div className={styles.showcase}>
            <Link to={`/r/${props.sub}`} className={styles.sub}>
                r/{props.sub}
            </Link>
        </div>
    )
}

export default subShowcase;