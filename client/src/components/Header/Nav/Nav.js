import React from 'react';
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';

class Nav extends React.Component{

    changeTheme = () => {
        this.props.changeTheme();
        alert('Dark theme not yet implemented, maybe next release'); // alert error
    }

    renderThemeBtn = () => {
        return (
            <button onClick={this.changeTheme} className={styles.themeBtn}>
                {
                    this.props.theme.theme === 'dark' ?
                    <i className="fa fa-moon-o"></i> :
                    <i className="fa fa-sun-o"></i>
                }
            </button>
        );
    }

    logoutHandler = async () => {
        console.log('logout');
        await this.props.userLogout();
    }

    renderSignInBtns = () => {
        const username = this.props.loggedUser;
        if (!username) {
            return (
                <div className={styles.signInBtns}>
                    <Link className={`${styles.btn} ${styles.btnLogin}`} to="/login">
                        Login
                    </Link>
                    <Link className={`${styles.btn} ${styles.btnSignup}`} to="/register">
                        Signup
                    </Link>
                </div>
            );
        }           
        return (
            <div className={styles.userCtrl}>
                <Link to={`/u/${username}`} className={styles.user}>
                    <i className="fa fa-user"></i>
                    {username}
                </Link>
                <button onClick={this.logoutHandler} className={`${styles.btn} ${styles.btnLogout}`}>
                    <i className="fa fa-sign-out"></i>Logout
                </button>
            </div>
        );
    }
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.left}>
                    <Link to="/" className={styles.logo}>
                        repass
                    </Link>
                    <Link to={`/r/${this.props.sub}`} className={styles.sub} >
                        {this.props.sub}
                    </Link>
                </div>
                <div className={styles.right}>
                    {this.renderThemeBtn()}
                    {this.renderSignInBtns()}
                </div>
            </div>
        );
    }
}

export default Nav;