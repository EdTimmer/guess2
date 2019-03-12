import React, { Component } from 'react';
import '../App.css';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctCount: this.props.correctCount,
      c1: this.correctCount >= 1 ? "white" : "transparent",
      c2: this.props.correctCount >= 2 ? "white" : "transparent",
      c3: this.props.correctCount >= 3 ? "white" : "transparent",
      c4: this.props.correctCount >= 4 ? "white" : "transparent",
      c5: this.props.correctCount >= 5 ? "white" : "transparent",
      c6: this.props.correctCount >= 6 ? "white" : "transparent",
      c7: this.props.correctCount >= 7 ? "white" : "transparent",
      c8: this.props.correctCount >= 8 ? "white" : "transparent",
      c9: this.props.correctCount >= 9 ? "white" : "transparent",
      c10: this.props.correctCount >= 10 ? "white" : "transparent",
      c11: this.props.correctCount >= 11 ? "white" : "transparent",
      c12: this.props.correctCount >= 12 ? "white" : "transparent",
      c13: this.props.correctCount >= 13 ? "white" : "transparent",
      c14: this.props.correctCount >= 14 ? "white" : "transparent",
      c15: this.props.correctCount >= 15 ? "white" : "transparent",
      c16: this.props.correctCount >= 16 ? "white" : "transparent",
      c17: this.props.correctCount >= 17 ? "white" : "transparent",
      c18: this.props.correctCount >= 18 ? "white" : "transparent",
      c19: this.props.correctCount >= 19 ? "white" : "transparent",
      c20: this.props.correctCount >= 20 ? "white" : "transparent",
      c21: this.props.correctCount >= 21 ? "white" : "transparent",
      c22: this.props.correctCount >= 22 ? "white" : "transparent",
      c23: this.props.correctCount >= 23 ? "white" : "transparent",
      c24: this.props.correctCount >= 24 ? "white" : "transparent",
    }
  }
  
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.correctCount !== prevState.correctCount) {
  //     return {
  //       correctCount: nextProps.correctCount
  //     }
  //   }
  //   else return null;
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.correctCount !== this.props.correctCount) {
      this.setState({ correctCount: this.props.correctCount});
    }
  }

  // changeColor = () => {
  
  //   let num = this.props.correctCount;
    
  //   switch(num) {
  //     case 0: 
  //       this.setState({
  //         c1: "transparent",
  //         c2: "transparent",
  //         c3: "transparent",
  //         c4: "transparent",
  //         c5: "transparent",
  //         c6: "transparent",
  //         c7: "transparent",
  //         c8: "transparent",
  //         c9: "transparent",
  //         c10: "transparent",
  //         c11: "transparent",
  //         c12: "transparent",
  //         c13: "transparent",
  //         c14: "transparent",
  //         c15: "transparent",
  //         c16: "transparent",
  //         c17: "transparent",
  //         c18: "transparent",
  //         c19: "transparent",
  //         c20: "transparent",
  //         c21: "transparent",
  //         c22: "transparent",
  //         c23: "transparent",
  //         c24: "transparent"
  //       })
  //       break;
  //     case 1:
  //       this.setState({c1: "white"})
  //       break;
  //     case 2:
  //       this.setState({c2: "white"})
  //       break;
  //     case 3:
  //       this.setState({c3: "white"})
  //       break;
  //     case 4:
  //       this.setState({c4: "white"})
  //       break;
  //     case 5:
  //       this.setState({c5: "white"})
  //       break;
  //     case 6:
  //       this.setState({c6: "white"})
  //       break;
  //     case 7:
  //       this.setState({c7: "white"})
  //       break;
  //     case 8:
  //       this.setState({c8: "white"})
  //       break;
  //     case 9:
  //       this.setState({c9: "white"})
  //       break;
  //     case 10:
  //       this.setState({c10: "white"})
  //       break;
  //     case 11:
  //       this.setState({c11: "white"})
  //       break;
  //     case 12:
  //       this.setState({c12: "white"})
  //       break;
  //     case 13:
  //       this.setState({c13: "white"})
  //       break;
  //     case 14:
  //       this.setState({c14: "white"})
  //       break;
  //     case 15:
  //       this.setState({c15: "white"})
  //       break;
  //     case 16:
  //       this.setState({c16: "white"})
  //       break;
  //     case 17:
  //       this.setState({c17: "white"})
  //       break;
  //     case 18:
  //       this.setState({c18: "white"})
  //       break;
  //     case 19:
  //       this.setState({c19: "white"})
  //       break;
  //     case 20:
  //       this.setState({c20: "white"})
  //       break;
  //     case 21:
  //       this.setState({c21: "white"})
  //       break;
  //     case 22:
  //       this.setState({c22: "white"})
  //       break;
  //     case 23:
  //       this.setState({c23: "white"})
  //       break;
  //     case 24:
  //       this.setState({c24: "white"})
  //       break;
  //     default:
  //       break;
  //   }    
  // }

  render() {

    const { c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24 } = this.state;

    console.log('props in progressbar: ', this.props.correctCount);
    console.log('props in progressbar: ', typeof(this.props.correctCount));

    let c20 = this.props.correctCount

    return (
      <div className="flex-container">

        <span className="circle" style={{backgroundColor: c1 }} /> 
        <span className="circle" style={{backgroundColor: c2 }} /> 
        <span className="circle" style={{backgroundColor: c3 }} /> 
        <span className="circle" style={{backgroundColor: c4 }} /> 
        <span className="circle" style={{backgroundColor: c5 }} /> 
        <span className="circle" style={{backgroundColor: c6 }} />
        <span className="circle" style={{backgroundColor: c7 }} /> 
        <span className="circle" style={{backgroundColor: c8 }} /> 
        <span className="circle" style={{backgroundColor: c9 }} /> 
        <span className="circle" style={{backgroundColor: c10 }} /> 
        <span className="circle" style={{backgroundColor: c11 }} /> 
        <span className="circle" style={{backgroundColor: c12 }} />
        <span className="circle" style={{backgroundColor: c13 }} /> 
        <span className="circle" style={{backgroundColor: c14 }} /> 
        <span className="circle" style={{backgroundColor: c15 }} /> 
        <span className="circle" style={{backgroundColor: c16 }} /> 
        <span className="circle" style={{backgroundColor: c17 }} /> 
        <span className="circle" style={{backgroundColor: c18 }} />
        <span className="circle" style={{backgroundColor: c19 }} /> 
        <span className="circle" style={{backgroundColor: c20 }} /> 
        <span className="circle" style={{backgroundColor: c21 }} /> 
        <span className="circle" style={{backgroundColor: c22 }} /> 
        <span className="circle" style={{backgroundColor: c23 }} /> 
        <span className="circle" style={{backgroundColor: c24 }} />

      </div>
    )
  }
}

export default ProgressBar;


