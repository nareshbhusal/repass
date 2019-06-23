import React from 'react';
import styles from './Showcase.module.css';
import { Link } from 'react-router-dom';

const showcase = ({dest, toggleModal}) => {
    if (!dest) {
        dest = 'searching...'
    }
    return(
        <div className={styles.showcase}>
            <Link className={styles.sub} to={'/'+dest} >
                {dest}
            </Link>
        </div>
    );
}

export default showcase;