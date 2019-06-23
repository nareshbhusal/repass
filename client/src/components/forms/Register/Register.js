import React from 'react';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import repass from '../../../repass';
import history from '../../../history';

class Register extends React.Component{
    state = {
        username: '',
        password: '',
        email: ''
    }
    onSubmit = async(e) => {
        e.preventDefault();
        try{
            const { username, password, email } = this.state;

            const res = await repass.post('register', {
                username,
                email,
                password
            });
            const loggedUser = res.data.username;
            this.props.onSignIn(loggedUser);
            history.goBack();
            
        } catch(err) {
            console.log(err);
            alert(err.response.data.err); // alert error
        }
    }

    onChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        this.setState({ [inputName]: inputValue });
    }

    render(){
        const { theme } = this.props;
        return (
            <div className={styles.container  + ` ${theme==='dark' ? styles.dark : styles.light}`}>
                <form onSubmit={(e)=> this.onSubmit(e)} className={styles.register + ` ${theme==='light' ? styles.light : styles.dark}`}>
                    <input value={this.state.username}  onChange={this.onChange} required placeholder="username" name="username" type="text" />
                    <input value={this.state.email} onChange={this.onChange} required placeholder="email address" name="email" type="email" />
                    <input value={this.state.password} onChange={this.onChange} required placeholder="password" name="password" type="password" />
                    <input type="submit" value="Register" />
                    <p className={styles.message}>
                        Already registered? <Link className={styles.inlineBtn} to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        );
    }
}

export default Register;