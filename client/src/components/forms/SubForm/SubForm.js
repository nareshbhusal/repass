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
            const { sub } = this.props.match.params;
            if (sub) {
                await this.editSub(sub);
            } else {
                await this.createSub();
            }
            history.push(`/r/${this.state.title}`);
            
        } catch(err) {
            console.log(err.response);
            alert(err.response.data.err);
        }
    }
    createSub = async() => {
        const res = await repass.post("subs/create", {
            name: this.state.title,
            description: this.state.description
        });
        console.log(res.data);
    }
    editSub = async(sub) => {
        const res = await repass.put(`/r/${sub}`, {
            description: this.state.description
        });
        console.log(res.data);
    }
    fetchSub = async(sub) => {
        try {
            const res = await repass.get(`/r/${sub}`);
            const { name, description } = res.data;
            const title = name;
            this.setState({ title, description });
        } catch(err) {
            console.log(err.response);
            alert(err.response.data.err);
        }
    }
    async componentDidMount(){
        const { sub } = this.props.match.params;
        console.log(this.props.match.params)
        if (sub){
            await this.fetchSub(sub);
        }
    }

    onChange = (e) => {
        const { sub } = this.props.match.params;
        const inputName = e.target.name;
        const inputValue = e.target.value;
        if (sub && inputName==='title'){
            return alert('Can\'t change name of the sub');
        }
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