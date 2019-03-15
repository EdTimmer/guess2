import React, { Component } from 'react';
import '../App.css';
import Boxes from './Boxes';
import ProgressBar from './ProgressBar';
// import Modal2 from './Modal2';
import ImageModal from './ImageModal';

class App extends Component {
  state = {
    totalCount: 0,
    correctCount: 0,
    message: "Tap the correct square to see a picture",
    box0: "",
    box1: "",
    box2: "",
    box3: "",
    modalOpacity: 0,
    modalOpen: false,
    mainOpacity: 1,
    boxColor: ""
  }

  messageFn = () => {
    if (this.state.correctCount < 5) {
      this.setState({ message: "Tap the correct square to see a picture" });
    }
    if (this.state.correctCount >= 5 && this.state.correctCount < 8) {
      this.setState({ message: "Getting there" });
    }
    if (this.state.correctCount >= 8 && this.state.correctCount < 10) {
      this.setState({ message: "Ability Observed" });
    }
    if (this.state.correctCount >= 10 && this.state.correctCount < 12) {
      this.setState({ message: "Awesome!" });
    }
    if (this.state.correctCount >= 12 && this.state.correctCount < 25) {
      this.setState({ message: "Call us" });
    }
  }

  clearState = () => {
    this.setState({
      totalCount: 0,
      correctCount: 0,
      message: "Tap the correct square to see a picture",
      box0: "",
      box1: "",
      box2: "",
      box3: "",
      modalOpacity: 0,
      modalOpen: false,
      mainOpacity: 1,
      boxColor: ""
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
      
      if (this.state.totalCount === 23){
        this.setState({boxColor: "grey"})
      }

      if (randomNumber === num) {

        this.handleOpen();
        // this.setState({modalOpacity: 1})
        this.updateCorrectCount();
        this.messageFn();
        // this.setState({modalOpacity: 1})
        const timer = m => new Promise(r => setTimeout(r, m));
        (async () => {
            await timer(2000)
              .then(() => this.handleClose())              
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

  handleOpen = () => {
    this.setState({ modalOpen: true, modalOpacity: 1 });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { message, correctCount, totalCount, box0, box1, box2, box3, modalOpen, modalOpacity, mainOpacity, boxColor } = this.state;
    const { clearState, press, clearBoxes, pass, handleOpen, handleClose } = this;
    return (
      <div className="App" style={{opacity: mainOpacity}}>
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
            <Boxes press={press} clearBoxes={clearBoxes} box0={box0} box1={box1} box2={box2} box3={box3} boxColor={boxColor}  />
          </div>
          <div className="result"><span style={{paddingLeft: '1rem', paddingRight: '0.3rem'}}>{totalCount}</span><span style={{fontSize: '1.5rem', paddingLeft: '0.3rem', paddingRight: '1rem'}}> trials</span></div>
          <div className="buttons-container">
            <button className="regular-button" onClick={clearState}>Reset</button>
            <button className="regular-button" onClick={() => { pass(); clearBoxes() }} disabled={totalCount === 24}>Pass</button>
          </div>
          
          <ImageModal modalOpen={modalOpen} handleOpen={handleOpen} handleClose={handleClose} modalOpacity={modalOpacity} />
          
        </div>
      </div>
    );
  }
}

export default App;
