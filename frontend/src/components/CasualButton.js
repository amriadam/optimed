import React from 'react'
import { PrimaryButton } from './Button'
import '../assets/css/CasualButton.css'

const CasualButton = ({ link, text, icon }) => {
    return (
        <div className="btn-container">
            <div className="nav-btn">
                <PrimaryButton
                    style={{
                        height: '100%',
                        textTransform: 'uppercase',
                    }}
                    to={link}
                    primary='true'
                >
                    {text}
                </PrimaryButton>
            </div>
            {icon}
        </div>
    )
}

export default CasualButton