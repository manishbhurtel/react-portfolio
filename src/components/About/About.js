import React from "react";
import "./about.css";
import Card from "./Card";
import DocumentMeta from "react-document-meta";

function About() {
  return (
    <>
      <DocumentMeta title="About Namrata Bhurtel" />
      <div className="header">
        <h1 className="center">About</h1>
        <h2 className="center hover-color">Get to know about me!</h2>
      </div>
      <div className="abt-content">
        <div className="abt-card">
          <Card
            cardHeading="Who is Namrata?"
            cardText="Passionate in the field of Information Technology, I am hardworking and dedicated student from Pokhara, Nepal. I have keen interests in modern technologies and I am fascinated by the world of Artificial Intelligence. And hoping for the best to pursue my career in Software Engineering(Artificial Intelligence)."
          />
          <Card
            cardHeading="Why am I applicable?"
            cardText="I have good academic grades and overall IELTS score of 7.5 along with the appropriate knowledge of Python nad several computer programming languages. Also I am very much determined to give my 100% best in this field."
          />
        </div>
      </div>
    </>
  );
}

export default About;
