import React from "react";

 const Ranking = props => {
  if (props.yourSumPoints >props.CompSumPoints) {
    props.wins.unshift(1);
    console.log('Wins: ',props.wins.length)
    
    return (
      <h2>
        wins: {props.wins.length/2} losses: {props.losses.length/2} equal:{props.equal.length/2}
      </h2>
    );
  } else if (props.CompSumPoints > props.yourSumPoints) {
    props.losses.unshift(1);
    

    console.log('Losses: ',props.losses.length)
    return (
      <h2>
        wins: {props.wins.length/2} losses: {props.losses.length/2} equal:{props.equal.length/2};
       </h2>
    );
  } else if (props.CompSumPoints === props.yourSumPoints) {
    props.equal.unshift(1);    
    console.log('Egual: ',props.equal.length);
    
    return (
      <h2>
        wins: {props.wins.length/2} losses: {props.losses.length/2} equal:{props.equal.length/2}
      </h2>
    );
  } else if (props.CompSumPoints === null && props.yourSumPoints === "") {
    return (
      <h2>
        wins: {props.wins.length/2} losses: {props.losses.length/2} equal:{props.equal.length/2}
      </h2>
    );
  } else {
    return null;
  }
  
};
export default Ranking;