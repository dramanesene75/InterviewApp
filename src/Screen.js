import React, { Component } from 'react';
import App from './App';
import Horaire from './Horaire';
import './App.css';

class Screen extends Component {
    constructor(props){
        super(props);
        this.state = {login: 0, name : 0};
    }
    toggleLogin = () => this.setState(prevState => ({ login: ++prevState.login }))
render(){
console.log(this.state.login);
    return (
        <div>
        {this.state.login===1    ? <App toggleLogin={this.toggleLogin} /> :
    <Horaire toggleLogin={this.toggleLogin} />}
    </div>
    );
        }
}



export default Screen;