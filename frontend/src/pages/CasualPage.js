import React from 'react';
import '../assets/css/CasualPage.css';
import { Helmet } from 'react-helmet';


const CasualPage = ({ bg, text, title, pageTitle, pageContent }) => {
    return (
        <>
            <Helmet>
                <title>{pageTitle} - GHOSTPROD</title>
            </Helmet>
            <div className="starting-container" style={{
                backgroundImage: `
    linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.8)
      ), url(${bg})`,
            }}>
                <h1 className="page-title">{title}</h1>
                <h3 className="mini-title">{text}</h3>
            </div>
            <div className="paper-container" style={{
                backgroundImage: `
    linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.8)
      ), url(${bg})`,
            }}>
                <div className="page-paper">
                    {pageContent}
                </div>
            </div>
        </>
    )
}

export default CasualPage