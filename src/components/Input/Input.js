import React from 'react';
import styles from './Input.module.css';

class Input extends React.Component{
    state = {
        body: ''
    }
    
    onChangeHandler = (e) => {

        const { value } = e.target;
        this.setState({ body: value });
    }
    componentDidMount = () => {
        const body = this.props.value || '';
        this.setState({ body });
    }
    onSubmitHandler = async () => {
        await this.props.onSubmit(this.state.body);
        if (this.props.type !=='reply') {
            await this.setState({ body:'' });
        }
    }
    render() {

        const btnText = this.props.type==='reply' ? 'Reply' : 'Comment';
        return (
            <div className={styles.input}>
                <textarea 
                    autoFocus={this.props.type === 'reply'}
                    name="body" 
                    value={this.state.body}
                    onChange={this.onChangeHandler} 
                    placeholder="What are your thoughts?">
                </textarea>

                <div className={styles.actions}>
                    <button onClick={this.onSubmitHandler} 
                        className={styles.submitButton}>
                        {btnText}
                    </button>

                    {this.props.onCancel ? 
                    <button onClick={this.props.onCancel} className={styles.cancelButton}>
                        Cancel
                    </button> 
                    :null}
                    
                </div>
            </div>
        );
    }
}

export default Input;