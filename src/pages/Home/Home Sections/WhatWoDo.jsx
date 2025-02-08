import React, { useEffect, useRef, useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    Grid,
    Button,
    useMediaQuery,
    useTheme,
    Grow,
} from "@mui/material";
import firstIcon from "../../../Assets/Home/serviceCard/1.webp";
import secondIcon from "../../../Assets/Home/serviceCard/2.webp";
import thirdIcon from "../../../Assets/Home/serviceCard/3.webp";
import fourthIcon from "../../../Assets/Home/serviceCard/4.webp";
import fifthIcon from "../../../Assets/Home/serviceCard/5.webp";
import whatWeDo from './JSON/whatWeDo.json'

const services = [
    {
        title: "Project Consultant",
        description:
            "Expert consultancy to ensure the project is executed flawlessly",
        icon: secondIcon,
    },
    {
        title: "Turn key Construction",
        description:
            "From the initial concept to the final handover, we manage every detail, so you don’t have to worry about a thing.",
        icon: firstIcon,
    },
    {
        title: "Project Management",
        description:
            "We take project management seriously to ensure every detail of your project runs smoothly.",
        icon: thirdIcon,
    },
    {
        title: "Interior",
        description:
            "We design interiors that blend beauty, functionality, and durability to create spaces you’ll love.",
        icon: fourthIcon,
    },
    {
        title: "Architecture",
        description:
            "We focus on understanding your vision, ensuring every detail reflects your needs and aspirations.",
        icon: firstIcon,
    },
    {
        title: "Valuation",
        description:
            "At Jayojay, we value more than just structures—we value your trust and investment.",
        icon: thirdIcon,
    },
    {
        title: " Real Estate",
        description:
            "Whether you’re looking to invest in premium real estate projects, we deliver results that exceed expectations.",
        icon: fifthIcon,
    },
];

const servicesForMobile = [
    {
        title: "Project Consultant",
        description:
            "There are many variations of passages of Lorem Ipsum available.",
        icon: firstIcon,
    },
    {
        title: "Real Estate",
        description:
            "There are many variations of passages of Lorem Ipsum available.",
        icon: secondIcon,
    },
];

const WhatWeDo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 } // Trigger when 30% of the component is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);


    const displayedServices = isMobile ? servicesForMobile : services;

    return (
        <Box
            ref={sectionRef}
            sx={{
                backgroundColor: "#EBF5FF",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                // marginTop: "3rem",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        padding: "3rem 3rem 0rem 3rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "10px",
                    }}
                >
                    <Box
                        sx={{
                            width: "30px",
                            height: "2px",
                            backgroundColor: "#002D62",
                            marginRight: "10px",
                        }}
                    ></Box>

                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: "#002D62",
                            fontFamily: "Exo",
                            fontSize: "17px",
                        }}
                    >
                        What We Do
                    </Typography>

                    {/* Right Line */}
                    <Box
                        sx={{
                            width: "30px",
                            height: "2px",
                            backgroundColor: "#002D62",
                            marginLeft: "10px",
                        }}
                    ></Box>
                </Box>
                <Box
                    sx={{
                        textAlign: "baseline",
                        padding: "0rem 3rem 0rem 3rem",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            marginBottom: "20px",
                            fontWeight: 700,
                            fontFamily: "Exo",
                            fontSize: "40px",
                        }}
                    >
                        {whatWeDo.title}
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            marginBottom: "20px",
                            fontWeight: 400,
                            fontFamily: "Roboto",
                            fontSize: "18px",
                            color: "#6A6A6A",
                        }}
                    >
                        {whatWeDo.description}
                    </Typography>
                </Box>
            </Box>
            <Grow in={isVisible} timeout={1000}>

                <Grid
                    container
                    spacing={4}
                    justifyContent="left"
                    sx={{ padding: "1.5rem 3rem 3rem 3rem", display: "flex", flexWrap: "wrap" }}
                >
                    {displayedServices.map((service, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <Card
                                variant="outlined"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    background: "linear-gradient(180deg, #002D62 0%, #135CA9 100%)",
                                    opacity: "1",
                                    color: "#fff",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    borderRadius: "10px",
                                }}
                            >
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={service.icon}
                                        alt={`${service.title} icon`}
                                        sx={{
                                            width: "50px",
                                            height: "50px",
                                            marginRight: "16px",
                                            textAlign: "left",
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            fonFamily: "Exo",
                                            fontSize: "20px",
                                            marginTop: "2rem",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="white"
                                        sx={{
                                            fontWeight: 400,
                                            fonFamily: "Roboto",
                                            fontSize: "13px",
                                            marginBottom: "1rem",
                                            textAlign: 'justify'
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
            {/* <Button
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    color: "white",
                    height: "50px",
                    width: "242px",
                    backgroundColor: "#002D62",
                    marginBottom: "3rem",
                    fontFamily: "Roboto",
                    fontWeight: 600,
                    fontSize: "14px",
                    borderRadius: "8px",
                }}
            >
                Discover More
            </Button> */}
        </Box>
    );
};

export default WhatWeDo;