import React, { Component } from 'react';

// import propTypes from 'prop-types';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.submitForm(this.state);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email address" name="username" onChange={this.handleChange} value={this.state.username }/>
                </div>
                <div className="input-group mb-4">
                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password }/>
                </div>
                <button type="submit" className="btn btn-block btn-primary mb-4" id="sign-button">Signin</button>
         </form>
        )
    }
}

export default LoginForm;
