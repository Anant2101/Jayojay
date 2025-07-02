import React from 'react';
import { Box, Breadcrumbs, Card, CardContent, CardMedia, Grid, Grid2, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import servicesBG from '../../Assets/Services/servicesBG.webp';
import experienceIcon from '../../Assets/Services/Experienced team_.webp';
import onTimeIcon from '../../Assets/Services/On-Time completion_.webp';
import solutionIcon from '../../Assets/Services/Complete solutions_.webp';
import customerIcon from '../../Assets/Services/Customer-centered service_.webp';
import affordableIcon from '../../Assets/Services/Experienced team_.webp';
import ServicesDescriptionImg from '../../Assets/Services/ServicesDescription.webp';
import feasibilityImg from '../../Assets/Services/Project Feasibility.webp';
import sitePlanningImg from '../../Assets/Services/Site planning.webp';
import mgmtImg from '../../Assets/Services/Construction management_.webp';
import materialImg from '../../Assets/Services/Material sourcing_.webp';
import logo from '../../Assets/Footer/logo.webp'
import { Slide } from "@mui/material";
import { useEffect, useRef, useState } from "react";


import firstImg from "../../Assets/Services/Frame 24.webp";
import secondImg from "../../Assets/Services/Frame 25.webp";
import thirdImg from "../../Assets/Services/Frame 26.webp";
import SEO from '../../components/SEO/Seo';

const servicesData = [
    {
        title: "Architectural Designing",
        description: "We offer precise planning and layout services, establishing a strong foundation that will set your project up for success from the start.",
        image: sitePlanningImg,
    },
    {
        title: "Construction Management",
        description: "With an experienced team at the helm, each stage of the construction is closely managed to maintain high standards and ensure smooth progress.",
        image: mgmtImg,
    },
    {
        title: "Material Sourcing",
        description: "We source durable, high-quality materials at competitive prices, balancing durability with cost efficiency.",
        image: materialImg,
    },
    {
        title: "Interior Desigining",
        description: "Our preconstruction analysis involves helping clients evaluate project viability, identify risks, and make confident decisions for better outcomes.",
        image: feasibilityImg,
    },
    {
        title: "Real Estate",
        description: "Partner with us for your real estate development needs.  Our expertise in construction ensures your vision becomes a reality, on time and within budget.",
        image: sitePlanningImg,
    },
];

const features = [
    {
        icon: experienceIcon,
        title: "Experienced Professionals",
        description: "Skilled experts in construction, management, and design",
    },
    {
        icon: onTimeIcon,
        title: "All-in-One Solutions",
        description: "From planning to interior finish",
    },
    {
        icon: solutionIcon,
        title: "Affordable Quality",
        description: "Premium work that fits your budget",
    },
    {
        icon: customerIcon,
        title: "On-Time Delivery",
        description: "We respect your timeline",
    },
    {
        icon: affordableIcon,
        title: "Client-First Philosophy",
        description: "Your satisfaction is our mission",
    },
];

const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: { slidesToShow: 3, slidesToScroll: 1 },
        },
        {
            breakpoint: 900,
            settings: { slidesToShow: 2, slidesToScroll: 1 },
        },
        {
            breakpoint: 600,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
    ],
};



