import React from 'react';

import './App.css';
import UserInput from './components/userInput.js'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: Math.round(Math.random() * 100) + 1,
      guesses: [],
      guess: '',
      statusMessage: '',
      submitButton: 'Submit',
      wonGame: false
    }
  }

  onSubmit(guess) {
    if (guess && ((guess < 1) || (guess > 100))) {
      this.setState({
        statusMessage: 'Please enter a number between 1 and 100'
      })
    }
    else if (guess && isNaN(guess)) {
      this.setState({
        statusMessage: 'Please enter a valid number'
      })
    }
    else {
      this.setState({
        guess: guess,
        statusMessage: ''
    })
    }
  }

  checkGuess() {
    if (+this.state.guess !== +this.state.correctAnswer) {
      const difference = Math.abs(this.state.guess - this.state.correctAnswer);
      if (difference >= 50) {
        this.setState({
          statusMessage: "Very cold.",
          guesses: [...this.state.guesses, this.state.guess]
        })
      }
      else if (difference >= 30) {
        this.setState({
          statusMessage: "Cold.",
          guesses: [...this.state.guesses, this.state.guess]
        })
      }
      else if (difference >= 20) {
        this.setState({
          statusMessage: "Warm.",
          guesses: [...this.state.guesses, this.state.guess]
        })
      }
      else if (difference >= 10) {
        this.setState({
          statusMessage: "Hot.",
          guesses: [...this.state.guesses, this.state.guess]
        })
      }
      else if (difference >= 5) {
        this.setState({
          statusMessage: "Very hot.",
          guesses: [...this.state.guesses, this.state.guess]
        })
      }
      else if ((difference <= 5) && (difference >=1)) {
        this.setState({
          statusMessage: "Extremely hot.",
          guesses: [...this.state.guesses, this.state.guess]
        })
      }
    }
    
    else {
      this.setState({
        statusMessage: "Correct!",
        wonGame: true
      })
      
    }
  }

  newGame() {
    this.setState({
      correctAnswer: Math.round(Math.random() * 100) + 1,
      guesses: [],
      guess: '',
      statusMessage: '',
      submitButton: 'Submit',
      wonGame: false
    })
  }

  render() {
    if (this.state.wonGame) {
      return(
        <div>
          <h4>You won. Play again?</h4>
          <button type="button" onClick={() => this.newGame()}>Submit</button>
        </div>
      )
    }
    else{
    return (
      <div className="correct-answer">
        <header className="App-header">
          <UserInput checkGuess={() => this.checkGuess()} submitButton={this.state.submitButton} input={guess => this.onSubmit(guess)}/>
          <h1 className="App-title">{this.state.correctAnswer}</h1>
          <p>{this.state.statusMessage}</p>
          <p>{this.state.guesses.map(guess => <h5>{guess} </h5>)}</p>
        </header>
        
      </div>
    );
  }
  }
}