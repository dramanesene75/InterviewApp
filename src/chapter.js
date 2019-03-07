import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import logo from './viseo.svg';
import './App.css';

class Chapter  extends Component {
    constructor(props) {
        super(props);
        this.state = {chapitre: this.props.chapitre};

    }

    render() {
        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <h1>Récap des objectifs du chapitre n°{this.state.chapitre} </h1>

          <h3>  Section n°1</h3>
          <h3>  Section n°2</h3>
          <h3>  Section n°3</h3>

        <Button title='Start' onClick={this.props.toggleChapitre} >Première Section</Button>
        </header>

    );
    }
}

export default Chapter;