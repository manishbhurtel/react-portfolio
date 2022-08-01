import React from "react";

function Works(props) {
  return (
    <>
      <img src={props.links} alt="" className="image" />
      <div className="overlay">
        <div className="text">
          {props.text} <br />
          <center>
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "underline",
                color: "white",
                fontWeight: "900",
              }}
            >

            </a>
          </center>
        </div>
      </div>
    </>
  );
}

export default Works;
