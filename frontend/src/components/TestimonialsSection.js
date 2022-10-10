import React from 'react'
import '../assets/css/TestimonialsSection.css';
import SectionTitle from './SectionTitle';
import Testimonial from './Testimonial';

const TestimonialsSection = () => {

    return (
        <section className='testimonial-section'>
            <div className='title-container'>
                <SectionTitle miniTitle="Nos " title="Témoignages" />
            </div>
            <div className='testimonial-container'>
                <Testimonial />
            </div>
        </section>
    )
}

export default TestimonialsSection