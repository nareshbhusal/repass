import React from 'react';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends React.Component{
    state = {
        username: '',
        password: '',
        email: ''
    }
    onSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/create/user", {
                name: this.state.username,
                email: this.state.email,
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
            <form onSubmit={(e)=> this.onSubmit(e)} className={styles.register}>
                <input value={this.state.username}  onChange={this.onChange} required placeholder="username" name="username" type="text" />
                <input value={this.state.email} onChange={this.onChange} required placeholder="email address" name="email" type="email" />
                <input value={this.state.password} onChange={this.onChange} required placeholder="password" name="password" type="password" />
                <input type="submit" value="Register" />
                <p className={styles.message}>
                    Already registered? <Link className={styles.inlineBtn} to="/login">Sign in</Link>
                </p>
            </form>
        );
    }
}

export default Register;