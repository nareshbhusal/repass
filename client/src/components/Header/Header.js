import React from 'react';
import Nav from './Nav/Nav';
import Showcase from './Showcase/Showcase';

const header = ({ user, sub, loggedUser,toggleModal, changeTheme, theme, userLogout }) =>{
    const subName = sub.name;
    if (subName) {
        return (
            <div>
                <Nav sub={subName} theme={theme} changeTheme={changeTheme} loggedUser={loggedUser} userLogout={userLogout}/>
                <Showcase dest={`r/${subName}`} toggleModal={toggleModal}/>
            </div>
        );
    }
    return (
        <div>
            <Nav theme={theme} changeTheme={changeTheme} loggedUser={loggedUser} userLogout={userLogout}/>
            {user ? 
            <Showcase toggleModal={toggleModal} dest={`u/${user.username}`}/> : 
            <Showcase toggleModal={toggleModal} />
            }
        </div>
    );
}

export default header;