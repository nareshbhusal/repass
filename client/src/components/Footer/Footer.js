import React from 'react';
import styles from './Footer.module.css';

const footer = () => {
    const year = new Date().getFullYear();
    const repoLink = "https://github.com/nareshsharma123/repass";
    const websiteLink = "https://github.com/nareshsharma123";
    return (
        <div className={styles.container}>
            <p>
                Copyright &copy; {year} Repass.
                <a target="_blank" className={styles.link} 
                    href={repoLink}>
                    code
                    <sup>
                        <i className="fa fa-external-link"></i>
                    </sup>
                </a>
            </p>
            <p>
                By 
                <a target="_blank" className={styles.link} 
                    href={websiteLink}>
                    Naresh Bhusal
                    <sup>
                        <i className="fa fa-external-link"></i>
                    </sup>
                </a>
            </p>
        </div>
    );
}

export default footer;