import React from 'react';
import styles from './Sub.module.css';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import SubDetails from './SubDetails/SubDetails';
import SubShowcase from './SubShowcase/SubShowcase';
import Sort from '../Sort/Sort';
import { changeTheme } from '../../actions';
import { connect } from 'react-redux';
import axios from 'axios';

class Sub extends React.Component{

    componentDidMount = async () => {
        await this.fetchPosts();
    }
    fetchPosts = async () => {
        const sub = this.props.match.params.sub.toString().toLowerCase();
        try{
            const res = await axios.get(`http://localhost:5000/r/${sub}`);
            // console.log(res.data);
        } catch(err) {
            console.log(err);
        }
    }
    
    render(){
        return (
            <div className={styles.sub}>
                <Header />
                <SubShowcase sub="anime"/>
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

export default connect(mapStateToProps, { changeTheme })(Sub);