import React from "react";

function SectionOne({ profile }) {
  return (
    <>
      <div className="section-1">
        <img src={profile} alt="" />
        <div className="desc">
          <h1>Hello Howdy!</h1>
          <p>Do what you want Not what you can!</p>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
