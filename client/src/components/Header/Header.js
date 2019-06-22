import React from 'react';
import Nav from './Nav/Nav';
import Showcase from './Showcase/Showcase';
import Sort from '../Sort/Sort';
import styles from './Header.module.css';

const header = ({ user, sub, loggedUser, changeTheme, theme, userLogout }) =>{
    const subName = sub.name;
    if (subName) {
        return (
            <div className={styles.Header}>
                <Nav sub={subName} theme={theme} changeTheme={changeTheme} loggedUser={loggedUser} userLogout={userLogout}/>
                <Showcase dest={`r/${subName}`}/>
                <Sort />
            </div>
        );
    }
    return (
        <div className={styles.Header}>
            <Nav theme={theme} changeTheme={changeTheme} loggedUser={loggedUser} userLogout={userLogout}/>
            {user ? 
            <Showcase dest={`u/${user.username}`}/> : 
            <Showcase />
            }
            <Sort />
        </div>
    );
}

export default header;