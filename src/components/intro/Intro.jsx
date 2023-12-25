import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me4.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            Kirolos Mikhail is a driven Computer Engineering student at The
            American University in Cairo, set to graduate in December 2023 with
            a GPA of 3.6/4.0. With a robust technical skill set, he gained
            practical experience as a DevOps Developer and Full Stack Developer
            in various internships. Kirolos excels in programming languages, web
            technologies, machine learning, and DevOps tools. His project
            portfolio includes a Personalized Food Ordering Chatbot and a UDP
            Client-Server with load balancing. Beyond academics, he showcased
            leadership as the Co-Chair of the SU Technology committee and the
            General Manager of Human Resources in the First Year program. Fluent
            in Arabic and English, Kirolos is poised for impactful contributions
            in computer engineering.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
