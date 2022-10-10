import React from "react";
import { useEffect, useState } from "react";
import { ProjectsData } from "../data/ProjectsData";
import ProjectCard from "./Cards/ProjectCard";
import "../assets/css/ProjectsSection.css";
import SectionTitle from "./SectionTitle";
import CasualButton from "./CasualButton";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import axios from "axios";
import imageOne from "../assets/images/lunette.jpg";
import imageTwo from "../assets/images/lunette2.jpg";
import imageThree from "../assets/images/lunette3.jpg";
import imageFour from "../assets/images/lunette4.jpg";

const Nouveautes = () => {
  const array = [imageOne, imageTwo, imageThree, imageFour];
  const [lunette, setLunette] = useState([]);

  const getLunettes = async () => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGMxYzk0ZmE3NzVlMTY0YThhMWNmYiIsImlhdCI6MTY1ODY3ODk1NiwiZXhwIjoxNjYxMjcwOTU2fQ.DNDXJ6zvr59pYAD7_1GHHmHbFKl8FAIjB6wbp-hkCns`,
      },
    };

    const response = await axios.get("/api/lunettes/", config);
    console.log(response);
    setLunette(response.data);
  };
  useEffect(() => {
    getLunettes();
    console.log(lunette);
  }, []);
  return (
    <section className="projects-section">
      <SectionTitle /*miniTitle="Nos " */ title="Nouveautés" />
      <br />
      <p style={{ "margin-left": "40px", "font-size": "large" }}>
        Toutes les dernieres tendences
      </p>
      <div className="projects-container">
        {lunette.slice(0, 4).map((item, index) => (
          <ProjectCard
            // key={index}
            name={item.marque}
            // category={item.category}
            // description={item.description}
            image={array[index]}
          />
        ))}
      </div>
      <div data-aos="slide-left" className="projects-btn">
        <CasualButton
          text="Tous nos produits"
          link="/projects"
          icon={<MdOutlineArrowForwardIos className="icon-btn" />}
        />
      </div>
    </section>
  );
};

export default Nouveautes;
