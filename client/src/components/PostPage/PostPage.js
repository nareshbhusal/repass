import React from 'react';
import styles from './PostPage.module.css';
import SubShowcase from '../Sub/SubShowcase/SubShowcase';
import Thread from '../Thread/Thread';
import SubDetails from '../Sub/SubDetails/SubDetails';
import Sort from '../Sort/Sort';

import { changeTheme } from '../../actions';
import { connect } from 'react-redux';
import axios from 'axios';

class PostPage extends React.Component{

    componentDidMount = async() => {
        await this.fetchPost();
    }

    fetchPost = async() => {
        const params = this.props.match.params;
        const sub = params.sub.toString().toLowerCase();
        const postId = parseInt(params.postId.toString());
        try{
            const res = await axios.get(`http://localhost:5000/r/${sub}/${postId}/comments`)
            console.log(res);
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className={styles.postpage}>
                <SubShowcase sub="anime"/>
                <Sort />
                <div className={styles.main}>
                    <Thread />
                    <SubDetails />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { changeTheme })(PostPage);