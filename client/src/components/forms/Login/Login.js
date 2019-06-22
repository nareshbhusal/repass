import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import repass from '../../../repass';
import history from '../../../history';

class Login extends React.Component{
    state = {
        username: '',
        password: ''
    }

    onSubmit = async(e) => {
        e.preventDefault();
        try{
            const { username, password } = this.state;
            const res = await repass.post("login", {
                username,
                password
            });
            const loggedUser = res.data.username;
            this.props.onSignIn(loggedUser);
            history.goBack();
            
        } catch(err) {
            console.log(err.response);
        }
    }

    onChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        this.setState({ [inputName]: inputValue });
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} className={styles.login}>
                <input value={this.state.username}  onChange={this.onChange} required placeholder="username" name="username" type="text" />
                <input value={this.state.password} onChange={this.onChange} required placeholder="password" name="password" type="password" />
                <input required type="submit" value="Login" />
                <p className={styles.message}>
                    Not registered? <Link className={styles.inlineBtn} to="/register">Create an account</Link>
                </p>
            </form>
        );
    }
}

export default Login;