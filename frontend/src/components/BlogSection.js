import React from 'react'
import { BlogData } from '../data/BlogData'
import PostCard from './Cards/PostCard'
import '../assets/css/BlogSection.css'
import SectionTitle from './SectionTitle'
import CasualButton from './CasualButton'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const BlogSection = () => {
    return (
        <section className='blog-section'>
            <SectionTitle miniTitle="Nos " title="Actualités" />
            <div className='blog-container'>
                {BlogData.map((item, index) => (
                    <PostCard
                        key={index}
                        name={item.text}
                        category={item.category}
                        image={item.image}
                    />
                ))}
            </div>
            <div data-aos="slide-left" className='blog-btn'>
                <CasualButton
                    text="Notre Blog"
                    link="/blog"
                    icon={
                        <MdOutlineArrowForwardIos className="icon-btn" />
                    }
                />
            </div>
        </section>
    )
}

export default BlogSection