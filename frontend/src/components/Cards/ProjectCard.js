import React from "react";
import "../../assets/css/ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard({ category, name, image, description }) {
  return (
    <>
      <Link
        to="/"
        className="project-card-container"
        data-aos="slide-up"
        // style={{
        //     background: `url(${image})`,
        //     backgroundPosition: 'fixed',
        //     backgroundSize: 'cover'
        // }}
      >
        {/* <div className="project-card-content">
                <div className="project-card-category">
                    <h3>{category}</h3>
                </div>
                <div className="project-card-name">
                    <h2>{name}</h2>
                </div>
                <div className="project-card-description">
                    <p>{description}</p>
                </div>
            </div> */}
        <div className="project-image-container">
          <img src={image} alt="" />
          <div className="project-card-description">
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProjectCard;
