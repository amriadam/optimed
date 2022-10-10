import React from 'react'
import '../assets/css/SectionTitle.css'

const SectionTitle = ({ miniTitle, title }) => {
    return (
        <h1 className='section-title' data-aos="fade-right"><span>{miniTitle}</span>{title}</h1>
    )
}

export default SectionTitle