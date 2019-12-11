import React, { Component } from 'react';

import {
    Col,
    Card
} from 'react-bootstrap';
import Aux from "../../hoc/_Aux"

export default class Producers extends Component {
    render() {
        return ( 
            <Aux>
                <Col>
                    <Card>
                        <h1 >Producers works </h1>
                    </Card>
                </Col>
            </Aux>
        )
    }
}