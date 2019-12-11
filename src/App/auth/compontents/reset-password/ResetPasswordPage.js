import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import '../../../../assets/scss/style.scss';
import Aux from '../../../../hoc/_Aux';
import Breadcrumb from '../../../layout/AdminLayout/Breadcrumb';
import logoDark from '../../../../assets/images/logo-dark.png';

export default class ResetPasswordPage extends Component {
    render() {
        return (
            <Aux>
            <Breadcrumb/>
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="card">
                        <div className="row align-items-center text-center">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <img src={logoDark} alt="" className="img-fluid mb-4"/>
                                    <h4 className="mb-3 f-w-400">Reset your password</h4>
                                    <div className="input-group mb-4">
                                        <input type="email" className="form-control" placeholder="Email address" />
                                    </div>
                                    <button className="btn btn-block btn-primary mb-4" id="reset-password">Reset password</button>
                                    <p className="mb-0 text-muted">Already have an account? <NavLink to="/auth/login" className="f-w-400">Signin</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
        )
    }
}
