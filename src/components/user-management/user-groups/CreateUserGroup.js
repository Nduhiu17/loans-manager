import React, {Component} from 'react';
import {Row, Col, Card,Form} from 'react-bootstrap';

import Select from 'react-select';

import chroma from 'chroma-js';
import Container from "react-bootstrap/Container";



export const colourOptions = [
    { value: 'Super admin', label: 'Super admin'},
    { value: 'Dash board', label: 'Dash board'},
    { value: 'Business development', label: 'Business development'},
    { value: 'Test group', label: 'test group'},
    { value: 'Marketing', label: 'marketing'},
    { value: 'Producer admin', label: 'Producer admin'},
    { value: 'Super admin', label: 'Super admin'},
    { value: 'Dash board', label: 'Dash board'},
    { value: 'Business development', label: 'Business development'},
    { value: 'Test group', label: 'test group'},
    { value: 'Marketing', label: 'marketing'},
    { value: 'Producer admin', label: 'Producer admin'}
];

const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
    },
});

const colourStylesSingle = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',
        };
    },
    input: styles => ({ ...styles, ...dot() }),
    placeholder: styles => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const colourStylesMulti = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',
        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};

const styles = {
    multiValue: (base, state) => {
        return state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base;
    },
    multiValueLabel: (base, state) => {
        return state.data.isFixed ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 } : base;
    },
    multiValueRemove: (base, state) => {
        return state.data.isFixed ? { ...base, display: 'none' } : base;
    }
};

const orderOptions = (values) => {
    return values.filter((v) => v.isFixed).concat(values.filter((v) => !v.isFixed));
};
class CreateUserGroup extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: orderOptions([colourOptions[3], colourOptions[6], colourOptions[8]])
        };
    }

    onChange (value, { action, removedValue }) {
        switch (action) {
            case 'remove-value':
            case 'pop-value':
                if (removedValue.isFixed) {
                    return;
                }
                break;
            case 'clear':
                value = colourOptions.filter((v) => v.isFixed);
                break;
            default:
                break;

        }

        value = orderOptions(value);
        this.setState({ value: value });
    }

    render() {
        return (
                <Container>
                    <Row>
                        <Col sm>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Text" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            </Col>
                        <Col sm>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Dashboard permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[0], colourOptions[0]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Users Permission</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Producer admin permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Distributor admin permissions </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Retailer permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Product permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Order permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Report permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Distributor Customer Module</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Finance permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                        </Col>
                        <Col sm>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Role permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Producer permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Distributor permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Sub Distributor permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Product Category permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Product UOM permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Configuration permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Customer Upload permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Supplier permissions</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select
                                            defaultValue={[colourOptions[2], colourOptions[3]]}
                                            isMulti
                                            name="colors"
                                            options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </Card.Body>
                                </Card>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

CreateUserGroup.propTypes = {};

export default CreateUserGroup;
