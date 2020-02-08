import React, { Component } from 'react';
import Grid from './Grid.js';

class Quiz extends Component {
  state = {
    categories: [],
    catSet: false,
    questions:[],
    queSet: false,
    showQuestion: false,
    showAnswer: false,
    showPoints: false,
    currentQuestion: "",
    currentAnswer: "",
    currentValue: 0,
    playerOne: 0,
    playerTwo: 0,
    playerThree: 0
  }

  getQuestions= async (e) => {
     let que = []
     for (var i = 0; i < 6; i++) {
       const api_call = await fetch(`http://jservice.io/api/clues?category=${this.state.categories[i]}`);
       const data = await api_call.json();
       console.log(data);
       que.push({
           id: data[0].category_id,
           title: data[0].category.title,
           questions:   [
            {question: data[0].question, answer:data[0].answer, value:200},
            {question: data[1].question, answer:data[1].answer, value:400},
            {question: data[2].question, answer:data[2].answer, value:600},
            {question: data[3].question, answer:data[3].answer, value:800},
            {question: data[4].question, answer:data[4].answer, value:1000}
          ]
       });
     }
     this.setState({
       questions: que,
       queSet: true
     });
  };

  getCategorys = async (e) => {
    let rand = Math.floor(Math.random() * 1000) + 1;
     const api_call = await fetch(`http://jservice.io/api/categories?count=6&offset=${rand}`);
     const data = await api_call.json();
     console.log(data);
     let temp;
     if (data.length > 5) {
     temp = [
       data[0].id,
       data[1].id,
       data[2].id,
       data[3].id,
       data[4].id,
       data[5].id
     ]
    }
     this.setState({
       categories: temp,
       catSet: true
     });
  };

  setCurrent = (i,j) => {
    let que = this.state.questions[i].questions[j].question;
    let ans = this.state.questions[i].questions[j].answer;
    let val = this.state.questions[i].questions[j].value;
    let copy = this.state.questions.slice();
    console.log(copy[i].questions[j].value);
    copy[i].questions[j].value = "";
    this.setState({
      questions: copy,
      currentQuestion: que,
      currentAnswer: ans,
      currentValue: val,
      showQuestion: true,
      showAnswer: false
    });
  }

  getState = () => {
    console.log(this.state);
  }

  showAnswer = () => {
    this.setState({
      showAnswer: true,
      showQuestion: false
    });
  }

  hideAnswer = () => {
    this.setState({
      showAnswer: false,
      showQuestion: false,
      showPoints: true
    });
  }

  score = (i) => {
    let val = this.state.playerOne + this.state.currentValue;
    switch(i) {
      case 1:
      this.setState({
        playerOne: val
      });
      break;
      case 2:
      this.setState({
        playerTwo: val
      });
      break;
      case 3:
      this.setState({
        playerThree: val
      });
      break;
      default:
        break;
    }
    this.setState({
      showPoints: false
    });
  }

  componentWillMount(){
      this.getCategorys();
  }

  componentDidUpdate(){
    if (this.state.queSet) {
    } else
      this.getQuestions();
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        { this.state.catSet ? ("") : "loading..."}
        <br/>
        { this.state.queSet ?
          (<Grid
            questions={this.state.questions}
            onClick={(i,j) => this.setCurrent(i,j)}
            >
          </Grid>)
          : "Loading Questions..."}

        {this.state.showQuestion ?
          (<button id="overlay" onClick={this.showAnswer}>{this.state.currentQuestion}</button>) : ("")}

        {this.state.showAnswer ?
          (<button id="overlay" onClick={this.hideAnswer}>{this.state.currentAnswer}</button>) : ("")}

          {this.state.showPoints ?
            (<div id="overlay">
              <div className="addScores">
                              Select the player who scored:<br></br>
                <button  onClick={(i) => this.score(1)}>Player 1</button>
                <button  onClick={(i) => this.score(2)}>Player 2</button>
                <button  onClick={(i) => this.score(3)}>Player 3</button>
                <button  onClick={(i) => this.score(0)}>No one</button>
              </div>
            </div>) : ("")}
            <div className="main__players">

              <div className="players">
                Player 1 <br></br>${this.state.playerOne}
              </div>
              <div className="players">
                Player 2 <br></br>${this.state.playerTwo}
              </div>
              <div className="players">
                Player 3 <br></br>${this.state.playerThree}
              </div>
            </div>
      </div>
    );
  }
}

export default Quiz;
