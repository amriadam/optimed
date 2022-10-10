import React from "react";
import BlogSection from "../components/BlogSection";
import HomeSlider from "../components/HomeSlider";
// import HomeStart from '../components/HomeStart'
import InfoSection from "../components/InfoSection";
import Categories from "../components/Categories";
import Nouveautes from "../components/Nouveautes";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { InfoData } from "../data/InfoData";
import Map from "../components/MapPos";
// import { SliderData } from '../data/SliderData'

const HomePage = () => {
  return (
    <>
      {/* <HomeStart slides={SliderData} /> */}
      <HomeSlider />
      <TeamSection />
      <Categories />
      {/* <InfoSection {...InfoData} /> */}
      <Nouveautes />

      <TestimonialsSection />
      <Map />

      <BlogSection />
    </>
  );
};

export default HomePage;
