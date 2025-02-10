import React, { lazy, Suspense } from 'react';
import { HomeImg } from './Home Sections/HomeImg'
import { WhoWeAre } from './Home Sections/WhoWeAre'
import WhatWeDo from './Home Sections/WhatWoDo'
import { HomeProjects } from './Home Sections/HomeProjects'
import ClientLogos from './Home Sections/ClientLogos'
import { WorkingProgress } from './Home Sections/WorkingProgress'
import { Testimonals } from './Home Sections/Testimonials'
import { Contactus } from './Home Sections/ContactUs'
import SEO from '../../components/SEO/Seo';

const Home = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Jayojay Associates",
        "url": "https://jayojay-anants-projects.vercel.app/",
        "description": "We provide construction and consultation services.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "202 ShreeJi Business Park",
            "addressLocality": "Indore",
            "addressRegion": "Madhya Pradesh",
            "postalCode": "452009",
            "addressCountry": "IN"
        },
        "telephone": "+91 9669046539"
    };
    return (
        <Suspense fallback={<div className="loading-container">Loading Home Page...</div>}>
            <div>
                <SEO
                    title="Home - Jayojay Associates"
                    description="We specialise in   construction, project management and consultancy services"
                    keywords="construction company near me, consultation, building, architecture, interior, Turn key Construction,Real Estate"
                    structuredData={structuredData}
                />
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
