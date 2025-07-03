import React from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import ProjectsImage from "../../../Assets/Home/HomeProjects/PROJECTS.webp";
import oneProjectImg from "../../../Assets/Home/HomeProjects/item_01.webp";
import secProjectImg from "../../../Assets/Home/HomeProjects/item_02.webp";
import thirdProjectImg from "../../../Assets/Home/HomeProjects/item_03.webp";
import icon from "../../../Assets/Home/HomeProjects/icon.webp";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ image, overlayText, showOverlay = false }) => (

    <Box
        sx={{
            height: "400px",
            backgroundColor: "#f0f0f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            overflow: "hidden",
            position: "relative",
        }}
    >
        <img
            src={image}
            alt="Project"
            style={{
                height: "100%",
                objectFit: "cover",
                width: "100%",
            }}
        />
        {showOverlay && (
            <Box
                sx={{
                    position: "absolute",
                    zIndex: 2,
                    color: "#fff",
                    textAlign: "center",
                    fontFamily: "Exo",
                    fontSize: "34px",
                    fontWeight: "700",
                    height: "80%",
                    width: "80%",
                    backgroundColor: "#15181BCC",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    cursor: 'pointer'
                }}
                onClick={() => {
                    window.location.href = "/our-projects"
                }}
            >

                <img src={icon} alt="Overlay Icon" />
                <Typography
                    sx={{
                        marginTop: "1rem",
                        fontFamily: "Exo",
                        fontWeight: 700,
                        fontSize: "24px",
                        marginLeft: "2rem",
                        marginRight: "2rem",
                    }}
                >
                    {overlayText}
                </Typography>
            </Box>
        )}
    </Box>
);

export const HomeProjects = () => {
    const isAbove600px = useMediaQuery("(min-width:900px)");
    const navigate = useNavigate(); 

    const handleViewProjectsClick = () => {
        navigate('/our-projects'); 
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#15181B",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* Header Section */}
                <Box
                    sx={{
                        width: "80%",
                        marginTop: { xs: "1rem", sm: "4rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <img
                        src={ProjectsImage}
                        alt="Projects"
                        className="responsive-image"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%,",
                            objectFit: "contain",

                        }}
                    />

                    <Box
                        sx={{
                            position: "absolute",
                            top: "30px",
                            left: { xs: "0px", sm: "20px" },
                            color: "white",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box
                                sx={{
                                    width: "30px",
                                    height: "2px",
                                    backgroundColor: "white",
                                    marginRight: "10px",
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontSize: "18px", fontWeight: 400, fontFamily: "Exo" }}
                            >
                                Our Projects
                            </Typography>
                        </Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: "40px",
                                fontWeight: 700,
                                fontFamily: "Exo",
                                marginBottom: !isAbove600px ? "3rem" : "auto",
                            }}
                        >
                            Explore Recent Projects
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        sx={{
                            position: "absolute",
                            top: { sm: "15px", md: "30px" },
                            right: "20px",
                            backgroundColor: "#002D62",
                            width: "188px",
                            height: "56px",
                            fontFamily: "Roboto",
                            display: { xs: "none", sm: "none", md: "block" },
                            borderRadius: "5px",
                            transition: 'all 0.2s ease-in-out', 
                            '&:hover': {
                                backgroundColor: '#003B8D', 
                                transform: 'scale(1.02)',   
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', 
                            },
                        }}
                        onClick={handleViewProjectsClick}
                    >
                        View All Projects
                    </Button>
                </Box>

                {/* Projects Section */}
                <Grid
                    container
                    spacing={2}
                    sx={{
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        overflowY: "auto",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "2rem",
                    }}
                >
                    {isAbove600px ? (
                        [
                            { image: oneProjectImg },
                            {
                                image: secProjectImg,
                                overlayText: "Modern Pattern Style for House Roof",
                                showOverlay: true,
                            },
                            { image: thirdProjectImg },
                        ].map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProjectCard {...project} />
                            </Grid>
                        ))
                    ) : (
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            sx={{
                                marginBottom: "2rem",
                                marginTop: { xs: "9rem", sm: "4rem" },
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "400px",
                            }}
                        >
                            <ProjectCard
                                image={oneProjectImg}
                                overlayText="Modern Pattern Style for House Roof"
                                showOverlay={true}
                            />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Box>
    );
};
