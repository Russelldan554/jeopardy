import React, { Component } from 'react';

class Grid extends Component {

  showQuestion = (i , j, value) => {
      return <button onClick={() => this.props.onClick(i,j)} >
        {this.props.questions[i].questions[j].value ? ("$") : ""}
        {this.props.questions[i].questions[j].value}</button>
  };

  render(props) {
    return (
      <div className="content__grid">
        <table>
          <thead id="cats">
            <tr>
              <th>{this.props.questions[0].title.toUpperCase()} </th>
              <th>{this.props.questions[1].title.toUpperCase()} </th>
              <th>{this.props.questions[2].title.toUpperCase()} </th>
              <th>{this.props.questions[3].title.toUpperCase()} </th>
              <th>{this.props.questions[4].title.toUpperCase()} </th>
              <th>{this.props.questions[5].title.toUpperCase()} </th>
            </tr>
          </thead>
          <tbody id="grid">
          <tr>
            <th>{this.showQuestion(0,0)} </th>
            <th>{this.showQuestion(1,0)} </th>
            <th>{this.showQuestion(2,0)} </th>
            <th>{this.showQuestion(3,0)} </th>
            <th>{this.showQuestion(4,0)} </th>
            <th>{this.showQuestion(5,0)} </th>
          </tr>
          <tr>
            <th>{this.showQuestion(0,1)} </th>
            <th>{this.showQuestion(1,1)} </th>
            <th>{this.showQuestion(2,1)} </th>
            <th>{this.showQuestion(3,1)} </th>
            <th>{this.showQuestion(4,1)} </th>
            <th>{this.showQuestion(5,1)} </th>
          </tr>
          <tr>
            <th>{this.showQuestion(0,2)} </th>
            <th>{this.showQuestion(1,2)} </th>
            <th>{this.showQuestion(2,2)} </th>
            <th>{this.showQuestion(3,2)} </th>
            <th>{this.showQuestion(4,2)} </th>
            <th>{this.showQuestion(5,2)} </th>
          </tr>
          <tr>
            <th>{this.showQuestion(0,3)} </th>
            <th>{this.showQuestion(1,3)} </th>
            <th>{this.showQuestion(2,3)} </th>
            <th>{this.showQuestion(3,3)} </th>
            <th>{this.showQuestion(4,3)} </th>
            <th>{this.showQuestion(5,3)} </th>
          </tr>
          <tr>
            <th>{this.showQuestion(0,4)} </th>
            <th>{this.showQuestion(1,4)} </th>
            <th>{this.showQuestion(2,4)} </th>
            <th>{this.showQuestion(3,4)} </th>
            <th>{this.showQuestion(4,4)} </th>
            <th>{this.showQuestion(5,4)} </th>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid;
