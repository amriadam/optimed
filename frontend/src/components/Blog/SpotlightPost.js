import React from 'react'
import '../../assets/css/SpotlightPost.css'
import postLogo from '../../assets/images/image1.jpg'

const SpotlightPost = () => {
    return (
        <div className="spotlight-container">
            <div className="sub-container">
                <div className="left-section">
                    <div className="section-outer">
                        <div className="tns-ovh">
                            <div className="section-inner">
                                <div className="slider-photo-une" style={{
                                    transitionDuration: '0s',
                                    transform: 'translate3d(0%, 0px, 0px)',
                                }}>
                                    <a href="https://www.ghostprod.net/" target="_blank" className="tns-item" rel="noreferrer">
                                        <picture>
                                            <source media="(min-width: 768px)" srcset={postLogo} />
                                            <source media="(min-width: 0px)" srcset={postLogo} />
                                            <img className="rocket-lazyload lazyloaded" alt="Les origines de ghostprod-Récit, origine, création, fondation, idée, fondateur" src={postLogo} />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="section-outer">
                        <div className="tns-ovh tns-ah" style={{ height: '217px' }}>
                            <div className="section-inner">
                                <div className="slider-texte-une" style={{ transitionDuration: '0s', transform: 'translate3d(0%, 0px, 0px)' }}>
                                    <div className="text tns-item tns-slide-active">
                                        <span className="alaune">À la une</span>
                                        <a href="https://www.ghostprod.net/">
                                            <h2>Les origines de GHOSTPROD</h2>
                                            <span className="categorie">Comment ça marche?</span>
                                            <div className="resume">
                                                <p>Car toutes les belles aventures ont le droit d’être racontées, voici le Storytelling de GHOSTPROD...</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpotlightPost