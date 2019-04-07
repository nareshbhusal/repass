import React from 'react';
import styles from './Input.module.css';

class Input extends React.Component{
    state = {
        type: 'comment'
    }
    render() {
        return (
            <div className={styles.input}>
                <textarea placeholder="What are your thoughts?"></textarea>
                <div className={styles.actions}>
                    <button className={styles.button}>{this.state.type.toUpperCase()}</button>
                </div>
            </div>
        );
    }
}

export default Input;