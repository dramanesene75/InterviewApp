import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class Horaire extends Component {


    render() {
        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Il est {new Date().toLocaleTimeString()}.</h3>
        <Button title='Start' onClick={this.props.toggleLogin} >Start interview</Button>
        </header>

    );
    }
}

export default Horaire;