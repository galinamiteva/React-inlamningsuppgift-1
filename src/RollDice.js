import React, { Component } from "react";

import Die from "./Die";
import Game  from "./Game";
import  Ranking  from "./Ranking";
import ClearData from "./ClearData";
import "./RollDice.css";


class RollDice extends Component {
  equal = [];
  losses = [];
  wins = [];  
  
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", die3: "one", die4: "one", die5: "one", die6: "one", yourSumPoints:"", CompSumPoints:null, rolling: false };
    
    this.roll = this.roll.bind(this);
    this.clearState=this.clearState.bind(this)
  }

  roll() {
    
    const num1=Math.floor(Math.random() * this.props.sides.length);
    const newDie1 = this.props.sides[num1];

    const num2=Math.floor(Math.random() * this.props.sides.length);
    const newDie2 = this.props.sides[num2];

    const num3=Math.floor(Math.random() * this.props.sides.length);
    const newDie3 = this.props.sides[num3];

    const num4=Math.floor(Math.random() * this.props.sides.length);
    const newDie4 = this.props.sides[num4];

    const num5=Math.floor(Math.random() * this.props.sides.length);
    const newDie5 = this.props.sides[num5];

    const num6=Math.floor(Math.random() * this.props.sides.length);
    const newDie6 = this.props.sides[num6];
    
    
    //Sum av poanger from dice for you and PC
    const sumPoints1=num1 + num2 + num3+3;
    const sumPoints2=num4 + num5 + num6+3;

    //set state with new rolls
    this.setState({ die1: newDie1, die2: newDie2, die3: newDie3, die4: newDie4, die5: newDie5, die6: newDie6,yourSumPoints:sumPoints1,CompSumPoints:sumPoints2, rolling: true});

    //wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false});
      
    }, 800);   
     
  }

  clearState = () => {
    this.losses = [];
    this.wins = [];
    this.equal = [];  
   
    this.setState({
      die1: "one",
      die2: "one",
      die3: "one",
      die4: "one",
      die5: "one",
      die6: "one",
      yourSumPoints: "",
      CompSumPoints: null
    });
  }  

  render() {
    return (
      <div className='RollDice'>

          <ClearData clearState={this.clearState}/>
          <div className='RollDice-container'>
          <h2 className="point-you">You:{this.state.yourSumPoints}</h2>
          <section className="App-yourDice">
            <Die face={this.state.die1} rolling={this.state.rolling} />
            <Die face={this.state.die2} rolling={this.state.rolling} />
            <Die face={this.state.die3} rolling={this.state.rolling} />
          </section>
          
          <button onClick={this.roll} disabled={this.state.rolling}>
              {this.state.rolling ? "Rolling..." : "Roll Dice!"}
          </button>

        <h2 className="point-pc">PC:{this.state.CompSumPoints}</h2>
          <section className="App-pcDice">
            <Die face={this.state.die4} rolling={this.state.rolling} />
            <Die face={this.state.die5} rolling={this.state.rolling} />
            <Die face={this.state.die6} rolling={this.state.rolling} />
          </section>
        </div>
        <Game results={this.state} />
        <Ranking
            yourSumPoints={this.state.yourSumPoints} 
            CompSumPoints={this.state.CompSumPoints}
            wins={this.wins}
            losses={this.losses}
            equal={this.equal} 
                              
        />
      </div>
    );
  }
}

export default RollDice;
