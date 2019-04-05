import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

class Header extends React.Component{

    state = {
        theme: 'light'
    }
    renderThemeBtn = () => {
        if (this.state.theme ==='light') {
            return (
                <div className={styles.themeBtn}>
                    <i className="fa fa-moon-o"></i>
                </div>
            )
        } else {
            return (
                <div className={styles.themeBtn}>
                    <i className="fa fa-sun-o"></i>
                </div>
            )
        }
    }
    renderActions = () => {
        if (!this.state.loggedIn) {
            <div className={styles.signinBtns}>
                <Link className={`${styles.btn} ${styles.btnLogin}`} to="/login">
                    Login
                </Link>
                <Link className={`${styles.btn} ${styles.btnSignup}`} to="/register">
                    Signup
                </Link>
            </div>
        } else {
            <div className={styles.user}>
                <i className="fa fa-user"></i>
                user
            </div>
        }
    }
    render() {
        return (
            <div className={styles.header}>
                <Link className={styles.logo} to="/">
                    Repass
                </Link>
                {this.renderThemeBtn()}
                {this.renderActions()}
            </div>
        )
    }
}

export default Header;