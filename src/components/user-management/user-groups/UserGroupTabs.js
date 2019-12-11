import React from 'react';
import {Row, Col, Card, Tabs, Tab, Button, Modal} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import ActiveUserGroup from './ActiveUserGroup';
import NewUserGroupTable from './NewUserGroupTable';
import EditedUserGroupTable from './EditedUserGroupTable';
import DeactivatedUserGroupTable from './DeactivatedUserGroupTable';
import InactiveUserGroupsTable from './InactiveUserGroupsTable';
import CreateUserGroup from "./CreateUserGroup";


class UserGroupTabs extends React.Component {

    state = {
        isBasic: false,
        isVertically: false,
        isTooltip: false,
        isGrid: false,
        isScrolling: false,
        isLarge: false,
        title: ''
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header className="create-role-button">
                                <Card.Title as='h5'>User Groups/Roles</Card.Title>
                                <div>
                                    <Button variant="primary" size="sm" onClick={() => this.setState({ isLarge: true })}>Create Role</Button>
                                    <Modal size="lg" show={this.state.isLarge} onHide={() => this.setState({ isLarge: false })}>
                                        <Modal.Header closeButton>
                                            <Modal.Title as="h5">Create User Group</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <CreateUserGroup/>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => this.setState({ isLarge: false })}>Close</Button>
                                            <Button variant="primary">Save Changes</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="tab-button">

                                    <Tabs defaultActiveKey="home" className="mb-3">
                                        <Tab eventKey="home" title="Active Records">
                                            <ActiveUserGroup/>
                                        </Tab>
                                        <Tab eventKey="profile" title="New Records">
                                            <NewUserGroupTable/>
                                        </Tab>
                                        <Tab eventKey="edited" title="Edited Records">
                                            <EditedUserGroupTable/>
                                        </Tab>
                                        <Tab eventKey="deactivated" title="Deactivated Records">
                                            <DeactivatedUserGroupTable/>
                                        </Tab>
                                        <Tab eventKey="inactive" title="Inactive Records">
                                            <InactiveUserGroupsTable/>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default UserGroupTabs;
