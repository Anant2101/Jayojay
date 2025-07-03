

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Grid, Card, CardMedia, Typography, Breadcrumbs } from "@mui/material";
import projects from "./projectsData.json";
import projectsHeroBg from '../../Assets/Projects/projectsHero.webp'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ProjectDetails = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const ids = queryParams.get("ids")?.split(",").map(Number) || [];

    const selectedProjects = projects.filter((project) => ids.includes(project.id));

    if (selectedProjects.length === 0) {
        return <Typography variant="h6">No projects found</Typography>;
    }

    return (
        <>
            {selectedProjects.map((project) => (
                <Box
                    sx={{
                        position: "relative",
                        height: "300px",
                        backgroundImage: `url(${projectsHeroBg})`,
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
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Exo",
                                fontWeight: 700,
                                fontSize: '40px',
                                marginBottom: "1rem",
                            }}
                        >
                            {project.title}
                        </Typography>
                        <Breadcrumbs
                            separator="/"
                            aria-label="breadcrumb"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                backgroundColor: '#002D62',
                                height: '50px',
                                width: 'auto',
                                padding: '0 16px',
                                borderRadius: '5px',
                            }}
                        >
                            <Link
                                to="/our-projects"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                <Box display={'flex'} alignItems={'center'}>
                                    <ArrowBackIcon style={{ marginRight: '5px', color: 'white' }} />
                                    <span
                                        style={{
                                            fontFamily: "Roboto",
                                            fontSize: "20px",
                                            fontWeight: "700",
                                            color: 'white',
                                        }}
                                    >
                                        Back
                                    </span>
                                </Box>
                            </Link>

                        </Breadcrumbs>
                    </Box>
                </Box>
            ))}
            <Box sx={{ padding: "2rem" }}>
                {selectedProjects.map((project) => (
                    <React.Fragment key={project.id}>
                        {/* Top Grid */}
                        <Grid container spacing={3}>
                            {/* Left: Image */}
                            <Grid item xs={12} md={6}>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    style={{ width: "100%", borderRadius: "8px" }}
                                />
                            </Grid>

                            {/* Right: Title and Description */}
                            <Grid item xs={12} md={6}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontFamily: "Roboto",
                                        fontWeight: "bold",
                                        marginBottom: "1rem",
                                        color: "#002D62",
                                    }}
                                >
                                    {project.name}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "Roboto",
                                        fontWeight: "500",
                                        marginBottom: "1rem",
                                        color: "#002D62",
                                    }}
                                >
                                    {project.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ fontFamily: "Roboto", color: "#555", lineHeight: "1.8" }}
                                >
                                    {project.description}
                                </Typography>
                            </Grid>
                        </Grid>

                        {/* Middle Content */}
                        <Box sx={{ marginTop: "2rem" }}>
                            <Typography
                                variant="body1"
                                sx={{ fontFamily: "Roboto", color: "#555", lineHeight: "1.8" }}
                            >
                                {project.content}
                            </Typography>
                        </Box>

                        {/* Additional Images */}
                        <Box sx={{ padding: "2rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid container spacing={3}>
                                {project.additionalImages?.map((img, index) => (
                                    <Grid
                                        item
                                        key={index}
                                        sx={{
                                            flex: "0 0 auto",
                                        }}
                                    >
                                        <Card
                                            sx={{
                                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                                borderRadius: "8px",
                                                height: "250px",
                                                width: "280px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={img}
                                                alt={`Additional image ${index + 1}`}
                                                sx={{
                                                    height: "100%",
                                                    width: "100%",
                                                }}
                                            />
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </React.Fragment>
                ))}
            </Box>
        </>
    );
};

export default ProjectDetails;
