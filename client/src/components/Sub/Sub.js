import React from 'react';
import styles from './Sub.module.css';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import SubDetails from './SubDetails/SubDetails';
import SubShowcase from './SubShowcase/SubShowcase';
import Sort from '../Sort/Sort';
import { changeTheme, userLogin } from '../../actions';
import { connect } from 'react-redux';
import axios from 'axios';
axios.defaults.withCredentials = true

class Sub extends React.Component{

    state = {
        sub: '',
        posts:''
    }
    componentDidUpdate = () => {
        console.log(this.props);
    }
    componentDidMount = async () => {
        this.determineSub();
        await this.determineAuth();
        await this.fetchPosts();
    }
    determineAuth = async () => {
        try {
            const user = await axios.get('localhost:5000/user');
            console.log(user);
        } catch(err) {
            console.log(err);
        }
        
    }
    determineSub = () => {
        let sub;
        // determine sub
        if (this.props.match.params.sub) {
            sub = this.props.match.params.sub.toString().toLowerCase();
        } else {
            sub = 'all';
        }
        this.setState({ sub });
    }
    fetchPosts = async () => {
        // if state has other posts
        const numPosts = this.state.posts.length;
        
        try{
            const res = await axios.get(`http://localhost:5000/r/${this.state.sub}`, {
                from: numPosts
            });
            console.log(res.data);
        } catch(err) {
            console.log(err);
        }
    }
    
    render(){
        const {auth, changeTheme} = this.props;
        const theme = this.props.theme.theme;
        return (
            <div className={styles.sub}>
                <Header auth={auth} changeTheme={changeTheme} theme={this.props.theme.theme} sub={this.state.sub} />
                <SubShowcase sub={this.state.sub}/>
                <Sort />
                <div className={styles.main}>
                    <Posts />
                    <SubDetails />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { changeTheme, userLogin})(Sub);