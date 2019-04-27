import React, { Component } from "react";
import './App.css';
import Image from './components/image.js'

class App extends Component {

  state = {
    score: 0,
    message: ''
  };

  resetScore = () => {
    this.setState({
      score: 0,
      message: 'Sorry, you loose'
    })
  };

  increaseScore = () => {
    this.setState({
      score: this.state.score + 1,
      message: ''
    })
  };

  render() {
    return (
        <div>
          <p>Click on images until you've click all of them but haven't clicked two twice</p>
          <p>{this.state.message}</p>
          <div>Score: {this.state.score} </div>
          <Image resetScore={this.resetScore} increaseScore={this.increaseScore}/>
        </div>
    );
  }

}

export default App;
