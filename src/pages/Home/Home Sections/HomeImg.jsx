import React from "react";
import { Box, Typography } from "@mui/material"; // Import MUI components
import homeImg from '../../../Assets/Home/homeBanner.webp';

export const HomeImg = () => {
    return (
        <Box>
            <Box
                sx={{
                    position: "relative",
                    backgroundImage: `url(${homeImg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: { xs: "240px", sm: "350px", md: "500px", lg: "500px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        position: "relative",
                        color: "#fff",
                        padding: "20px",
                        marginLeft: "3%",
                        maxWidth: { xs: "70%", sm: "50%", md: "50%" },
                    }}
                >
                    <Box
                        sx={{
                            height: "auto",
                            width: { xs: "5px", sm: "10px", md: "10px" },
                            backgroundColor: "#002D62",
                            marginRight: "15px",
                        }}
                    ></Box>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: "20px", sm: "30px", md: "40px" },
                            fontFamily: "Exo",
                        }}
                    >
                        Creating spaces with care, driven by expertise and a commitment to
                        delivering excellence.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};