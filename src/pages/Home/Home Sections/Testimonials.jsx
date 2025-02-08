// import {
//     Avatar,
//     Box,
//     Card,
//     CardContent,
//     Grid,
//     Grow,
//     Rating,
//     Typography,
// } from "@mui/material";
// import testimonials from "./JSON/Testimonials.json";
// import { useEffect, useRef, useState } from "react";

// export const Testimonals = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                 }
//             },
//             { threshold: 0.3 }
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => {
//             if (sectionRef.current) {
//                 observer.unobserve(sectionRef.current);
//             }
//         };
//     }, []);

//     return (
//         <Box
//             ref={sectionRef}
//             sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 flexDirection: "column",
//                 padding: "2rem",
//                 backgroundColor: "#EBF5FF",
//             }}
//         >
//             <Grow in={isVisible} timeout={1000}>
//                 <Box
//                     sx={{
//                         display: "flex",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             width: "30px",
//                             height: "2px",
//                             backgroundColor: "black",
//                             marginRight: "10px",
//                         }}
//                     />
//                     <Typography
//                         variant="h6"
//                         sx={{ fontSize: "18px", fontWeight: 400, fontFamily: "Exo", color: "#002D62", }}
//                     >
//                         Testimonials
//                     </Typography>
//                 </Box>
//                 <Typography
//                     variant="h6"
//                     sx={{
//                         fontSize: "35px",
//                         fontWeight: 700,
//                         fontFamily: "Exo",
//                         textAlign: "center",
//                     }}
//                 >
//                     What our Clients Say About US <br></br> and Our Work{" "}
//                 </Typography>

//                 <Box sx={{ padding: { xs: "2rem", sm: "4rem" } }}>
//                     <Grid container spacing={4}>
//                         {testimonials.map((testimonial, index) => (
//                             <Grid item xs={12} sm={6} md={4} key={index}>
//                                 <Box
//                                     sx={{
//                                         backgroundColor: "#fff",
//                                         padding: "1.5rem",
//                                         borderRadius: "8px",
//                                         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                                         border: "none",
//                                         transition: "transform 0.3s",
//                                         "&:hover": {
//                                             transform: "scale(1.05)",
//                                         },
//                                     }}
//                                 >
//                                     <Box
//                                         sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
//                                     >
//                                         <Avatar
//                                             sx={{ width: 48, height: 48, backgroundColor: "#e0e0e0" }}
//                                         />
//                                         <Box>
//                                             <Typography
//                                                 variant="h6"
//                                                 fontWeight="600"
//                                                 sx={{
//                                                     fontFamily: "Exo",
//                                                     fontWeight: 600,
//                                                     fontSize: "18px",
//                                                 }}
//                                             >
//                                                 {testimonial.title}
//                                             </Typography>
//                                             <Rating
//                                                 value={testimonial.rating}
//                                                 readOnly
//                                                 size="small"
//                                                 sx={{
//                                                     "& .MuiRating-iconFilled": {
//                                                         color: "#9ECDFF", // Color for filled stars
//                                                     },
//                                                 }}
//                                             />
//                                         </Box>
//                                     </Box>
//                                     <Typography
//                                         sx={{
//                                             marginTop: "1rem",
//                                             fontSize: "16px",
//                                             color: "#6A6A6A",
//                                             lineHeight: 1.5,
//                                             fontFamily: "Roboto",
//                                             fontWeight: 400,
//                                         }}
//                                     >
//                                         {testimonial.description}
//                                     </Typography>
//                                     <Typography
//                                         sx={{
//                                             marginTop: "1rem",
//                                             fontWeight: 700,
//                                             fontFamily: "Exo",
//                                             fontSize: "18px",
//                                             color: "#15181B",
//                                         }}
//                                     >
//                                         — {testimonial.name}
//                                     </Typography>
//                                     <Typography
//                                         sx={{
//                                             fontWeight: 400,
//                                             fontFamily: "Roboto",
//                                             fontSize: "16 px",
//                                             color: "#6A6A6A",
//                                         }}
//                                     >
//                                         {testimonial.role}
//                                     </Typography>
//                                 </Box>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Box>
//             </Grow >
//         </Box>
//     );
// };

import {
    Avatar,
    Box,
    Grid,
    Rating,
    Typography,
    Grow,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import testimonials from "./JSON/Testimonials.json";

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
            { threshold: 0.3 } // Trigger when 30% of the component is visible
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
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center'
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
                        }}
                    >
                        What our Clients Say About US <br />
                        and Our Work{" "}
                    </Typography>

                    <Box sx={{ padding: { xs: "2rem", sm: "4rem" } }}>
                        <Grid container spacing={4}>
                            {testimonials.map((testimonial, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Box
                                        sx={{
                                            backgroundColor: "#fff",
                                            padding: "1.5rem",
                                            borderRadius: "8px",
                                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                            border: "none",
                                            transition: "transform 0.3s",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                            },
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
                                                    sx={{
                                                        "& .MuiRating-iconFilled": {
                                                            color: "#9ECDFF", // Color for filled stars
                                                        },
                                                    }}
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
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Grow>
        </Box>
    );
};
