import React from "react";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";
import leftImg from "../../../Assets/Home/Whatwedo/who.webp";
import rightImg from "../../../Assets/Home/Whatwedo/shape.webp";
import certificate from "../../../Assets/Home/Whatwedo/certified.webp";
import vector from "../../../Assets/Home/Whatwedo/Vector.webp";
import whoWeAreData from './JSON/whoWeAreData.json';
import { Navigate, useNavigate } from "react-router-dom";

export const WhoWeAre = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ padding: 4, position: "relative" }}>
            <Grid container spacing={4}>
                {/* Left Section */}
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <img
                            src={leftImg}
                            alt="Who We Are"
                            style={{
                                maxWidth: "100%",
                                width: { xs: '80%', sm: '80%', md: '100%' },
                                height: { xs: '100%', sm: '80%', md: '100%' },
                                objectFit: "contain",
                                marginLeft: { xs: '-25px', sm: '0px' }
                            }}
                        />
                    </Box>
                </Grid>

                {/* Right Section */}
                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            position: "relative",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            padding: { xs: 2, md: 4 },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
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
                                    color: "#002D62",
                                    fontSize: "18px",
                                    fontFamily: "Exo",
                                    fontWeight: 600,
                                }}
                            >
                                Who We Are
                            </Typography>
                        </Box>
                        {/* Heading */}
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                fontFamily: "Exo",
                                fontSize: "35px",
                                marginBottom: 3,
                            }}
                        >
                            {whoWeAreData.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="body1"
                            sx={{
                                marginBottom: 4,
                                fontFamily: "Roboto",
                                fontSize: "17px",
                                fontWeight: 400,
                                color: "#6A6A6A",
                                textAlign: 'justify'
                            }}
                        >
                            {whoWeAreData.description}
                        </Typography>

                        {/* Features */}
                        <Grid container spacing={2} sx={{ marginBottom: 4 }}>
                            <Grid item xs={12} sm={6}>
                                <Paper
                                    elevation={4}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: 2,
                                        gap: 2,
                                        // borderRadius: "4px",
                                    }}
                                >
                                    {/* Remove this insteed use something else */}
                                    <Box
                                        component="img"
                                        src={certificate}
                                        alt="Certificate Icon"
                                        sx={{ width: 35, height: 40 }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            fontFamily: "Exo",
                                            fontSize: "19px",
                                        }}
                                    >
                                        {whoWeAreData.certificate}
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Box
                                    elevation={4}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: 2,
                                        gap: 2,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={vector}
                                        alt="Vector Icon"
                                        sx={{ width: 35, height: 40 }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            fontFamily: "Exo",
                                            fontSize: "19px",
                                        }}
                                    >
                                        {whoWeAreData.Quality}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        {/* Call-to-Action Button */}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate('/about')}
                            sx={{
                                textTransform: "none",
                                padding: "0.8rem 2rem",
                                fontSize: "1rem",
                                borderRadius: "8px",
                                backgroundColor: "#002D62",
                                width: "252px",
                                height: "58px",
                                margin: {
                                    xs: "0 auto", // Center the button on small screens
                                    md: "0", // Default margin for larger screens
                                },
                                transition: 'all 0.2s ease-in-out', // Add a smooth transition
                                '&:hover': {
                                    backgroundColor: '#003B8D', // Change background color on hover
                                    transform: 'scale(1.02)',   // Slightly scale up on hover
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
                                },
                            }}
                        >
                            Discover More
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* Right Background Image */}
            <Box
                component="img"
                src={rightImg}
                alt="Shape"
                sx={{
                    position: "absolute",
                    bottom: "10%",
                    right: "0",
                    maxWidth: "300px",
                    opacity: 50,
                    display: {
                        xs: "none",
                        sm: "block",
                    },
                }}
            />
        </Box>
    );
};
