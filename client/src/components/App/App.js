import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../history';

import Register from '../forms/Register/Register';
import Login from '../forms/Login/Login';
import Main from '../../containers/Main/Main';
import SubForm from '../forms/SubForm/SubForm';
import PostForm from '../forms/PostForm/PostForm';

import { userLogin, userLogout, changeTheme } from '../../store/actions';
import { connect } from 'react-redux';

import './App.css';

const InvalidRoute = () => {
    return (
        <p style={{color: 'red', margin: '4rem', textAlign:'center'}}>
            404: Invalid route
        </p>
    )
}

const App = (props) => {
    const { userLogin } = props;
    const { theme } = props.theme;
    const pathsThatRenderMain = ["/", "/r/:sub/", "/r/:sub/:id", "/u/:user/", ]
    const pathsThatRenderPostForm = ["/r/:sub/create/post", "/r/:sub/edit/:id"]
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/register" render={() => <Register onSignIn={userLogin} theme={theme} />} />
                    <Route exact path="/login" render={() => <Login onSignIn={userLogin} theme={theme} />} />
                    <Route exact path={pathsThatRenderMain} render={() => <Main store={props} />} />
                    <Route exact path={pathsThatRenderPostForm} component={PostForm} />
                    <Route exact path="/create/sub" component={SubForm} />
                    <Route exact path="/*" component={InvalidRoute} />
                </Switch>
            </Router>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { userLogin, userLogout, changeTheme })(App);