import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import '../../../../assets/scss/style.scss';
import Aux from '../../../../hoc/_Aux';
import Breadcrumb from '../../../layout/AdminLayout/Breadcrumb';
import logoDark from '../../../../assets/images/logo-dark.png';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router';
import { encode } from "base-64";


export default class LoginPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isSignedUp: false,
            formData: {}
            
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    


    handleFormSubmit(formData) {

        const bodyFormData = new FormData();

        bodyFormData.set('username',formData.username);
        bodyFormData.set('password',formData.password);
       


        var details = {
            'username': formData.username,
            'password': formData.password,
            'grant_type': 'password'
        };
    
        var formBody = [];
        for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
    formBody = formBody.join("&");
   
      this.setState({ formData:formData});

      let username = 'portal';
      let  password = 'pin';

    async function fetchAsync () {
    // await response of fetch call
    let response = await fetch('https://gateway.stokisha.com/oauthservice/oauth/token',{
        method: 'post',
        headers: new Headers({
          'Authorization': 'Basic ' + encode(`${username}:${password}`),
          'Content-Type': 'application/x-www-form-urlencoded;boundary=gc0p4Jq0M2Yt08jU534c0p'
        }),
        body: formBody
      });
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;
  }
  
  // trigger async function
  // log response or catch error of fetch promise
  fetchAsync()
      .then(data => {
            localStorage.setItem("token",data.access_token);
            this.setState({ isSignedUp:true});
      } )
      .catch(error => console.log(error.message))
      
}

    render() {
        if (this.state.isSignedUp) {
            // redirect to home if signed up
            return <Redirect to = {{ pathname: '/dashboard/default' }} />;
          }
        return ( 
            <Aux>
            <Breadcrumb/>
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="card">
                        <div className="row align-items-center text-center">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <img src={logoDark} alt="" className="img-fluid mb-4" />
                                    <h4 className="mb-3 f-w-400">Signin</h4>
                                    <LoginForm submitForm={this.handleFormSubmit}/>
                                    <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password" className="f-w-400">Reset</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
        );
    }
}