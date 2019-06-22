import React from 'react';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import SubsList from '../../components/SubsList/SubsList';
import Posts from '../../components/Posts/Posts';
import PostPage from '../../components/PostPage/PostPage';

import NotFoundError from '../../components/NotFoundError/NotFoundError';

import styles from './Main.module.css';
import {withRouter} from 'react-router';
import history from '../../history';
import repass from '../../repass';

class Main extends React.Component{

    state = {
        user: {
            username: null,
            createdAt: null
        },
        sub: {
            name: null,
            info: '',
            numOfUsers: 0,
            isSubbed: false,
            isMod: false
        },
        id: null,
        link: '',
        allSubs: [],
        userSubs:[],

        doesNotExist: false
    }

    // send sub to the Posts component

    fetchCurrentUser = async() => {
        try {
            const res = await repass.get('users/me');
            const { username, subs } = res.data;

            this.props.state.userLogin(username);
            if (subs) {
                await this.setState({ userSubs: subs });
            }
        } catch(err) {
            // error fetching loggedUser or not logged in
            console.log(err.response.data.err);
        }
    }

    fetchAllSubs = async() => {
        try {
            const res = await repass.get('subs');
            const allSubs = res.data;
            if (!allSubs.length) {
                return;
            }
            await this.setState({ allSubs });

        } catch(err) {
            alert(err.response.data.err); // alert error
            console.log(err);
        }
    }

    join = async() => {
        try {
            const {sub} = this.state;
            await repass.post(`subscribe/${sub.name}/`);
        } catch(err) {
            console.log(err);
            alert(err.response.data.err); // alert error
        }
        await this.fetchSubInfo();
        await this.fetchCurrentUser();
    }

    deleteSub = async() => {
        if (confirm('Are you sure you want to delete r/'+this.state.sub.name)) {
            try {
                const sub = this.state.sub.name;
                const res = await repass.delete(`r/${sub}`);
                console.log(res.data);
                history.push('/');
            } catch(err) {
                console.log(err);
                alert(err.response.data.err); // alert error
            }
        }
    }

    getLink = (sub, user, id) =>{
        let link;
        if (sub) {
            link = `r/${sub}`;
            if (id) {
                link = `r/${sub}/${id}`;
            }
        } else if (user) {
            link = `u/${user}`;
        } else {
            link=`r/all`;
        }
        return link;
    }

    determineDest = async() => {

        let { sub, user, id } = this.props.match.params;
        const link = this.getLink(sub, user, id);
        let subName;

        if (user) {
            user= { username: user };
            return await this.setState({ user, id, link });
        } else if (sub) {
            subName = sub;
        } else {
            subName = 'all';
        }
        sub = { name: subName };
        await this.setState({ sub, id, link });
    }

    fetchSubInfo = async (subName) => {
        try {
            const loggedUser = this.props.state.user.username;
            const res = await repass.get(`r/${subName}`);
            let {description, users, isSubbed, mods, createdBy} = res.data;
            let numOfUsers=0;

            if (users) {
                if (users.length) {
                    numOfUsers = users.length;
                }
            }
            mods = mods ||[];

            const isMod = mods.indexOf(loggedUser) !==-1 || createdBy === loggedUser;
            const sub = {
                name: subName,
                info:description,
                numOfUsers,
                isSubbed,
                isMod
            }
            await this.setState({ sub });
        } catch(err) {
            // error finding the sub
            console.log(err.response);
            await this.setState({ doesNotExist: true });
        }
    }

    fetchUserInfo = async (username) => {
        try {
            const res = await repass.get(`u/${username}`);
            const user = res.data;
            console.log(user);
            await this.setState({ user });
        } catch(err) {
            console.log(err);
            await this.setState({ doesNotExist: true });
        }
    }

    fetchInfo = async() => {
        const { sub, user } = this.state;
        const destType = sub.name ? 'sub' : 'user';
        if (destType === 'sub') {
            await this.fetchSubInfo(sub.name);
        } else {
            await this.fetchUserInfo(user.username);
        }
    }

    determineState = async() => {
        
        await this.determineDest();
        await this.fetchCurrentUser();
        await this.fetchInfo();
        await this.fetchAllSubs();
        
    }
    componentDidMount= async()=>{
        await this.determineState();
    }

    async componentDidUpdate(){

        const { sub, user, id } = this.props.match.params;
        const newLink = this.getLink(sub, user, id);

        if (this.state.link !== newLink) {
            await this.determineState();
        }
    }

    renderCentral = () => {
        // if id is in the route params, then it is a thread
        const {id, user, sub } = this.state;
        const isThread = Boolean(id);
        // if the user or sub doesn't exist
        if (this.state.doesNotExist) {
            return <NotFoundError { ...this.state }/>
        }
        if (isThread) {
            return <PostPage id={id} sub={sub.name}/>
        }

        if (user.username || sub.name) {
            return <Posts sub={sub.name} user={ user.username}/>
        } else {
            return <p>Loading...</p>
        }
    }

    render() {
        let { theme, changeTheme, userLogout } = this.props.state;
        const loggedUser = this.props.state.user.username;
        const { user, sub, id, link, allSubs, userSubs, info } = this.state;
        
        return (
            <div className={styles.container}>
                <Header { ...this.state} theme={theme} changeTheme={changeTheme} loggedUser={loggedUser} userLogout={userLogout} />
                <main>
                    <div className={styles.central}>
                        {this.renderCentral()}
                    </div>
                    <div className={styles.sidebar} >
                        {sub.name || user ? 
                        <Info sub={sub} user={user} join={this.join} deleteHandler={this.deleteSub}/>
                        : null
                        }
                        <SubsList allSubs={allSubs} userSubs={userSubs}/>
                    </div>
                </main>
            </div>
        );
    }
}

export default withRouter(Main);