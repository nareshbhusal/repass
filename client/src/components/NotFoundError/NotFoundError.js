import React from 'react';
import styles from './NotFoundError.module.css';

class NotFoundError extends React.Component{
    getErrorMessage(){
        const { user, sub, id } = this.props;

        if (id) {
            return `Post with id- ${id} not found`;
        } else if (sub.name) {
            return `r/${sub.name} does not exist!`;
        } else if (user.username) {
            return `u/${user.username} does not exist!`
        }
        return `Not found :(`;
    }

    render() {
        return (
            <div className={styles.container}>
                <p className={styles.errorMessage}>
                    {this.getErrorMessage()}
                </p>
            </div>
        );
    }
}

export default NotFoundError;