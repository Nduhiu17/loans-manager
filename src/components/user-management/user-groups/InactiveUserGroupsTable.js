import React from 'react';
import {Card, Table} from 'react-bootstrap';

class InactiveUserGroupsTable extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
                <Card.Body>
                    <Table ref="tbl" striped hover responsive bordered className="table table-condensed" id="inactive-user-group-table">
                        <thead>
                        <tr>
                            <th>Role Name</th>
                            <th>Description</th>
                            <th>Created By</th>
                            <th>Created On</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                        <th>Role Name</th>
                            <th>Description</th>
                            <th>Created By</th>
                            <th>Created On</th>
                            <th>Action</th>
                        </tr>
                        </tfoot>
                    </Table>
                </Card.Body>
        );
    }
}

export default InactiveUserGroupsTable;