import React from 'react';
import {OverlayTrigger, Tooltip, Table, Modal, Button} from 'react-bootstrap';
import CreateUserGroup from "../components/user-management/user-groups/CreateUserGroup";

class UserGroupTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy:this.props.sortBy,
            data:this.props.data,
            isBasic: false,
            isVertically: false,
            isTooltip: false,
            isGrid: false,
            isScrolling: false,
            isLarge: false,
            title: ''
        }
    }


    render() {
        return (
            <div>
                <Table striped hover responsive bordered className="table table-condensed">
                    <thead>
                    <tr>
                        <th>Name<i className="fa fa-fw fa-sort" onClick={() => this.state.sortBy('displayDate')}></i></th>
                        <th>Description<i className="fa fa-fw fa-sort" onClick={() => this.state.sortBy('displayDate')}></i></th>
                        <th>Created By<i className="fa fa-fw fa-sort" onClick={() => this.state.sortBy('displayDate')}></i></th>
                        <th>Created On<i className="fa fa-fw fa-sort" onClick={() => this.state.sortBy('displayDate')}></i></th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((row,index) => (
                            <tr key={index}>
                                <td> {row.name}</td>
                                <td> {row.description}</td>
                                <td> {row.createdBy}</td>
                                <td> {row.displayDate}</td>
                                <td>
                                    <div className="fafa-role-icons">
                                        <OverlayTrigger
                                            placement='bottom'
                                            overlay={<Tooltip id={`tooltip-right`}>Edit User Group</Tooltip>}>
                                            <i className="fas fa-edit" id="fafa-edit"></i>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement='bottom'
                                            overlay={<Tooltip id={`tooltip-right`}>Deactivate User Group</Tooltip>}>
                                            <i className="fa fa-cog" aria-hidden="true" id="fafa-deativate"></i>
                                            <Modal size="lg" show={this.state.isLarge}
                                                   onHide={() => this.setState({isLarge: false})}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title as="h5">Create User Group</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <CreateUserGroup/>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary"
                                                            onClick={() => this.setState({isLarge: false})}>Close</Button>
                                                    <Button variant="primary">Save Changes</Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </OverlayTrigger>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );

    }

}

export default UserGroupTable;

