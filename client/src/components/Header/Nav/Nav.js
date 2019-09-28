import React from 'react';
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';
import history from '../../../history';

class Nav extends React.Component{

    changeTheme = () => {
        this.props.changeTheme();
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
                    <span>{username}</span>
                </Link>
                <button onClick={this.logoutHandler} className={`${styles.btn} ${styles.btnLogout}`}>
                    <i className="fa fa-sign-out"></i>
                    <span>Logout</span>
                </button>
            </div>
        );
    }
    searchHandler = e =>{
        const search = e.target.value;
        let { sub } = this.props;
        sub=sub || {};
        history.push(`/r/${sub.name}/?search=${search}`);
    }
    renderSearchBar = ({ theme, search, sub }) => {
        if (!sub.name){
            return null;
        }
        search=search ||'';
        return (
            <div className={styles.searchBar+ ` ${theme==='light' ? styles.light : styles.dark}`}>
                <input placeholder={`Search r/${sub.name}`} type="text" onChange={this.searchHandler}/>
                <i className="fa fa-search"></i>
            </div>
        );
    }
    render() {
        let { theme, search, sub } = this.props;
        sub = sub || {};
        return (
            <div className={styles.container + ` ${theme === 'dark'? styles.dark : styles.light}`}>
                <div className={styles.left}>
                    <Link to="/" className={styles.logo}>
                        repass
                    </Link>
                    <Link to={`/r/${this.props.sub}`} className={styles.sub} >
                        {sub.name}
                    </Link>
                </div>
                {this.renderSearchBar({ theme, search, sub })}
                <div className={styles.right}>
                    {this.renderThemeBtn()}
                    {this.renderSignInBtns()}
                </div>

            </div>
        );
    }
}

export default Nav;