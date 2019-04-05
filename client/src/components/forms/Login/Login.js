import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component{
    state = {
        username: '',
        password: ''
    }

    onSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/login", {
                name: this.state.username,
                password: this.state.password
            });
            console.log(res);
        } catch(err) {
            console.log(err);
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
                <input value={this.state.password} onChange={this.onChange} required placeholder="password" name="password" type="text" />
                <input required type="submit" value="Login" />
                <p className={styles.message}>
                    Not registered? <Link className={styles.inlineBtn} to="/register">Create an account</Link>
                </p>
            </form>
        )
    }
}

export default Login;