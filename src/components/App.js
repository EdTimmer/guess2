import React, { Component } from 'react';
import '../App.css';
import Boxes from './Boxes';
import ProgressBar from './ProgressBar';
import Image from './Image';
import ImageModalWrapped from './ImageModalWrapped';

class App extends Component {
  state = {
    totalCount: 0,
    correctCount: 0,
    guessIsCorrect: false,
    message: "Tap the correct square to see a picture",
    box0: "",
    box1: "",
    box2: "",
    box3: "",
    boxesOpacity: 1,
    imageOpacity: 0
  }

  messageFn = () => {
    if (this.state.correctCount < 6) {
      this.setState({ message: "Tap the correct square to see a picture" });
    }
    if (this.state.correctCount >= 6 && this.state.correctCount < 8) {
      this.setState({ message: "Getting there" });
    }
    if (this.state.correctCount >= 8 && this.state.correctCount < 10) {
      this.setState({ message: "Ability Observed" });
    }
    if (this.state.correctCount >= 10 && this.state.correctCount < 12) {
      this.setState({ message: "Awesome!" });
    }
    if (this.state.correctCount >= 10 && this.state.correctCount < 25) {
      this.setState({ message: "Call us" });
    }
  }

  clearState = () => {
    this.setState({
      totalCount: 0,
      correctCount: 0,
      guessIsCorrect: false,
      message: "Tap the correct square to see a picture",
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

      switch (randomNumber) {
        case 0:
          this.setState({ box0: "blink" })
          break;
        case 1:
          this.setState({ box1: "blink" })
          break;
        case 2:
          this.setState({ box2: "blink" })
          break;
        case 3:
          this.setState({ box3: "blink" })
          break;
        default:
          break;
      }

      if (randomNumber === num) {
        const timer = m => new Promise(r => setTimeout(r, m));
        (async () => {
          this.setState({boxesOpacity: 0})
          await timer(2000)
            .then(() => this.switchGuessIsCorrect(true))
            .then(() => this.setState({imageOpacity: 1}))
          // this.switchGuessIsCorrect(true);
          
          await timer(2000)
            .then(() => this.updateCorrectCount())
            .then(() => this.messageFn())
            .then(() => this.setState({imageOpacity: 0}))

          await timer(2000)
            .then(() => this.switchGuessIsCorrect(false))
            .then(() => this.setState({boxesOpacity: 1}))
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

  pass = () => {
    let randomNumber = Math.floor(Math.random() * 4);

    switch (randomNumber) {
      case 0:
        this.setState({ box0: "blink" })
        break;
      case 1:
        this.setState({ box1: "blink" })
        break;
      case 2:
        this.setState({ box2: "blink" })
        break;
      case 3:
        this.setState({ box3: "blink" })
        break;
      default:
        break;
    }
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
    const { message, correctCount, guessIsCorrect, totalCount, box0, box1, box2, box3, imageOpacity, boxesOpacity } = this.state;
    const { clearState, press, clearBoxes, pass } = this;
    return (
      <div className="App">
        <div className="header">
          <div className="header-title">
            <span>ESP TRAINER</span>
          </div>
          <div className="header-line">
            <span>{message}</span>
          </div>
          <div className="header-line">
            <ProgressBar correctCount={correctCount} />
          </div>
          <div className="header-line">
            {/*<span>correct: {correctCount}</span>*/}
          </div>
        </div>
        <div className="body">
          <div className="boxes">
            {
              guessIsCorrect ? <Image imageOpacity={imageOpacity} /> : <Boxes press={press} clearBoxes={clearBoxes} box0={box0} box1={box1} box2={box2} box3={box3} boxesOpacity={boxesOpacity} />
            }
          </div>
          <div className="result"><span style={{paddingLeft: '1rem', paddingRight: '0.3rem'}}>{totalCount}</span><span style={{fontSize: '1.5rem', paddingLeft: '0.3rem', paddingRight: '1rem'}}> trials</span></div>
          <div className="buttons-container">
            <div className="button" onClick={clearState}>Reset</div>
            <div className="button" onClick={() => { pass(); clearBoxes() }}>Pass</div>
          </div>
          <ImageModalWrapped />
        </div>
      </div>
    );
  }
}

export default App;
