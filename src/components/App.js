import React, { Component } from 'react';
import '../App.css';
import Boxes from './Boxes';
import ProgressBar from './ProgressBar';
import pyramids from '../images/pyramids.jpg';

class App extends Component {
  state = {
    totalCount: 0,
    correctCount: 0,
    guessIsCorrect: false,
    message: "",
  }

  messageFn = () => {
    if (this.state.correctCount > 1 && this.state.correctCount <= 3) {
      this.setState({message: "good"});
    }
    if (this.state.correctCount > 3 && this.state.correctCount <= 5) {
      this.setState({message: "better"});
    }
    if (this.state.correctCount > 5 && this.state.correctCount <= 7) {
      this.setState({message: "great"});
    }
    if (this.state.correctCount > 7 && this.state.correctCount <= 9) {
      this.setState({message: "awesome!"});
    }
    if (this.state.correctCount > 9 && this.state.correctCount < 25) {
      this.setState({message: "call us"});
    }
  }

  clearState = () => {
    this.setState({
      totalCount: 0, 
      correctCount: 0,
      guessIsCorrect: false,
      message: "",
    })
  }

  updateTotalCount = () => {
    this.setState({
      totalCount: this.state.totalCount + 1
    })
  }

  updateCorrectCount = () => {
    this.setState({
      correctCount: this.state.correctCount + 1 
    })
  }

  switchGuessIsCorrect = (bool) => {
    this.setState({
      guessIsCorrect: bool
    })
  }

  render() {
    const { message, correctCount, guessIsCorrect, totalCount } = this.state;
    const { clearState, updateCorrectCount, updateTotalCount, switchGuessIsCorrect, messageFn } = this;
    return (
      <div className="App">
        <div className="header">
          <p>Tap the correct square to see a picture</p>

          <span>{message}</span>
          <br/>

          <ProgressBar correctCount={correctCount} />

          <span>Correct: {correctCount}</span>

        </div>
        <div className="body">
          {
            guessIsCorrect ? <img src={pyramids} style={{ height: '500px', width: '500px' }} alt="reward" /> : <Boxes totalCount={totalCount} updateTotalCount={updateTotalCount} updateCorrectCount={updateCorrectCount} switchGuessIsCorrect={switchGuessIsCorrect} messageFn={messageFn} />
          }
        <div className="result">{totalCount} trials</div>
          <button className="reset" onClick={clearState}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
