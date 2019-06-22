import React from 'react';
import styles from './SubForm.module.css';
import history from '../../../history';
import axios from 'axios';

class SubForm extends React.Component{
    state = {
        title: '',
        description:''
    }

    onSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/subs/create", {
                name: this.state.title,
                description: this.state.description
            });
            console.log(res);
            
            history.push(`/r/${this.state.title}`);
            
        } catch(err) {
            console.log(err.response);
        }
    }

    onChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        this.setState({ [inputName]: inputValue });
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} className={styles.subform}>
                <label htmlFor="title">Name</label>
                <input value={this.state.title} onChange={this.onChange} required placeholder="name of the sub" name="title" type="text" />
                <label htmlFor="description">About</label>
                <textarea value={this.state.description} onChange={this.onChange} required placeholder="about this sub" name="description" />
                <input required type="submit" value="Submit" />
            </form>
        );
    }
}

export default SubForm;