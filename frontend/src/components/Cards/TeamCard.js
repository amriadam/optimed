import React from 'react';
import '../../assets/css/TeamCard.css';

function TeamCard({ item }) {
    return (
        <div className="team-card-wrapper">
            <div className="team-card">
                <div className="team-card-image">
                    <img src={item.image} alt='team_member' />
                </div>
                <ul className="social-icons-cards">
                    <li>
                        <a
                            className='social-icon-link facebook'
                            href={item.facebook}
                            target='_blank'
                            aria-label='Facebook'
                            rel="noreferrer"
                        >
                            <i class="fab fa-facebook-square" />
                        </a>
                    </li>
                    <li>
                        <a
                            className='social-icon-link instagram'
                            href={item.instagram}
                            target='_blank'
                            aria-label='Youtube'
                            rel="noreferrer"
                        >
                            <i className='fab fa-instagram' />
                        </a>
                    </li>
                    <li>
                        <a
                            className='social-icon-link linkedin'
                            href={item.linkedin}
                            target='_blank'
                            aria-label='LinkedIn'
                            rel="noreferrer"
                        >
                            <i className='fab fa-linkedin' />
                        </a>
                    </li>
                </ul>
                <div className="member-details">
                    <h2>
                        {item.firstname} {item.lastname} <span className="job-title">{item.spec}</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default TeamCard;