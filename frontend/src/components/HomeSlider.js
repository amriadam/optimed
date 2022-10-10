/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react'
import Slider from 'react-slick';
import '../assets/css/HomeSlider.css';
import '../assets/css/HomeStart.css';
import { SliderData } from '../data/SliderData';
import { SliderHomeWrapper } from './Sliders/_SlickSliderStyle';

const HomeSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }

        ],
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        )
    };

    const [isMuted, setIsMuted] = useState(true)

    const handleVideoMute = () => {
        setIsMuted(!isMuted)
    }

    return (
        <SliderHomeWrapper>
            <Slider
                {...settings}
            >
                {SliderData.map((item, index) => (
                    <div className="home-video-container" key={index} onClick={handleVideoMute}>
                        {item.video ? (
                            <video className='home-video' src={item.video} data-aos="fade-right" autoPlay loop muted={isMuted} />
                        ) : (
                            <img className='home-video' src={item.image} alt='' />
                        )}
                        <div className='homeslider-content'>
                            <h3 data-aos="fade-down">Votre boîte de production audiovisuelle</h3>
                            <h2 data-aos='fade' className='divider'></h2>
                            <h1 data-aos="fade-up">{item.title}</h1>
                        </div>
                    </div>
                )
                )}
            </Slider>
        </SliderHomeWrapper>
    )
}

export default HomeSlider