import React from 'react'
import '../assets/css/AboutUs.css'
import { TextData } from '../data/TextData'

function AboutUs() {
    return (
        <div className='aboutus-container'>
            <div className='row aboutus__hero-row'>
                <div className='about-us-col'>
                    <div className='aboutus__hero-text-wrapper'>
                        <h1 className='about-us-heading'>
                            <span>à</span> propos de Nous
                        </h1>
                        {TextData.map((item, index) => (
                            <p key={index} className='aboutus__hero-paragraph'>
                                {item.text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
