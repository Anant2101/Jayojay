import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import workingBgImg from "../../../Assets/Home/WrokingProgress/Frame 14.webp";
import bgRight from "../../../Assets/Home/WrokingProgress/shape_2.webp";
import steps from './JSON/workingProgress.json'

const StepItem = ({ step, isLast }) => (
    <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={2} textAlign="center">
            <Box
                sx={{
                    marginTop: "5px",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    color: "#002D62",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    position: "relative",
                }}
            >
                {step.number}
                {!isLast && (
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: -70,
                            width: 2,
                            height: 70,
                            backgroundColor: "#002D62",
                            display: { xs: "none", md: "none", lg: "block" },
                        }}
                    />
                )}
            </Box>
        </Grid>
        <Grid item xs={10} mb={3}>
            <Typography
                sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    fontFamily: "Exo",
                    color: "white",
                }}
            >
                {step.title}
            </Typography>
            <Typography
                sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Roboto",
                    color: "rgba(255, 255, 255, 0.7)",
                }}
            >
                {step.description}
            </Typography>
        </Grid>
    </Grid>
);

export const WorkingProgress = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url('${workingBgImg}')`,
                backgroundSize: "cover",
                backgroundPosition: {
                    xs: "center",
                    sm: "center",
                    md: "right",
                },
                padding: "3rem 2rem",
            }}
        >
            <Grid container justifyContent="center" alignItems="center">
                {/* Left Text Column */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            width: {
                                xs: "90%",
                                lg: "90%",
                                xl: "70%",
                            },
                            margin: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box
                                sx={{
                                    width: 30,
                                    height: 2,
                                    backgroundColor: "white",
                                    marginRight: 1,
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: 18,
                                    fontWeight: 400,
                                    fontFamily: "Exo",
                                    color: "white",

                                }}
                            >
                                Working Progress
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: 40,
                                fontWeight: 700,
                                fontFamily: "Exo",
                                color: "white",
                                marginY: 2,
                                marginBottom: '2rem'
                            }}
                        >
                            Streamlined. Client-Focused. Transparent.
                        </Typography>

                        <Box sx={{ color: "#fff", maxWidth: 600 }}>
                            {steps.map((step, index) => (
                                <StepItem
                                    key={index}
                                    step={step}
                                    isLast={index === steps.length - 1}
                                />
                            ))}
                        </Box>
                    </Box>
                </Grid>

                {/* Right Image Column */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={bgRight}
                        alt="Right Illustration"
                        sx={{ width: "100%", heigth: '100%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
