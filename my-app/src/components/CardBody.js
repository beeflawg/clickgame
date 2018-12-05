import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Current Score: {props.count}</p>
      <button className="btn btn-primary" onClick={props.handleIncrement}>
          <img src="../assets/images/beth.png" alt ="Beth"></img>
          </button>{" "}
          <button className="btn btn-primary" onClick={props.handleIncrement}>
            <img src="../assets/images/birdperson.png" alt = "Bird Person"></img>
          </button>{" "}
          <button className="btn btn-primary" onClick={props.handleIncrement}>
          <img src = "../assets/images/evilmorty.png" alt = "Evil Person"></img>
          </button>{" "}
          <button className="btn btn-primary" onClick={props.handleIncrement}>
          <img src = "../assets/images/gianthead.png" alt = "Giant Head"></img>
          </button>{" "}
          <button className="btn btn-primary" onClick={props.handleIncrement}>
          <img src = "../assets/images/goldenford.png" alt = " Golden Ford"></img>
          </button>{" "}
          <button className="btn btn-primary" onClick={props.handleIncrement}>
            <img src= "../assets/images/jerry.png" alt = "Jerry"></img>
          </button>{" "}
          <button className="btn btn-primary" onClick={props.handleIncrement}>
          <img src = "../assets/images/jessica.png" alt = "Jessica"></img>
          </button>{" "}
          <button className="btn btn-primary" onClick={props.handleIncrement}>
            <img src = "../assets/images/meeseeks.png" alt = "Meeseeks"></img>
          </button>{" "}
          <button className="btn btn-primary" onClick={props.handleIncrement}>
          <img src = "../assets/images/morty.png" alt = "Morty"></img>
          </button>{" "}
          <button className="btn btn-primary" onClick={props.handleIncrement}>
            <img src = "../assets/images/mr.png" alt = "Mr"></img>
          </button>{" "}
          <button className="btn btn-primary" onClick={props.handleIncrement}>
          <img src = "../assets/images/rick.png" alt = "Rick"></img>
          </button>
    </div>
  );
}

export default CardBody;
