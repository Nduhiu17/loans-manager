import React, { Component } from 'react';

import {
    Col,
    Card
} from 'react-bootstrap';
import Aux from "../../hoc/_Aux"

export default class ProducerAdmins extends Component {
    render() {
        return ( 
            <Aux>
                <Col>
                    <Card>
                        <h1 >Producer admin works </h1>
                    </Card>
                </Col>
             </Aux>
               )
    }
}