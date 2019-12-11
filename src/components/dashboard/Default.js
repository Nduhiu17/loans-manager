import React from 'react';

import {
    Col,
    
    Row
} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/layout/AdminLayout/Navigation/MainCard";


class Default extends React.Component {

    render() {
        return (
            <Aux>
            <Row>
                <Col>
                    <Card title='Weekly New Loans Analysis' isOption>
                        <p>
                        Weekly new loans dashboard works
                        </p>
                    </Card>
                    <Card title='Weekly Overdue Loans' isOption>
                        <p>
                        Weekly over due loans dashboard works
                        </p>
                    </Card>
                    <Card title='Weekly Revenue Analysis' isOption>
                        <p>
                        Weekly over revenue dashboard works
                        </p>
                    </Card>
                </Col>
            </Row>
        </Aux>
        );
    }
}

export default Default;