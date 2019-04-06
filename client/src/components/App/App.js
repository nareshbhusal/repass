import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../../history';
import styles from './App.module.css';
import Register from '../forms/Register/Register';
import Login from '../forms/Login/Login';
import Sub from '../Sub/Sub';
import Post from '../Post/Post';

class App extends React.Component{
    render() {
        return (
            <div className={styles.App}>
                <Router history={history}>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/r/:sub" component={Sub} />
                    <Route exact path="/r/:sub/:postId/:comments" component={Post} />
                </Router>
            </div>
        )
    }
}

export default App;