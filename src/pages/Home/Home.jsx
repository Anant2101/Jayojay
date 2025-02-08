import React, { lazy, Suspense } from 'react';
import { HomeImg } from './Home Sections/HomeImg'
import { WhoWeAre } from './Home Sections/WhoWeAre'
import WhatWeDo from './Home Sections/WhatWoDo'
import { HomeProjects } from './Home Sections/HomeProjects'
import ClientLogos from './Home Sections/ClientLogos'
import { WorkingProgress } from './Home Sections/WorkingProgress'
import { Testimonals } from './Home Sections/Testimonials'
import { Contactus } from './Home Sections/ContactUs'

const Home = () => {
    return (
        <Suspense fallback={<div className="loading-container">Loading Home Page...</div>}>
            <div>
                <HomeImg />
                <WhoWeAre />
                <WhatWeDo />
                <HomeProjects />
                {/* <ClientLogos /> */}
                <WorkingProgress />
                <Testimonals />
                <Contactus />
            </div>
        </Suspense>
    )
}

export default Home
