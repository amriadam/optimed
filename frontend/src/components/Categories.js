import React from "react";
import SectionTitle from "./SectionTitle";
import "../assets/css/PartnershipsSection.css";
import CardSlider from "./Sliders/CardSlider";
import { PartnersData } from "../data/PartnersData";
import men from "../assets/images/menCategry.jpg";
import woman from "../assets/images/womanCategory.jpg";
import soleil from "../assets/images/soleilCategory.jpg";
import vue from "../assets/images/vueCategory.jpg";
const Categories = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <section className="partnerships-section">
      <br />
      <br />

      <SectionTitle /*miniTitle="Nos " */ title="Top Categories" />
      <br />

      <div className="part-section">
        <div style={{ display: "flex", "justify-content": "space-around" }}>
          <a
            style={{
              "vertical-align": "top",
              display: "inline-block",
              "text-align": "center",
            }}
          >
            <img
              style={{
                "border-radius": "50%",
                width: "130px ",
                height: "140px ",
                padding: "1em",
                border: "grey solid",
                "margin-top": "14px",
                padding: "1px",
                "vertical-align": "middle",
              }}
              src={men}
              alt="Avatar"
              settings={settings}
            />
            <p> Homme </p>
          </a>
          <a
            style={{
              "vertical-align": "top",
              display: "inline-block",
              "text-align": "center",
            }}
          >
            <img
              style={{
                "border-radius": "50%",
                width: "130px ",
                height: "140px ",
                padding: "1em",
                border: "grey solid",
                "margin-top": "14px",
                padding: "1px",
                "vertical-align": "middle",
              }}
              src={woman}
              alt="Avatar"
              settings={settings}
            />
            <p> Femme </p>
          </a>
          <a
            style={{
              "vertical-align": "top",
              display: "inline-block",
              "text-align": "center",
            }}
          >
            <img
              style={{
                "border-radius": "50%",
                width: "130px ",
                height: "140px ",
                padding: "1em",
                border: "grey solid",
                "margin-top": "14px",
                padding: "1px",
                "vertical-align": "middle",
              }}
              src={soleil}
              alt="Avatar"
              settings={settings}
            />
            <p> Lunette de soleil </p>
          </a>
          <a
            style={{
              "vertical-align": "top",
              display: "inline-block",
              "text-align": "center",
            }}
          >
            <img
              style={{
                "border-radius": "50%",
                width: "130px ",
                height: "140px ",
                padding: "1em",
                border: "grey solid",
                "margin-top": "14px",
                padding: "1px",
                "vertical-align": "middle",
              }}
              src={vue}
              alt="Avatar"
              settings={settings}
            />
            <p> Lunette de vue </p>
          </a>
        </div>
        {/* <CardSlider settings={settings} data={PartnersData} /> */}
      </div>
    </section>
  );
};

export default Categories;
