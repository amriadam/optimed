import React from 'react';
import '../../assets/css/PostCard.css';
import { Link } from 'react-router-dom';

function PostCard({ category, name, image }) {
    return (
        <Link to='/' className='post-card-container' data-aos="slide-up"
        // style={{
        //     background: `url(${image})`,
        //     backgroundPosition: 'fixed',
        //     backgroundSize: 'cover'
        // }}
        >
            <div className="post-card-content">
                <div className="post-card-category">
                    <h3>{category}</h3>
                </div>
                <div className="post-card-name">
                    <h2>{name}</h2>
                </div>
            </div>
            <div className="post-image-container">
                <img src={image} alt='' />
            </div>
        </Link>
    )
}

export default PostCard;