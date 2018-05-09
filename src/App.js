import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const name1 = 'WTISC 2018';
const name2 = 'ReactJS Training';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: name1
    };
  }

  changeName = () => {
    const name = this.state.name === name1 ? name2 : name1;
    this.setState({
      name
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{`Welcome to ${this.state.name}`}</h1>
        </header>
        <button onClick={this.changeName}>Change name</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
