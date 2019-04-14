import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

class Header extends React.Component{

    changeTheme = () => {
        this.props.changeTheme();
    }

    renderThemeBtn = () => {
        return (
            <button onClick={this.changeTheme} className={styles.themeBtn}>
                {
                    this.props.theme === 'dark' ?
                    <i className="fa fa-moon-o"></i> :
                    <i className="fa fa-sun-o"></i>
                }
            </button>
        );
    }

    renderSignInBtns = () => {
        if (!this.props.user) {
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
            
        } else {
            const username = this.props.user;
            return (
                <div className={styles.userCtrl}>
                    <Link to={`u/${username}`} className={styles.user}>
                        <i className="fa fa-user"></i>
                        {username}
                    </Link>
                    <button className={`${styles.btn} ${styles.btnLogout}`} onClick={this.props.logoutHandler}>
                        <i className="fa fa-sign-out"></i>Logout
                    </button>
                </div>
            );
        }
    }
    render() {
        // console.log(this.props)
        return (
            <div className={styles.header}>
                <div className={styles.left}>
                    <Link to="/" className={styles.logo} to="/">
                        repass
                    </Link>
                    <Link to="#" className={styles.sub} >
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

export default Header;