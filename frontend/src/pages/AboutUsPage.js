import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg03.jpg'
import AboutUs from '../components/AboutUs'

const AboutUsPage = () => {

    return (
        <>
            <CasualPage pageTitle="A Propos" bg={bgImage} text="nos réalisations, notre persévérance, notre histoire..." title="à propos" pageContent={
                <>
                    <AboutUs />
                </>
            } />
        </>
    )
}

export default AboutUsPage