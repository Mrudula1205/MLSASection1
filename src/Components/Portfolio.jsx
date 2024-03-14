/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pexels-christina-morillo-1181271.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "GoBITS Navigation App",
    description:
      "Android mobile application that helps students navigate through the campus. It provides a map of the campus and helps students find the shortest path to their destination.",
    url: "https://github.com/Mrudula1205/GoBITS_PS1",
  },
  {
    title: "Microsoft Tech Club BPDC Website",
    description:
      "Contributed in developing the official website for Microsoft Technology Club BPDC. The website is developed using HTML, CSS and JavaScript.",
    url: "https://mtcbpdcdubai.github.io/mtc_bpdc/",
  },
  {
    title: "Snake Game",
    description:
      "A simple snake game developed using Java. The game is played on a grid and the snake grows as it eats the food. The game ends when the snake hits the wall or itself",
    url: "https://github.com/Mrudula1205/Snake-Game",
  },
  {
    title: "Blood Bank Management System",
    description:
      "Blood bank management system is a web application that is designed to store, process, retrieve and analyze information concerned with the administrative and inventory management within a blood bank.",
    url: "https://github.com/Mrudula1205/Blood-Bank-Management-Project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
