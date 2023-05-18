import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__typography">
          <span>about me</span>
          <span>about me</span>
          <span>about me</span>
        </div>
        <div className="about__text">
          <span>
            Hello! I am Hikmal Alfatih, I am passionate about
            <span className="about__outline">
              {" "}
              developing applications
            </span>{" "}
            both <span className="about__outline"> user interface</span> and
            database <span className="about__outline"> management</span> system.
          </span>
          <span className="about__button">
            <Link to="/me">
              Read More About Me <i class="uil uil-arrow-up-right"></i>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
