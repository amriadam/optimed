import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg02.jpg'
import PaginatedItems from '../components/Blog/PaginatedItems'
import { BlogPageData } from '../data/BlogData'
import SpotlightPost from '../components/Blog/SpotlightPost'

const BlogPage = () => {

    return (
        <>
            <CasualPage pageTitle="Blog" bg={bgImage} text="Où vous trouvez toutes nos nouveautés..." title="Blog" pageContent={
                <>
                    <SpotlightPost />
                    <PaginatedItems itemsPerPage={6} items={BlogPageData} />
                </>
            } />
        </>
    )
}

export default BlogPage