const Services = () => {
    // State and ref setup at the top inside Services component
    const [featuresVisible, setFeaturesVisible] = useState(false);
    const featuresRef = useRef(null);

    // IntersectionObserver effect inside Services component
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setFeaturesVisible(true);
                    observer.disconnect(); // only animate once
                }
            },
            { threshold: 0.2 }
        );

        if (featuresRef.current) {
            observer.observe(featuresRef.current);
        }

        return () => observer.disconnect();
    }, []);


    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Jayojay Associates",
        "url": "https://jayojay-anants-projects.vercel.app/",
        "logo": { logo },
        "description": "We are a leading construction and consultation firm with expertise in building design, project management, and architecture.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Jayojay Associates",
            "url": "https://jayojay-anants-projects.vercel.app/"
        },
        "serviceType": [
            "Architectural Design",
            "Project Management",
            "Structural Engineering",
            "Interior",
            "Architecture",
            "Material Sourcing",
            "Real Estate",
            "Renovation",
            "Construction Consultation"
        ],
        "areaServed": {
            "@type": "Place",
            "name": "Madhya Pradesh, India"
        }
    };


    return (
        <>
            <SEO
                title="Services - Jayojay Associates"
                description="Affordable and Comprehensive Construction and Pre-Construction Services in India   "
                keywords="Affordable and Comprehensive Construction and Pre-Construction Services in India"
                structuredData={structuredData}
            />
            {/* Hero Section */}
            <Box
                sx={{
                    position: "relative",
                    height: "300px",
                    backgroundImage: `url(${servicesBG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                    }}
                ></Box>
                <Box sx={{ position: "relative", zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ fontFamily: "Exo", fontWeight: 700, fontSize: "40px", marginBottom: "1rem" }}>Services</Typography>
                    <Breadcrumbs
                        separator="/"
                        aria-label="breadcrumb"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                            marginBottom: "8px",
                            backgroundColor: '#002D62',
                            height: '50px',
                            width: '190px',
                            borderRadius: '5px'
                        }}
                    >
                        <Link
                            href="/"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            <HomeIcon />
                            <span style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: "700", marginLeft: '5px' }}>Home</span>
                        </Link>
                        <Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "17px" }}>Services</Typography>
                    </Breadcrumbs>
                </Box>
            </Box>

            {/* Project Consultant Section */}
            <Box sx={{ padding: { xs: '3rem 3rem 0rem 3rem', sm: '2rem 2rem 1rem 2rem' } }}>
                <Typography
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "Exo",
                        fontWeight: 800,
                        fontSize: "50px",
                    }}
                >
                    Project Consultant
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", marginTop: { xs: '1rem', sm: "2rem" } }}>
                    <Typography sx={{ fontFamily: "Exo", fontWeight: "bold", fontSize: "26px", hyphens: 'auto' }}>
                        Affordable and Comprehensive Construction and Pre-Construction Services in India
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Roboto",
                            fontWeight: 400,
                            fontSize: "17px",
                            color: "#6A6A6A",
                            marginTop: "1rem",
                            textAlign: 'justify'
                        }}
                    >
                        At Jayojay, we offer full-service construction and pre-construction solutions, backed by data-driven planning and expert project guidance. Our team ensures your project flows seamlessly from concept to completion, always prioritizing efficiency and affordability.
                    </Typography>
                </Box>
            </Box>

            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{ height: "400px" }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        sx={{
                            height: "300px",
                            width: { xs: "80%", sm: "90%" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "0 auto",
                        }}
                    >
                        <img
                            src={firstImg}
                            alt="Left"
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "none",
                                borderRadius: "20px",
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "flex" } }}>
                    <Grid container spacing={2}>
                        {[secondImg, thirdImg].map((img, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Box sx={{ height: "300px" }}>
                                    <img
                                        src={img}
                                        alt={`Image ${index + 2}`}
                                        style={{
                                            height: "100%",
                                            width: "90%",
                                            objectFit: "none",
                                            borderRadius: "20px",
                                        }}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>


            {/* Why Choose Us Section */}
            <Box Box sx={{ padding: { xs: '0rem 3rem 0rem 3rem', sm: '1rem 3rem 0rem 3rem' } }
            }>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                        sx={{
                            fontFamily: "Exo",
                            fontWeight: 700,
                            fontSize: "40px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        Why Choose JAYOJAY
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: "1rem",
                            fontFamily: "Roboto",
                            fontWeight: 400,
                            fontSize: "17px",
                            color: "#6A6A6A",
                            textAlign: { xs: "justify", sm: "center" },
                        }}
                    >
                        Choosing Jayojay Associates means working with a team that truly cares about turning your vision into reality. We bring years of experience and expertise to every project, whether building your dream home, designing a commercial space, or creating a unique structure. Our skilled team pays attention to every detail, ensuring everything is done right the first time.
                        Our ability to provide affordable construction services without cutting corners makes us stand out. We also understand the value of your time, so we stick to agreed timelines and deliver your project when we say we will. You’ll always know what’s happening because we believe in clear communication every step of the way.
                    </Typography>
                </Box>
            </Box >

            {/* Features Section */}
            {/* < Box sx={{ flexGrow: 1, padding: { xs: '2rem', sm: '3rem' } }}>
                <Grid container spacing={3} justifyContent="flex-start">
                    {features.map(({ icon, title, description }, index) => (
                        <Grid key={index} item xs={12} sm={12} md={6} lg={4} sx={{ textAlign: "left", padding: "2px" }}>
                            <Box display="flex" alignItems="flex-start" padding={2} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                                <Box display="flex" justifyContent="center" alignItems="center" marginRight={2} borderRadius={4}>
                                    <img src={icon} alt={title} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontFamily: "Exo", fontWeight: 800, fontSize: "25px", marginTop: { xs: '1rem', sm: '0px' } }}>{title}</Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "Roboto",
                                            fontWeight: 400, fontSize: "15px",
                                            color: "#3D3D3D",
                                            wordSpacing: '0px'
                                        }}
                                    >
                                        {description}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box > */}

            <Box
                ref={featuresRef}
                sx={{ flexGrow: 1, padding: { xs: '2rem', sm: '3rem' } }}
            >
                <Slide direction="right" in={featuresVisible} timeout={700}>
                    <div>
                        <Grid container spacing={3} sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                            {features.map(({ icon, title, description }, index) => (
                                <Grid key={index} item xs={12} sm={12} md={6} lg={4} sx={{ textAlign: { xs: 'center', sm: 'left' }, padding: "2px" }}>
                                    <Box display="flex" alignItems="flex-start" padding={2} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                                        <Box display="flex" justifyContent="center" alignItems="center" marginRight={2} borderRadius={4}>
                                            <img src={icon} alt={title} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontFamily: "Exo", fontWeight: 800, fontSize: "25px", marginTop: { xs: '1rem', sm: '0px' } }}>
                                                {title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: "Roboto",
                                                    fontWeight: 400,
                                                    fontSize: "15px",
                                                    color: "#3D3D3D",
                                                    wordSpacing: '0px'
                                                }}
                                            >
                                                {description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Slide>
            </Box>


            {/* Optimized Code Section */}
            < Box sx={{ padding: { xs: '0rem 1rem 1rem 1rem', sm: '3rem' }, backgroundColor: "#e6f0ff" }}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: "2rem", borderRadius: "8px" }}>
                            <img src={ServicesDescriptionImg} alt="Left Content Image" style={{ width: "100%", height: "80%", borderRadius: "8px" }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} display="flex">
                        <Box sx={{ padding: { xs: "0rem 2rem 2rem 2rem", sm: "2rem", md: "1rem", lg: "3rem" }, flexDirection: "column" }}>
                            <Typography sx={{ fontFamily: "Exo", fontWeight: 700, fontSize: "40px" }} gutterBottom>
                                {/* Data-Driven Decisions for Better Project Outcomes */}
                                The Jayojay Difference
                            </Typography>
                            <Typography sx={{ fontFamily: "Roboto", fontWeight: 400, fontSize: "17px", color: "#6A6A6A" }}>
                                {/* At Jayojay, we prioritize making construction decisions that are both affordable and aligned with your goals. Our commitment includes research and careful planning. Using data-driven insights, we help clients choose paths that align with market trends while respecting budget limits. */}
                                At Jayojay Constructions, we don't just build structures—we build legacies. With years of experience and a passion for excellence, we deliver affordable construction services without compromising on quality or design. From residential marvels to commercial landmarks, every project is a reflection of trust, craftsmanship, and innovation.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box >

            {/* Popular Services Section */}
            < Box sx={{ backgroundColor: "#002b80", py: 4, padding: "3rem" }}>
                <Box sx={{ textAlign: "left", mb: 3 }}>
                    <Typography
                        variant="h4"
                        sx={{ fontFamily: "Exo", fontWeight: 800, fontSize: "40px", color: "white" }}
                    >
                        Popular Services
                    </Typography>
                </Box>
                <Slider {...sliderSettings}>
                    {servicesData.map((item, index) => (
                        <Box key={index} sx={{ padding: "0 10px" }}>
                            <Card sx={{ borderRadius: "10px", padding: "1rem", height: { xs: "430px", sm: "400px" }, margin: "0 10px" }}>
                                <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontFamily: "Exo", fontWeight: 600, fontSize: "24px", color: "#002D62" }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{ fontFamily: "Roboto", fontWeight: 400, fontSize: "16px", color: "#15181B" }}
                                    >
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Slider>
            </Box >
        </>

    );
};

export default Services;
