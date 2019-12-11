import React, { Component } from 'react';

import {
    Col,
    Card
} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";

export default class Users extends Component {
    render() {
        return (
            <Aux>
                <Col>
                    <Card>
                        <h1 >User  works</h1>
                    </Card>
                </Col>
           </Aux>
        )
    }
}