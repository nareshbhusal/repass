import React from 'react';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import SubsList from '../../components/SubsList/SubsList';
import Posts from '../../components/Posts/Posts';
import PostPage from '../../components/PostPage/PostPage';
import TopNav from '../../components/Header/Nav/TopNav/TopNav';
import NotFoundError from '../../components/NotFoundError/NotFoundError';
import Footer from '../../components/Footer/Footer';
import styles from './Main.module.css';

import { withRouter } from 'react-router';
import repass from '../../repass';

// helpers
import { joinSub, determineTheme, determineDest, deleteSub, getAllSubs, fetchSubInfo, fetchUserInfo } from '../../helpers/index';

class Main extends React.Component{

    state = {
        user: {},
        sub: {},
        id: null,
        link: '',
        allSubs: [],
        userSubs:[],
        doesNotExist: false,
    }

    fetchLoggedUser = async() => {
        try {
            const res = await repass.get('users/me');
            const { username, subs } = res.data;

            this.props.store.userLogin(username);
            if (subs) {
                await this.setState({ userSubs: subs });
            }
        } catch(err) {
            // error fetching loggedUser or not logged in
            console.log(err.response.data.err);
        }
    }

    join = async() => {
        const subName = this.state.sub.name;
        await joinSub(subName);
        await this.fetchInfo();
        await this.fetchLoggedUser();
    }

    fetchInfo = async() => {
        const { sub, user } = this.state;

        const destType = sub.name ? 'sub' : 'user';
        if (destType === 'sub') {
            const loggedUser = this.props.store.user.username;
            const subInfo = await fetchSubInfo(sub.name, loggedUser);
            await this.setState({ ...subInfo, user: {} });

        } else {
            const userInfo = await fetchUserInfo(user.username);
            await this.setState({ ...userInfo, sub:{} });
        }
    }

    determineState = async() => {
        const { theme, changeTheme } = this.props.store;
        const currentTheme = theme.theme;
        await determineTheme(currentTheme, changeTheme);
        const dest = await determineDest(this.props);
        await this.setState({ ...dest, doesNotExist: false });

        await this.fetchLoggedUser();
        await this.fetchInfo();
        const allSubs = await getAllSubs();
        await this.setState({ allSubs });
    }

    componentDidMount= async()=>{
        await this.determineState();
    }

    async componentDidUpdate(){
        const { link } = determineDest(this.props);
        if (this.state.link !== link) {
            await this.determineState();
        }
    }

    renderCentral = () => {
        // if id is in the route params, then it is a thread
        const {id, user, sub, search, t, doesNotExist, link } = this.state;
        const pathProps = { id, search, user, t, link };
        const { theme } = this.props.store;
        const isThread = Boolean(id);
        // if the user or sub doesn't exist
        if (doesNotExist) {
            return <NotFoundError { ...this.state }/>
        } else if (isThread) {
            return <PostPage id={id} sub={sub.name}/>
        } else if (user.username || sub.name) {
            return <Posts sub={sub.name} user={ user.username} pathProps={pathProps} theme={theme.theme}/>
        } else {
            return <p>Loading...</p>
        }
    }

    deleteCurrentSub = async () => {
        const { sub } = this.state;
        await deleteSub(sub.name);
        await this.determineState();
    }

    render() {
        let { theme, changeTheme, userLogout } = this.props.store;
        theme=theme.theme;
        const loggedUser = this.props.store.user.username;
        const { user, sub, allSubs, userSubs } = this.state;
        const topNavContentData = { user, sub, join: this.join, theme, deleteHandler: this.deleteCurrentSub, allSubs, userSubs };

        return (
            <div className={`${styles.container} ${theme==='dark' ? styles.dark : styles.light}`}>

                <Header 
                    { ...this.state} theme={theme} 
                    changeTheme={changeTheme} 
                    loggedUser={loggedUser}
                    sub={sub} 
                    userLogout={userLogout} 
                    />

                <main className={theme === 'dark'? styles.dark : styles.light}>
                    <div className={styles.central}>
                        {this.renderCentral()}
                    </div>

                    <div className={styles.sidebar} >
                        {sub.name || user ? 
                        <Info sub={sub} 
                            user={user} 
                            join={this.join} 
                            theme={theme} 
                            deleteHandler={this.deleteCurrentSub}/>
                        : null
                        }
                        <SubsList 
                            allSubs={allSubs}
                            userSubs={userSubs}
                            theme={theme}/>
                    </div>
                    <TopNav className={styles.topnav} topNavContentData={topNavContentData}/>
                </main>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default withRouter(Main);