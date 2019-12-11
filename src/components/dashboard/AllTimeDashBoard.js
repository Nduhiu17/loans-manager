import React from 'react';

import {
    Col,
    Card
} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";



class AllTimeDashBoard extends React.Component {
    render() {
        return (
            <Aux>
                <Col>
                    <Card>
                        <h1 > All time dashboard works </h1>
                    </Card>
                 </Col>
            </Aux>
        );
    }
}

export default AllTimeDashBoard;