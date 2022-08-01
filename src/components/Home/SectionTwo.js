import React from "react";
import LazyLoad from "react-lazyload";
import Works from "../Works/Works";

function SectionTwo(props) {
  const workData = [
    {
      link: props.john,
      text: "HTML, CSS, JavaScript",
    },
    {
      link: props.fb,
      text: "React.Js Clone",
    },
    {
      link: props.glass,
      text: "Glassmorphism In CSS",
    },
    {
      link: props.twitter,
      text: "React.Js Clone",
    },
    {
      link: props.gym_web,
      text: "Tailwind CSS",
    },
    {
      link: props.john2,
      text: "HTML, CSS, JavaScript",
    },
    {
      link: props.js_clock,
      text: "JavaScript Project",
    },
    {
      link: props.npl_web,
      text: "HTML, CSS, JavaScript",
    },
    {
      link: props.rps_game,
      text: "JavaScript Project",
    },
  ];

  return (
    <>
      <div className="section-2">
        <h1 className="center">Some Works of {props.fname}</h1>
        <div className="img">
          {workData.map((item) => (
            <LazyLoad once className="container">
              <Works links={item.link} text={item.text} github={item.github} />
            </LazyLoad>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
