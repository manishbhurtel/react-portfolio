import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <h2>{props.cardHeading}</h2>
        <p>{props.cardText}</p>
      </div>
    </>
  );
}

export default Card;
