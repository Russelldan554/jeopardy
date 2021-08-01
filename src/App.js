import React, { Component } from 'react';
import Header from './Components/Header.js';
import Quiz from './Components/Quiz.js';

import './App.css';

class App extends Component {
  state = {
    play: true
  };

  play = (e) => {
     e.preventDefault();
     this.setState({play:!this.state.play}); 
   }

  render() {
    return (
      <div className="main">
        {this.state.play ?
        (
          <div className="main__header">
          <Header></Header>
          <button id="play" onClick={this.play}>play</button>
          </div>
        ) :
        (
          <div className="main__content">
            <h1>JEOPARDY!</h1>
            <Quiz></Quiz>
          </div>
        )}
      </div>
    );
  }
}

export default App;
