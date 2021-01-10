import React from "react";

 const Game = props => {
  const { yourSumPoints, CompSumPoints } = props.results;

  if (yourSumPoints > CompSumPoints) {
    return <h1 className="won">You Won!</h1>;
  } else if (CompSumPoints > yourSumPoints) {
    return <h1 className="lost">You Lost!</h1>;
  } else if (CompSumPoints === null && yourSumPoints === "") {
    return <h1>Start Game!</h1>;
  } else {
    return <h1 className="draw">Еqual</h1>;
  }
};

export default Game;