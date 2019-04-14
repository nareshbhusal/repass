import React from 'react';
import styles from './SubForm.module.css';
import { Link } from 'react-router-dom';

class SubForm extends React.Component{
    state = {
        name: '',
        description:''
    }

    onSubmit = async(e) => {
        e.preventDefault();
        // const cors = 'https://cors-anywhere.herokuapp.com/';
        try{
            const res = await axios.post("http://localhost:5000/create/sub", {
                name: this.state.name,
                description: this.state.description
            });
            console.log(res);
            // this.props.history.push('/');
            
        } catch(err) {
            console.log(err);
        }
    }

    onChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        this.setState({ [inputName]: inputValue });
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} className={styles.login}>
                <label for="name">Name</label>
                <input value={this.state.name} onChange={this.onChange} required placeholder="name" name="name" type="text" />
                <label for="description">Description</label>
                <textarea value={this.state.description} onChange={this.onChange} required placeholder="description" name="description" />
                <input required type="submit" value="Login" />
            </form>
        );
    }
}

export default SubForm;