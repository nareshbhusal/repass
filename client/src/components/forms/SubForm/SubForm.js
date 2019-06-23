import React from 'react';
import styles from './SubForm.module.css';
import history from '../../../history';
import { connect } from 'react-redux';
import repass from '../../../repass';

class SubForm extends React.Component{
    state = {
        title: '',
        description:''
    }

    onSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await repass.post("subs/create", {
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
        const theme = this.props.theme.theme;
        return (
            <div className={styles.container + ` ${theme==='dark' ? styles.dark :styles.light}`}>
                <form onSubmit={this.onSubmit} className={styles.subform + ` ${theme==='dark' ? styles.dark :styles.light}`}>
                    <label htmlFor="title">Name</label>
                    <input value={this.state.title} onChange={this.onChange} required placeholder="name of the sub" name="title" type="text" />
                    <label htmlFor="description">About</label>
                    <textarea value={this.state.description} onChange={this.onChange} required placeholder="about this sub" name="description" />
                    <input required type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {  })(SubForm);