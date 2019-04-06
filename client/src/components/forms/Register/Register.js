import React from 'react';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';

class Register extends React.Component{
    render(){
        return (
            <form action="http://localhost:5000/create/user" method="POST" className={styles.register}>
                <input required placeholder="username" name="username" type="text" />
                <input required placeholder="password" name="password" type="text" />
                <input required placeholder="email address" name="email" type="text" />
                <input type="submit" value="Register" />
                <p className={styles.message}>
                    Already registered? <Link className={styles.inlineBtn} to="/login">Sign in</Link>
                </p>
            </form>
        );
    }
}

export default Register;