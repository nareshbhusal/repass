import React from 'react';
import Post from './Post/Post';
import Sort from '../Sort/Sort';
import styles from './Posts.module.css';
import repass from '../../repass';

class Posts extends React.Component{
    
    state = {
        posts: [],
        destType: null,
        sub:null,
        user:null,
        page: 1
    }
    fetchPosts = async() => {
        try {
            await this.toggleLoading();
            this.enableInfiniteScroll();
            let { page, link, posts } = this.state;
            if (this.props.sub) {
                link = `${link}&page=${page}`;
            } else {
                link = `${link}?page=${page}`;
            }
            const res = await repass.get(link);
            let newPosts = res.data || [];
            posts = [ ...posts, ...newPosts ];
            if (newPosts.length) {
                await this.setState({ posts, page: page+1 });
            } else {
                this.disableInfiniteScroll();
                await this.setState({ posts, page: page+1 });
            }
        } catch(err) {
            console.log(err);
        }
        this.toggleLoading();
    }

    determineState = async() => {
        const { pathProps } = this.props;
        const { link } = pathProps;
        const { sub, user } = this.props;
        const destType = sub ? 'sub' : 'user';
        await this.setState({ sub, user, destType, link });
        await this.resetState();
        await this.fetchPosts();
    }
    resetState = async() => {
        await this.setState({ posts:[], page: 1 });
    }

    async componentDidMount() {
        await this.determineState();
    }

    async componentDidUpdate(){
        const { pathProps } = this.props;
        const newLink = pathProps.link;
        const { link } =this.state;
        if (link !==newLink) {
            await this.determineState();
        }
    }
    componentWillUnmount(){
        this.disableInfiniteScroll();
    }

    reachedNearBottom() {
        const scrollAtPercentHeight = 85;
        var D = document;
        const docHeight =  Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
        const scrollPosition = window.scrollY + window.innerHeight;
        return (scrollPosition/docHeight)*100 > scrollAtPercentHeight;
    }

    toggleLoading = async() => {
        await this.setState({ loading: !this.state.loading });
    }

    scrollEventListener = async() => {
        if (this.reachedNearBottom() && !this.state.loading) {
            console.log('load more posts now!');
            await this.fetchPosts();
        }
    }

    enableInfiniteScroll() {
        window.addEventListener('scroll', this.scrollEventListener);
    }
    disableInfiniteScroll(){
        window.removeEventListener('scroll', this.scrollEventListener);
    }

    render(){
        let { search, user } = this.props.pathProps || {};
        const { theme } = this.props;
        let { sub, destType, posts, loading } = this.state;
        user=user || {};

        return (
            <div className={styles.container}>
                {sub ? 
                <Sort search={search} 
                    sub={sub} 
                    username={user.username} 
                    theme={theme} />
                : null
                }
                {posts.length ? 
                    <div className={styles.posts}>
                        {posts.map(post => {
                            return <Post key={post.id} id={post.id}/> 
                        })}
                    </div> :
                    <div className={styles.noActivity}>
                    {destType === 'sub' ? 
                        <React.Fragment>
                            <p>No Posts for this criteria!</p>
                        </ React.Fragment > :

                        <p>User hasn't posted anything!</p>
                    } 
                    </ div>
                }
                {loading ? 
                <p>Loading...</p>
                : null}
            </div>
        );
    }
}

export default Posts;