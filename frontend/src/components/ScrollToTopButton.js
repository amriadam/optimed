import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import '../assets/css/ScrollToTopButton.css';

const ScrollToTopButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className='scroll-top-btn' data-aos="fade-up" onClick={scrollToTop}>
            <IoIosArrowUp className='arrow-up-icon' onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }} />
        </div>
    );
}

export default ScrollToTopButton;
