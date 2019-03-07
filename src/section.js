import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {section: this.props.section};

    }

    render() {

        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1> Section n° {this.state.section} </h1>
            <h3> Notion n°1 </h3>
            <h3> Notion n°2 </h3>
        <ButtonGroup>

        <Button title='Start' onClick={this.props.toggleSection} >1</Button>
        <Button title='Start' onClick={this.props.toggleSection} >2</Button>
        <Button title='Start' onClick={this.props.toggleSection} >3</Button>
        <Button title='Start' onClick={this.props.toggleSection} >4</Button>
        <Button title='Start' onClick={this.props.toggleSection} >5</Button>
            </ButtonGroup>

        </header>

    );
    }
}

export default Section;