import React from 'react';
import Nav from './Nav/Nav';
import Showcase from './Showcase/Showcase';

const header = (props) => {

    const { user, sub, loggedUser,toggleModal, changeTheme, theme, userLogout, searchHandler } = props;
    const subName = sub.name;
    if (subName) {
        return (
            <div>
                <Nav 
                sub={subName} 
                theme={theme} 
                changeTheme={changeTheme} 
                loggedUser={loggedUser}
                sub={sub}
                userLogout={userLogout} />
                <Showcase dest={`r/${subName}`} toggleModal={toggleModal}/>
            </div>
        );
    }
    return (
        <div>
            <Nav 
            theme={theme} 
            changeTheme={changeTheme} 
            loggedUser={loggedUser} 
            userLogout={userLogout} />
            {user.username ?
            <Showcase dest={`u/${user.username}`}/>
            : null}
        </div>
    );
}

export default header;