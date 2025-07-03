import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import logo1 from "../../../Assets/ClientLogos/c2-1.webp";
import logo2 from "../../../Assets/ClientLogos/c2-2.webp";
import logo3 from "../../../Assets/ClientLogos/c2-3.webp";
import logo4 from "../../../Assets/ClientLogos/c2-4.webp";
import logo5 from "../../../Assets/ClientLogos/c2-5.webp";

const ClientLogos = () => {
    const isAbove600px = useMediaQuery("(min-width:600px)");

    if (!isAbove600px) {
        return null;
    }

    return (
        <Box
            sx={{
                height: "180px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff", 
                paddingX: "2rem",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    height: '100%',
                    maxWidth: "1200px",
                }}
            >
                {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",

                            maxHeight: "150px",
                            flex: 1, 
                            marginX: "1rem",
                        }}
                    >
                        <img
                            src={logo}
                            alt={`logo-${index + 1}`}
                            style={{
                                width: "100%",
                                height: "100%",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ClientLogos;
