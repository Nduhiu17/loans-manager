import React from 'react';

import {
    Col,
    Card
} from 'react-bootstrap';
import Aux from "../../hoc/_Aux"




class CustomerAnalytics extends React.Component {
    render() {
        return (
            <Aux>
                <Col>
                    <Card>
                        <h1 >Customer analytics works </h1>
                    </Card>
                </Col>
            </Aux>
        );
    }
}

export default CustomerAnalytics;