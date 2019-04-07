import React from 'react';
import styles from './SubDetails.module.css';
import {Link} from 'react-router-dom';

const SubDetails =(props)=>{
    props = {
        sub: 'anime',
        info: 'A place to discuss anime!'
    }
    return (
        <div className={styles.subdetails}>
            <div className={styles.head}>
                Community Details
            </div>
            <Link to={`r/${props.sub}`} className={styles.sub}>
                r/{props.sub}
            </Link>
            <p className={props.info}>
                {props.info}
            </p>
            <div className={styles.btns}>
                <button onClick={()=>{}}>
                    join
                </button>
                <button onClick={()=>{}}>
                    create post
                </button>
            </div>
        </div>
    );
}

export default SubDetails;