import React, { lazy, Suspense, useEffect } from 'react';
import { HomeImg } from './Home Sections/HomeImg'
import { WhoWeAre } from './Home Sections/WhoWeAre'
import WhatWeDo from './Home Sections/WhatWoDo'
import { HomeProjects } from './Home Sections/HomeProjects'
import ClientLogos from './Home Sections/ClientLogos'
import { WorkingProgress } from './Home Sections/WorkingProgress'
import { Testimonals } from './Home Sections/Testimonials'
import { Contactus } from './Home Sections/ContactUs'
import SEO from '../../components/SEO/Seo';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // scroll after small delay to ensure section is mounted
            const id = location.hash.replace('#', '');
            const scrollToSection = () => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            };

            // retry scrolling if the element is not there yet
            const interval = setInterval(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    clearInterval(interval);
                }
            }, 100);

            // stop retrying after 2 seconds
            setTimeout(() => {
                clearInterval(interval);
            }, 2000);
        }
    }, [location]);


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
        <>
            <SEO
                title="Home - Jayojay Associates"
                description="We specialise in construction, project management and consultancy services"
                keywords="construction company near me, consultation, building, architecture, interior, Turn key Construction,Real Estate"
                structuredData={structuredData}
            />
            <Suspense fallback={<div className="loading-container">Loading Home Page...</div>}>
                <div>

                    <HomeImg />
                    <WhoWeAre />
                    <div id='whatwedo'>
                        <WhatWeDo />
                    </div>
                    <HomeProjects />
                    {/* <ClientLogos /> */}
                    <WorkingProgress />
                    <div id="testimonials">
                        <Testimonals />
                    </div>
                    <Contactus />
                </div>
            </Suspense>
        </>
    )
}

export default Home
