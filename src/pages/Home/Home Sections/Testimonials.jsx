
import {
    Avatar,
    Box,
    Rating,
    Typography,
    Grow,
    IconButton,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import testimonials from "./JSON/Testimonials.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// 🔺 Custom Left Arrow
const PrevArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: "absolute",
            top: "50%",
            left: "-30px",
            transform: "translateY(-50%)",
            zIndex: 1,
            backgroundColor: "#fff",
            boxShadow: 1,
            "&:hover": {
                backgroundColor: "#002D62",
                color: "#fff",
            },
        }}
    >
        <ArrowBackIosNewIcon />
    </IconButton>
);

// 🔺 Custom Right Arrow
const NextArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: "absolute",
            top: "50%",
            right: "-30px",
            transform: "translateY(-50%)",
            zIndex: 1,
            backgroundColor: "#fff",
            boxShadow: 1,
            "&:hover": {
                backgroundColor: "#002D62",
                color: "#fff",
            },
        }}
    >
        <ArrowForwardIosIcon />
    </IconButton>
);

export const Testimonals = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box
            ref={sectionRef}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "2rem",
                backgroundColor: "#EBF5FF",
            }}
        >
            <Grow in={isVisible} timeout={1000}>
                <Box sx={{ width: "100%", maxWidth: "1300px", position: "relative" }}>
                    {/* Header */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "30px",
                                height: "2px",
                                backgroundColor: "black",
                                marginRight: "10px",
                            }}
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                fontFamily: "Exo",
                                color: "#002D62",
                            }}
                        >
                            Testimonials
                        </Typography>
                    </Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: "40px",
                            fontWeight: 700,
                            fontFamily: "Exo",
                            textAlign: "center",
                            marginBottom: "2rem",
                        }}
                    >
                        What our Clients Say About US <br />
                        and Our Work
                    </Typography>

                    {/* Slider */}
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <Box key={index} px={2}>
                                <Box
                                    sx={{
                                        backgroundColor: "#fff",
                                        padding: "1.5rem",
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                        // transition: "transform 0.3s",
                                        // "&:hover": {
                                        //     transform: "scale(1.05)",
                                        // },
                                        height: "100%",
                                        minHeight: "300px",
                                        marginRight: '2rem',
                                        marginBottom: '1rem'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "1rem",
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                backgroundColor: "#e0e0e0",
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                fontWeight="600"
                                                sx={{
                                                    fontFamily: "Exo",
                                                    fontWeight: 600,
                                                    fontSize: "18px",
                                                }}
                                            >
                                                {testimonial.title}
                                            </Typography>
                                            <Rating
                                                value={testimonial.rating}
                                                readOnly
                                                size="small"
                                            // sx={{
                                            //     "& .MuiRating-iconFilled": {
                                            //         color: "#9ECDFF",
                                            //     },
                                            // }}
                                            />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            marginTop: "1rem",
                                            fontSize: "16px",
                                            color: "#6A6A6A",
                                            lineHeight: 1.5,
                                            fontFamily: "Roboto",
                                            fontWeight: 400,
                                        }}
                                    >
                                        {testimonial.description}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            marginTop: "1rem",
                                            fontWeight: 700,
                                            fontFamily: "Exo",
                                            fontSize: "18px",
                                            color: "#15181B",
                                        }}
                                    >
                                        — {testimonial.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            fontFamily: "Roboto",
                                            fontSize: "16px",
                                            color: "#6A6A6A",
                                        }}
                                    >
                                        {testimonial.role}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Grow>
        </Box>
    );
};
