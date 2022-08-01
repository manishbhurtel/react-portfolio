import React from "react";
import "../Home/home.css";
// import Typewriter from "typewriter-effect";
import profile from "../img/profile.png";
import glass from "../img/glass.jpg";
import gym_web from "../img/gym-web.png";
import john from "../img/john.jpg";
import john2 from "../img/john2.jpg";
import js_clock from "../img/js-clock.png";
import npl_web from "../img/npl-web.png";
import portfolio from "../img/portfolio.png";
import rps_game from "../img/rps-game.png";
import text from "../img/text.jpg";
import twitter from "../img/twitter.jpg";
import yt from "../img/yt.jpg";
import fb from "../img/fb.jpg";
import insta from "../img/insta.jpg";
import new_react from "../img/news_react.png";
import weather_react from "../img/weather_react.png";
import img_react from "../img/image_react.png";
import LazyLoad from "react-lazyload";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import DocumentMeta from "react-document-meta";

function Home(props) {
  return (
    <>
      <DocumentMeta title="Namrata Bhurtel - Portfolio" />
      <div className="header home-header">
        <h1 className="center">
          Portfolio of {props.fname} {props.lname}
        </h1>
        {/* <h2 className="center hover-color">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Web Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("UI /UX designer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Youtuber")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Blogger")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </h2> */}
        <a
          href="mailto:bhurtelnamrata@gmail.com"
          className="center btn-home"
        >
          <button className="home-btn center">Message {props.fname}</button>
        </a>
      </div>
      <LazyLoad once>
        <SectionOne profile={profile} />
      </LazyLoad>
      <SectionTwo
        fname={props.fname}
        john={john}
        fb={fb}
        glass={glass}
        portfolio={portfolio}
        twitter={twitter}
        gym_web={gym_web}
        john2={john2}
        js_clock={js_clock}
        npl_web={npl_web}
        rps_game={rps_game}
        yt={yt}
        insta={insta}
        text={text}
        new_react={new_react}
        weather_react={weather_react}
        img_react={img_react}
      />
    </>
  );
}

export default Home;
