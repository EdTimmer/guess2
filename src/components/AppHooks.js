import React, { useState } from 'react';
import '../App.css';
import Boxes from './Boxes';
import ProgressBar from './ProgressBar';
import ImageModal from './ImageModal';

const AppHooks = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [message, setMessage] = useState("Click on the circle that hides a picture");
  const [box0, setBox0] = useState("");
  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");
  const [box3, setBox3] = useState("");
  const [modalOpacity, setModalOpacity] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [boxColor, setBoxColor] = useState("");
  const [circleOpacity, setCircleOpacity] = useState(1);
  const [imageNumber, setImageNumber] = useState(0);

  const messageFn = () => {
    if (correctCount < 5) {
      setMessage("Click on a circle that hides a picture");
    }
    if (correctCount >= 5 && correctCount < 7) {
      setMessage("Potential observed");
    }
    if (correctCount >= 7 && correctCount < 9) {
      setMessage("Ability confirmed");
    }
    if (correctCount >= 9 && correctCount < 11) {
      setMessage("We need to talk");
    }
    if (correctCount >= 11 && correctCount < 23) {
      setMessage("Report for duty");
    }
  }

  const clearState = () => {
    setTotalCount(0);
    setCorrectCount(0);
    setMessage("Click on a circle that hides a picture");
    setBox0("");
    setBox1("");
    setBox2("");
    setBox3("");
    setModalOpacity(0);
    setModalOpen(false);
    setBoxColor("");
    setCircleOpacity(1);
    setImageNumber(0);
  }

  const press = (num) => {

    if (totalCount < 24) {

      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      let randomNumber = getRandomInt(0, 3);

      updateTotalCount();

      switch (randomNumber) {
        case 0:
          setBox0("blink");
          break;
        case 1:
          setBox1("blink");
          break;
        case 2:
          setBox2("blink");
          break;
        case 3:
          setBox3("blink");
          break;
        default:
          break;
      }
      
      if (totalCount === 23){
        setCircleOpacity(0.5);
      }

      if (randomNumber === num) {

        handleOpen();
        updateCorrectCount();
        messageFn();

        const timer = m => new Promise(r => setTimeout(r, m));

        let n = getRandomInt(0, 3);
        setImageNumber(n);

        (async () => {
          setModalOpacity(0);
          await timer(500)
          .then(() => setModalOpacity(1));

          await timer(1500)
            .then(() => setModalOpacity(0));

          await timer(500)
            .then(() => handleClose());
        })();
      }     
    }
  }

  const updateTotalCount = () => {
    setTotalCount(totalCount + 1);
  }

  const updateCorrectCount = () => {
    setCorrectCount(correctCount + 1);
  }

  const pass = () => {
    let randomNumber = Math.floor(Math.random() * 4);

    switch (randomNumber) {
      case 0:
        setBox0("blink");
        break;
      case 1:
        setBox1("blink");
        break;
      case 2:
        setBox2("blink");
        break;
      case 3:
        setBox3("blink");
        break;
      default:
        break;
    }
  }

  const clearBoxes = () => {
    const timer = m => new Promise(r => setTimeout(r, m));
    (async () => {
      await timer(500)
        .then(() => {
          setBox0("");
          setBox1("");
          setBox2("");
          setBox3("");
        })
      })();
  }

  const handleOpen = () => {
    setModalOpen(true);
    setModalOpacity(1);
  }

  const handleClose = () => {
    setModalOpen(false);
  }

  const sameColor = () => {
    setBoxColor("#0074D9");
  }

  return (
    <div className="App">

      <div className="header">
        <div className="header-title">
          <span>Psi Ops Academy</span>
        </div>

        <div>
          <ProgressBar correctCount={correctCount} totalCount={totalCount} />
        </div>
      </div>

      
      <div className="boxes">
        <Boxes press={press} clearBoxes={clearBoxes} box0={box0} box1={box1} box2={box2} box3={box3} boxColor={boxColor} circleOpacity={circleOpacity} />
      </div>

      <ImageModal modalOpen={modalOpen} handleOpen={handleOpen} handleClose={handleClose} modalOpacity={modalOpacity} imageNumber={imageNumber} />  

      
      <div className="message">
        <span>{message}</span>
      </div>

      <div className="buttons-container">

        <button className="regular-button" onClick={clearState}>Reset</button>
        <button className="regular-button" onClick={sameColor} disabled={totalCount === 24}>One Color</button>
        <button className="regular-button" onClick={() => { pass(); clearBoxes() }} disabled={totalCount === 24}>Pass</button>
      </div>

      <div className="footer">
        <div style={{padding: "0.5rem"}}>
          <span>Inspired by Russell Targ's ESP Trainer iOS app.</span>
        </div>
        <div>
          <a href="http://espresearch.com" rel="noopener noreferrer" target="_blank">espresearch.com</a>
        </div>
      </div>

    </div>      
  );

}

export default AppHooks;
