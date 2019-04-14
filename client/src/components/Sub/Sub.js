import React from 'react';
import styles from './Sub.module.css';
import Header from '../Header/Header';
import SubDetails from './SubDetails/SubDetails';
import SubShowcase from './SubShowcase/SubShowcase';
import Sort from '../Sort/Sort';
import Post from '../Post/Post';
import { changeTheme, userLogin, userLogout,  } from '../../actions';
import { connect } from 'react-redux';
import axios from 'axios';
axios.defaults.withCredentials = true

class Sub extends React.Component{

    state = {
        sub: '',
        posts:'',
    }

    componentDidMount = async () => {
        await this.determineSub();
        await this.fetchPosts();
        console.log(this.props);
    }

    logout = async () => {
        try {
            const res = await axios.post('http://localhost:5000/logout');
            console.log(res);
            
            this.props.userLogout();
            this.setState({ user: null });
        } catch(err) {
            console.log(err);
        }
    }

    determineSub = async () => {
        let sub;
        // determine sub
        if (this.props.match.params.sub) {
            sub = this.props.match.params.sub.toString().toLowerCase();
        } else {
            sub = 'all';
        }
        await this.setState({ sub: sub });
    }
    fetchPosts = async () => {
        // if state has other posts
        const numPosts = this.state.posts.length;
        try{
            const res = await axios.get(`http://localhost:5000/r/${this.state.sub}`, {
                from: numPosts
            });
            const posts = res.data.posts;
            const user = res.data.user;
            this.setState({ posts });
            this.props.userLogin({ user });
            console.log(this.props);

        } catch(err) {
            console.log(err);
        }
    }

    renderPosts = () => {
        if (this.state.posts.length) {
            return this.state.posts.map(post => {
                return (
                    <Post key={post.id} data={post}/>
                );
            });
        } else {
            return (
                <div>
                    Wow such empty!
                </div>
            );
        }
    }
    
    render(){
        const { changeTheme } = this.props;
        const theme = this.props.theme.theme;
        const user = this.props.user.user;
        return (
            <div className={styles.sub}>
                <Header logoutHandler = {this.logout} user={user} changeTheme={changeTheme} theme={theme} sub={this.state.sub} />
                <SubShowcase sub={this.state.sub}/>
                <Sort />
                <div className={styles.main}>
                    <div className={styles.posts}>
                        {this.renderPosts()}
                    </div>
                    <SubDetails />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { changeTheme, userLogin, userLogout})(Sub);