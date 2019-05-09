import React, { Component } from 'react';
import './App.css';

import Box from './components/Box/Box';

class App extends Component {
  constructor(props) {
    super(props);
    this.player1 = {
      name: 'A',
      color: 'red',
    };

    this.player2 = {
      name: 'B',
      color: 'blue',
    };

    this.state = {
      activePlayer: this.player1
    }
  }


  onClickLine = () => {
    this.setState({
      activePlayer: this.state.activePlayer.name === 'A' ? this.player2 : this.player1
    })
  };

  render() {
    return (
      <Box onClickLine={this.onClickLine} activePlayer={this.state.activePlayer}/>
    )
  }
}

export default App;
