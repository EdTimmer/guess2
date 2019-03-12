import React, { Component } from 'react';
import '../App.css';

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctBox0: "",
      correctBox1: "",
      correctBox2: "",
      correctBox3: "",
    }
  }

  press = (num) => {

    if (this.props.totalCount < 24) {
      const timer = m => new Promise(r => setTimeout(r, m));
      let randomNumber = Math.floor(Math.random() * 4);
      console.log('random number is: ', randomNumber);

      this.props.updateTotalCount();
    
      switch(randomNumber) {
        case 0:
          this.setState({correctBox0: "blinking"})
          break;
        case 1:
          this.setState({correctBox1: "blinking"})
          break;
        case 2:
          this.setState({correctBox2: "blinking"})
          break;
        case 3:
          this.setState({correctBox3: "blinking"})   
          break;
        default:
          break;
      }

      if (randomNumber === num) {
        (async () => {
          this.props.switchGuessIsCorrect(true);
          await timer(1000)
            .then(() => this.props.switchGuessIsCorrect(false))
            .then(() => this.props.updateCorrectCount())
            .then(() => this.props.messageFn());
        })();
      }
    }
  }

  clearState = () => {
    const timer = m => new Promise(r => setTimeout(r, m));
    (async () => {
      await timer(500)
        .then(() => this.setState({
          correctBox0: "",
          correctBox1: "",
          correctBox2: "",
          correctBox3: ""
        }))
    })();
  }

  render() {

    const { correctBox0, correctBox1, correctBox2, correctBox3 } = this.state;
    const { press, clearState } = this;

    return (
      <div className="grid-container body">

        <div className={`grid-item one ${correctBox0}`} onClick={() => {press(0); clearState()} } />
        <div className={`grid-item two ${correctBox1}`} onClick={() => {press(1); clearState()} } />
        <div className={`grid-item three ${correctBox2}`} onClick={() => {press(2); clearState()} } />
        <div className={`grid-item four ${correctBox3}`} onClick={() => {press(3); clearState()} } /> 

      </div>
    )
  }
}

export default Boxes;


