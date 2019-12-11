import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';

import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";


import { Redirect } from 'react-router';
import {connect} from "react-redux";
import {getCurrentUser} from "../../../../../data-store/user-group-services/actions/currentUserAction";
import propTypes from "prop-types";

class NavRight extends Component {

    componentDidMount() {
        this.props.getCurrentUser();
    }

    state = {
        listOpen: false,
        isLoggedIn:true
    };

    logoutUser = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.setState({ isLoggedIn:false});
    };

    render() {

        if (!this.state.isLoggedIn) {
            return <Redirect to = {{ pathname: '/auth/login' }} />;
          }

        return (
            <Aux>
                <ul className="navbar-nav ml-auto">
                    <li> 
                        <Dropdown alignRight={!this.props.rtlLayout} className="drp-user">
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-user"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="profile-notification">
                                <div className="pro-head">
                                    <span>{this.props.currentUser.user_name}</span>
                                    <a href={DEMO.BLANK_LINK} className="dud-logout" title="Logout">
                                        <i className="feather icon-log-out" onClick={this.logoutUser}/>
                                    </a>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </Aux>
        );
    }
}

NavRight.propTypes = {
    getCurrentUser :propTypes.func.isRequired,
    currentUser: propTypes.object.isRequired

};

const mapStateToProps = state => ({
    currentUser: state.currentUser,
});

export default connect(mapStateToProps, { getCurrentUser })(NavRight);
