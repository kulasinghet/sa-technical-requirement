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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Spring Boot with Me (1)",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://medium.com/@kulasinghet/spring-boot-with-me-1-2022d6503c9f",
  },
  {
    title: "Mobile Development Hackathon",
    description:
      "Seizing Opportunities: My Journey of Personal Growth Through Mobile Development Hackathons",
    url: "https://medium.com/@kulasinghet/seizing-opportunities-my-journey-of-personal-growth-through-mobile-development-hackathons-fd0598b2c91f",
  },
  {
    title: "How to Connect to a Database in ASP.NET Core using Entity Framework Core",
    description:
      "n this article, we will go through the steps to connect to a SQL Server database in an ASP.NET Core application. ",
    url: "https://medium.com/@kulasinghet/how-to-connect-to-a-database-in-asp-net-core-using-entity-framework-core-a11b291d0e0d",
  },
  {
    title: "How Overcoming Procrastination Led Me to Achieve My Dream of Becoming a Microsoft Learn Student Ambassador",
    description:
      "As a student, I always dreamed of being part of the Microsoft Learn Student Ambassador Program, but I kept delaying the application process. I told myself I would apply next year, and then the year after that, and soon three years had passed, and I still hadn\’t taken any action.",
    url: "https://medium.com/@kulasinghet/how-overcoming-procrastination-led-me-to-achieve-my-dream-of-becoming-a-microsoft-learn-student-5ea9f42f12f7",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
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
