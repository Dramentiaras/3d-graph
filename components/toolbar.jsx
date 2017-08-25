import React from 'react';
import  { Navbar, Button, ButtonGroup, ButtonToolbar, Nav } from 'react-bootstrap';

export default class Toolbar extends React.Component {

    render() {
        return (
            <Navbar className="bg-faded navbar-light">
                <Navbar.Header>
                    <Navbar.Brand>
                        Grapher
                    </Navbar.Brand>
                </Navbar.Header>
                <ButtonToolbar className="mr-auto">
                    <ButtonGroup>
                        <Button bsSize="small">
                            <i className="fa fa-plus"></i>
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Navbar>
        );
    }
}
