import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../../history';
import Register from '../forms/Register/Register';
import Login from '../forms/Login/Login';
import Sub from '../Sub/Sub';
import PostPage from '../PostPage/PostPage';
import SubForm from '../forms/SubForm/SubForm';
import './App.css';

class App extends React.Component{
    render() {
        return (
            <div>
                <Router history={history}>
                    <Route exact path="/" component={Sub} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/r/:sub" component={Sub} />
                    <Route exact path="/r/:sub/:postId/comments" component={PostPage} />
                    <Route exact path="/create/sub" component={SubForm} />
                </Router>
            </div>
        );
    }
}

export default App;