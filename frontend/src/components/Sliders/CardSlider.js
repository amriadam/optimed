/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Slider from "react-slick";
import TeamCard from "../Cards/TeamCard";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { TeamData } from "../../data/TeamData";
import PartnerCard from "../Cards/PartnerCard";
import { SliderWrapper } from "./_SlickSliderStyle";

function CardSlider({ settings, data }) {
  return (
    <SliderWrapper>
      <Slider
        {...settings}
        prevArrow={<MdOutlineArrowBackIos />}
        nextArrow={<MdOutlineArrowForwardIos />}
      >
        {data.map((item, index) =>
          data === TeamData ? (
            <TeamCard key={index} item={item} />
          ) : (
            <PartnerCard key={index} item={item} />
          )
        )}
      </Slider>
    </SliderWrapper>
  );
}

export default CardSlider;
