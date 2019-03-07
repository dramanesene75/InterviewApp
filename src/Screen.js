import React, { Component } from 'react';
import App from './App';
import Section from './section';
import Chapter from './chapter';
import './App.css';

class Screen extends Component {
    constructor(props){
        super(props);
        this.state = {login: -1,chapitre :1,section :1};
    }
    toggleLogin = () => this.setState(prevState => ({ login: ++prevState.login }))
    toggleChapitre = () => this.setState(prevState => ({ chapitre: ++prevState.chapitre,login :++prevState.login }))
    toggleSection = () => this.setState(prevState => ({ section: ++prevState.section,login :++prevState.login }))

render(){
    let button;
    if (this.state.login ===-1){
        button = <App toggleLogin={this.toggleLogin} />;
    }else if (this.state.login%2 ===1) {
        button = <Section toggleSection={this.toggleSection} section = {this.state.section}/>;


    } else {
        button =  <Chapter toggleChapitre={this.toggleChapitre} chapitre = {this.state.chapitre} />;
    }
    return (
        <div>
        {button}
    </div>
    );
        }
}



export default Screen;