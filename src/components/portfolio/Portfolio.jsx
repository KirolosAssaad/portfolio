import React from "react";


import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 4,
      title: "Client Server Communication",
      description:
        "The Rust-based distributed system simulates two clients and three servers, where clients send requests through a load-balancing agent via UDP protocol, and servers process the requests, returning responses to the clients.",
      technologies: "Rust | UDP | TCP",
      github: "https://github.com/KirolosAssaad/DistributedProject",
    },
    {
      id: 5,
      title: "Premier League DB",
      description:
        "Fully responsive cross-platform mobile application that provides a number of important statistics about the English Premier League collectedthrough web scraping.",
      technologies: "Python | Selenium | React Native | MySQL",
      github: "https://github.com/KirolosAssaad/premierLeagueDB",
    },
    {
      id: 6,
      title: "Lost & Found",
      description:
        '"2yn 2ashya2y" is an app created by and for AUCians, streamlining the search for lost items on campus by consolidating them in one place with concealed information, allowing users to retain or deposit items at designated stations, and tracking claimed items by rightful owners.',
      technologies: "Java | MySQL | NodeJS | ExpressJS",
      github: "https://github.com/KirolosAssaad/Lost-Found",
    },
    {
      id: 7,
      title: "Meuseum Antitheft System",
      description:
        'enhance museum security by using a camera to capture images of potential art thieves when floor pressure changes are detected. An alarm is triggered in such instances, and administrators can monitor real-time images through a web application. To deactivate the alarm, administrators must enter a correct password using a number pad.',
      technologies: "ESP-IDF | C | Hardware components | ExpressJS",
      github: "https://github.com/mariamelsaqa/MuseumAntiTheftSystem",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
