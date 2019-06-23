import React from 'react';
import styles from './PostForm.module.css';
import history from '../../../history';
import { connect } from 'react-redux';
import repass from '../../../repass';

// Used as form for both creating and editing post

class PostForm extends React.Component{
    state = {
        title: '',
        body:''
    }
    bodyRef=React.createRef();
    titleRef=React.createRef();

    onSubmit = async(e) => {
        e.preventDefault();
        const {id} = this.props.match.params;
        if (id) {
            // edit
            await this.submitEdit();
        } else {
            // create
            await this.submitPost();
        }
    }

    submitPost = async () => {
        try{
            const { title, body }= this.state;
            const sub = this.props.match.params.sub;
            const res = await repass.post(`r/${sub}/`, {
                title,
                body
            });
            console.log(res.data);
            
            history.push(`/r/${sub}`);
            
        } catch(err) {
            console.log(err.response);
            alert(err.response.data.err); // alert error
        }
    }

    submitEdit = async () => {
        try {
            const { sub, id } = this.props.match.params;
            const res = await repass.put(`r/${sub}/${id}`, {
                ...this.state
            });
            console.log(res.data);
            history.push(`/r/${sub}/${id}`);
        } catch(err) {
            console.log(err);
            alert(err.response.data.err); // alert error
        }
    }

    fetchPost = async() => {
        try {
            const { sub, id } = this.props.match.params;
            const res = await repass.get(`r/${sub}/${id}`);
            const { title, body } = res.data;
            await this.setState({ title, body });
        } catch(err) {
            console.log(err);
            alert(err.response.data.err); // alert error
        }
    }

    onChangeHandler = async(e) => {
        e.persist();
        const name = e.target.getAttribute('name');
        let value = this[`${name}Ref`].current.innerHTML;
        await this.setState({ [name]: value });
    }

    componentDidMount = async () => {
        const {id} = this.props.match.params;
        if (id || id ===0) {
            await this.fetchPost();
        }
        this.bodyRef.current.innerHTML = this.state.body;
        this.titleRef.current.innerHTML = this.state.title;
    }

    render(){
        const sub = this.props.match.params.sub;
        const { theme } = this.props.theme;
        return (
            <div className={styles.container + ` ${theme==='dark' ? styles.dark :styles.light}`}>
                <form onSubmit={this.onSubmit} className={styles.postform + ` ${theme==='dark' ? styles.dark :styles.light}`}>
                    <h1 contentEditable
                        name="title"
                        ref={this.titleRef} 
                        className={styles.title}
                        onInput={this.onChangeHandler}
                        onBlur={this.onChangeHandler} 
                        placeholder="Title of your post">
                    </h1>
                    <p contentEditable
                        name="body"
                        ref={this.bodyRef}
                        className={styles.body}
                        onInput={this.onChangeHandler}
                        onBlur={this.onChangeHandler}
                        placeholder="body">
                    </p>
                    <input type="submit" value={`Post to r/${sub}`} />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {  })(PostForm);