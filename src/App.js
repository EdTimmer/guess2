import React, { Component } from 'react';
import './App.css';
import Boxes from './Boxes';
import pyramids from './images/pyramids.jpg';

class App extends Component {
  state = {
    totalCount: 0,
    correctCount: 0,
    correctGuess: false,
    message: "",
    correctNumber: "",
    correctBox0: "",
    correctBox1: "",
    correctBox2: "",
    correctBox3: ""
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
  

  press = (num) => {

    if (this.state.totalCount < 24) {
      const timer = m => new Promise(r => setTimeout(r, m));
      let correctNumber = Math.floor(Math.random() * 4);

      this.setState({
        correctNumber: correctNumber,
        totalCount: this.state.totalCount + 1,
      });
    
      switch(correctNumber) {
        case 0:
          this.setState({correctBox0: "blinking"})
          // this.setState({correctBox0: ""}) 
          // setCorrectBox0("blinking"); 
          break;
        case 1:
          // setCorrectBox1("blinking");
          // correctBox1 = "blinking";  
          this.setState({correctBox1: "blinking"})
          // this.setState({correctBox1: ""})
          break;
        case 2:
          // setCorrectBox2("blinking");
          // correctBox2 = "blinking";   
          this.setState({correctBox2: "blinking"})
          // this.setState({correctBox2: ""}) 
          break;
        case 3:
          // setCorrectBox3("blinking");
          // correctBox3 = "blinking";  
          this.setState({correctBox3: "blinking"})   
          // this.setState({correctBox3: ""}) 
          break;
        default:
          break;
      }



      if (correctNumber === num) {
        // setCorrectCount(correctCount + 1);        
        (async () => {
          this.setState({correctGuess: true});
          await timer(1000)
            .then(() => this.setState({correctGuess: false}))
            // .then(() => console.log("correctCount in async is: ", correctCount));
            // await messageFn();
            .then(() => this.setState({correctCount: this.state.correctCount + 1}))
            .then(() => this.messageFn());
        })();
      }


    }
  }

  clearBoxes = () => {
    const timer = m => new Promise(r => setTimeout(r, m));
    (async () => {
      await timer(1000)
        .then(() => this.setState({
          correctBox0: "",
          correctBox1: "",
          correctBox2: "",
          correctBox3: ""
        }))
    })();
  }

  clearState = () => {
    this.setState({
      totalCount: 0, 
      correctCount: 0,
      correctGuess: false,
      message: "",
      correctNumber: "",
      correctBox0: "",
      correctBox1: "",
      correctBox2: "",
      correctBox3: ""
    })
  }

  render() {
    const { message, correctCount, correctGuess, correctNumber, totalCount, correctBox0, correctBox1, correctBox2, correctBox3 } = this.state;
    const { press, clearState, clearBoxes } = this;
    return (
      <div className="App">
        <div className="header">
          <p>Tap the correct square to see a picture</p>

          <span>{message}</span>
          <br/>

          <span>Correct: {correctCount}</span>

        </div>
        <div className="body">
          {
            correctGuess ? <img src={pyramids} style={{ height: '500px', width: '500px' }} alt="reward" /> : <Boxes press={press} correctNumber={correctNumber} correctBox0={correctBox0} correctBox1={correctBox1} correctBox2={correctBox2} correctBox3={correctBox3} clearBoxes={clearBoxes} />
          }
        <div className="result">{totalCount} trials</div>
          <button className="reset" onClick={clearState}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
