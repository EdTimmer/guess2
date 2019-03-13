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
    box0: "",
    box1: "",
    box2: "",
    box3: "",
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
      box0: "",
      box1: "",
      box2: "",
      box3: ""
    })
  }

  press = (num) => {

    if (this.state.totalCount < 24) {

      let randomNumber = Math.floor(Math.random() * 4);

      this.updateTotalCount();
    
      switch(randomNumber) {
        case 0:
          this.setState({box0: "blink"})
          break;
        case 1:
          this.setState({box1: "blink"})
          break;
        case 2:
          this.setState({box2: "blink"})
          break;
        case 3:
          this.setState({box3: "blink"})   
          break;
        default:
          break;
      }

      if (randomNumber === num) {
        const timer = m => new Promise(r => setTimeout(r, m));
        (async () => {
          this.switchGuessIsCorrect(true);
          await timer(1000)
            .then(() => this.updateCorrectCount())
            .then(() => this.messageFn())
            .then(() => this.switchGuessIsCorrect(false));

        })();
      }
    }
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
    });
  }

  clearBoxes = () => {
    const timer = m => new Promise(r => setTimeout(r, m));
    (async () => {
      await timer(500)
        .then(() => this.setState({
          box0: "",
          box1: "",
          box2: "",
          box3: ""
        }))
    })();
  }

  render() {
    const { message, correctCount, guessIsCorrect, totalCount, box0, box1, box2, box3 } = this.state;
    const { clearState, press, clearBoxes } = this;
    return (
      <div className="App">
        <div className="header">
          <div className="header-line">
            <span>Tap the correct square to see a picture</span>
          </div>
          <div className="header-line">
            <span>{message}</span> 
          </div>
          <div className="header-line">
            <ProgressBar correctCount={correctCount} />
          </div>
          <div className="header-line">
            <span>Correct: {correctCount}</span>
          </div>
        </div>
        <div className="body">
          <div className="selection">
            {
              guessIsCorrect ? <img src={pyramids} style={{ height: '400px', width: '400px' }} alt="reward" /> : <Boxes press={press} clearBoxes={clearBoxes} box0={box0} box1={box1} box2={box2} box3={box3} />
            }
          </div>          
        <div className="result">{totalCount} trials</div>
          <button className="reset" onClick={clearState}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
