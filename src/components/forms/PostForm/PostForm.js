import React from 'react';
import styles from './PostForm.module.css';
import history from '../../../history';
import repass from '../../../repass';

// Used as form for both creating and editing post

class PostForm extends React.Component{
    state = {
        title: '',
        body:''
    }

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

    onChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        this.setState({ [inputName]: inputValue });
    }

    componentDidMount = async () => {
        const {id} = this.props.match.params;
        if (id || id ===0) {
            await this.fetchPost();
        }
    }

    render(){
        const sub = this.props.match.params.sub;
        return (
            <form onSubmit={this.onSubmit} className={styles.postform}>
                <label htmlFor="title">Title</label>
                <input value={this.state.title} onChange={this.onChange} required name="title" type="tel" placeholder="Title of your post" />
                <label htmlFor="body">Body</label>
                <textarea value={this.state.body} onChange={this.onChange} placeholder="" name="body" placeholder="(optional)" />
                <input required type="submit" value={`Post to r/${sub}`} />
            </form>
        );
    }
}

export default PostForm;