import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

class Login extends React.Component{
    render(){
        return (
            <form action="http://localhost:5000/login" method="GET" className={styles.login}>
                <input required placeholder="username" name="username" type="text" />
                <input required placeholder="password" name="password" type="text" />
                <input required type="submit" value="Login" />
                <p className={styles.message}>
                    Not registered? <Link className={styles.inlineBtn} to="/register">Create an account</Link>
                </p>
            </form>
        )
    }
}

export default Login;