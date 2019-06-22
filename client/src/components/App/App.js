import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../../history';
import Register from '../forms/Register/Register';
import Login from '../forms/Login/Login';
import Main from '../../containers/Main/Main';
import SubForm from '../forms/SubForm/SubForm';
import PostForm from '../forms/PostForm/PostForm';
import { userLogin, userLogout, changeTheme } from '../../store/actions';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component{

    render() {
        const props = { ...this.props, ...this.state };
        return (
            <div>
                <Router history={history}>
                    <Route exact path="/register" render={() => <Register onSignIn={this.props.userLogin} />} />
                    <Route exact path="/login" render={() => <Login onSignIn={this.props.userLogin} />} />
                    <Route exact path="/" render={() => <Main state={props} />} />
                    <Route exact path="/r/:sub/create/post" component={PostForm} />
                    <Route exact path="/r/:sub/edit/:id" component={PostForm} />
                    <Route exact path="/r/:sub/" render={() => <Main state={props} />} />

                    <Route exact path="/r/:sub/:id" render={() => <Main state={props} />} />

                    <Route exact path="/u/:user/" render={() => <Main state={props} />} />
                    <Route exact path="/create/sub" component={SubForm} />
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { userLogin, userLogout, changeTheme })(App);