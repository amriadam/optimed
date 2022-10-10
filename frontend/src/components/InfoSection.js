import React, { useState } from 'react'
// import { Button } from './Button';
import "aos/dist/aos.css";
// import { animations } from '../data/aosData';
import '../assets/css/InfoSection.css';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';


const InfoSection = ({
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    image
}) => {

    // const random = Math.floor(Math.random() * animations.length);
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="WjnsXb3K9O8" onClose={() => setOpen(false)} />
            <section className='info-section' data-aos="fade">
                <div className='info-container'>
                    <div className='info-column-left' onClick={() => setOpen(true)}>
                        <img src={image} alt="home" data-aos="fade-right" />
                        <BsFillPlayCircleFill className='play-icon' />
                    </div>
                    <div className='info-column-right'>
                        <h3 data-aos="fade-right">Commencer votre journée</h3>
                        <h1 data-aos="fade-left">{heading}</h1>
                        <p data-aos="fade-left">{paragraphOne}</p>
                        {/* <p data-aos="fade-left">{paragraphTwo}</p> */}
                        {/* <Button to="/homes" primary='true' data-aos={animations[random]}>{buttonLabel}</Button> */}
                        <p className='show-more' data-aos="fade-right">{'Show more >>'}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InfoSection