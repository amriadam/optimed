import React, {
    // useEffect,
    useRef, useState
} from 'react';
// import { Button } from './Button';
// import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import '../assets/css/HomeStart.css';
import Typical from "react-typical";


const HomeStart = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    const [isMuted, setIsMuted] = useState(true)

    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current === length - 1 ? 0 : current + 1));
    //     }

    //     timeout.current = setTimeout(nextSlide, 3000);

    //     return function () {
    //         if (timeout.current) {
    //             clearTimeout(timeout.current);
    //         }
    //     }
    // }, [current, length])

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1)

        console.log(current)
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1)

        console.log(current)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    const handleVideoMute = () => {
        setIsMuted(!isMuted)
    }


    var typicalSlides = slides.map(i => [i.title, 4000]).flat();
    console.log(typicalSlides);

    return (
        <section className='homestart-section'>
            <div className='homestart-wrapper'>
                {slides.map((slide, index) => {
                    return (
                        <div onClick={handleVideoMute} className='homestart-slide' key={index}>
                            {index === current && (
                                <div className='homestart-slider'>
                                    {/* <img className='homestart-image' src={slide.image} alt={slide.alt} data-aos="fade-right" /> */}
                                    <video className='homestart-video' src={slide.video} data-aos="fade-right" autoPlay loop muted={isMuted} />
                                    <div className='homestart-content'>
                                        <h3 data-aos="fade-right">Votre boîte de production audiovisuelle</h3>
                                        <h1 data-aos="flip-up">
                                            <Typical
                                                steps={typicalSlides}
                                                loop={Infinity}
                                                wrapper="h1"
                                            />
                                        </h1>
                                        {/* <Button
                                            data-aos="flip-up"
                                            to={slide.path}
                                            primary='true'
                                            style={{
                                                maxWidth: '160px',
                                            }}
                                        >
                                            {slide.label}
                                            <IoMdArrowRoundForward className='arrow' />
                                        </Button> */}
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    )
                })}
                <div className='slider-btns'>
                    <IoArrowBack className='arrow-btns' onClick={prevSlide} />
                    <IoArrowForward className='arrow-btns' onClick={nextSlide} />
                </div>
            </div>
        </section>
    )
}

export default HomeStart