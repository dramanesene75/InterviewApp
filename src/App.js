import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import logo from './viseo.svg';
import './App.css';

function Candidat(user) {
    return <h2>Le candidat de cette interview est  {user.name}</h2>;
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',name: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static staticMethod(name) {
        return name;
    }

    handleChange(event) {

        this.setState( {value: event.target.value} );
    }
    handleSubmit(event) {
        this.setState({name: this.state.value});
        App.staticMethod(this.state.value);
        event.preventDefault();
    }

  render() {


    return (

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Bienvenue dans l'assistant d'entretien </h1>
      <form onSubmit={this.handleSubmit}>

          <label>
          Candidat:
  <input type="text" value={this.state.value || ''}   onChange={this.handleChange}  />
      </label>
      <input type="submit" onSubmit={this.handleChange}  />
      <Button title='Lancer' onClick={this.props.toggleLogin} >Lancer</Button>
      {(this.state.name!=='' && this.state.name!==undefined) && <Candidat name={this.state.name}/> }
          </form>


        </header>

    );
  }
}


export default App;
