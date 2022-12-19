import React from 'react'
import Categories from './JS/Categories';

import Hero from './JS/Hero';
import NewsLetter from './JS/NewsLetter';
import Popular from './JS/Popular';

function Home() {
    return (
        <>    
            <Hero />
            <Popular />
            <Categories />
            <NewsLetter />
            </>
    )
}

export default Home