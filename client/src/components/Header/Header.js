import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

class Header extends React.Component{

    state = {
        theme: 'light',
        loggedIn: false,
        sub: 'Home'
    }

    changeTheme = () => {
        const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
        this.setState({ theme:  newTheme});
    }

    renderThemeBtn = () => {
        return (
            <button onClick={this.changeTheme} className={styles.themeBtn}>
                {
                    this.state.theme === 'light' ?
                    <i className="fa fa-moon-o"></i> :
                    <i className="fa fa-sun-o"></i>
                }
                
            </button>
        );
    }
    renderSignInBtns = () => {
        if (!this.state.loggedIn) {
            return (
                <div className={styles.signInBtns}>
                    <Link className={`${styles.btn} ${styles.btnLogin}`} to="/login">
                        Login
                    </Link>
                    <Link className={`${styles.btn} ${styles.btnSignup}`} to="/register">
                        Signup
                    </Link>
                </div>
            )
            
        } else {
            return (
                <div className={styles.userCtrl}>
                    <Link className={styles.user}>
                        <i className="fa fa-user"></i>
                        username
                    </Link>
                    <Link className={`${styles.btn} ${styles.btnLogout}`} to="/login">
                        <i className="fa fa-sign-out"></i>Logout
                    </Link>
                </div>
            );
        }
    }
    render() {
        console.log(this.state);
        return (
            <div className={styles.header}>
                <div className={styles.left}>
                    <Link to="/" className={styles.logo} to="/">
                        repass
                    </Link>
                    <Link to="#" className={styles.sub} >
                        {this.state.sub}
                    </Link>
                </div>
                <div className={styles.right}>
                    {this.renderThemeBtn()}
                    {this.renderSignInBtns()}
                </div>
            </div>
        )
    }
}

export default Header;