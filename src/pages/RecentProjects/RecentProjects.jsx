
import { Box, Breadcrumbs, Button, Grid, Typography, Link, CardMedia, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import firstImg from "../../Assets/Projects/1.webp";
import secondImg from "../../Assets/Projects/2.webp";
import thirdImg from "../../Assets/Projects/3.webp";
import HomeIcon from '@mui/icons-material/Home';
import projectsHeroBg from '../../Assets/Projects/projectsHero.webp'
import projects from "./projectsData.json";
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO/Seo";
import ReactGA from "react-ga";


// const data = [
//     {
//         id: 1,
//         image: firstImg,
//         heading: "Roofing Projects",
//         description:
//             "Our project showcases our expertise in creating durable weather-resistant roofs tailored to client specifications. We used premium materials and cutting-edge techniques, ensuring long-lasting protection and aesthetic appeal.",
//     },
//     {
//         id: 2,
//         image: secondImg,
//         heading: "Elevation projects",
//         description:
//             "Our elevation projects provide remarkable architectural facades for a seamless blend of functionality and visit impact. These designs enhance the curb appeal and structural integrity making us the best choice for construction in indore.",
//     },
//     {
//         id: 3,
//         image: thirdImg,
//         heading: "Floor plan project",
//         description:
//             "Our floor plan projects are meticulously crafted, balancing space utilization and flow with attention to detail and customized layouts. We optimize each area for comfort, efficiency, and style, reflecting our reputation as the best construction company in Indore.",
//     },
//     {
//         id: 4,
//         image: secondImg,
//         heading: "Interior project",
//         description:
//             "Our interior project reflects our passion for beautiful, functional spaces. From modern to classic designs, we customize interiors to meet each client's needs using the finest finishes and innovative layouts.",
//     },
//     {
//         id: 5,
//         image: secondImg,
//         heading: "Exterior projects",
//         description:
//             "Our exterior projects showcase landscaping, architectural detailing, and outdoor spaces that complement the building's overall aesthetic, enhancing the property value and appeal.",
//     },
// ];


// const projects = [
//     {
//         id: 1,
//         name: "Lokesh Pal",
//         title: "Roofing Projects",
//         description: "Lorem ipsum dolor sit amet consectetur. Nullam velit ut nunc sed tellus. Morbi sit eget volutpat id nunc. Faucibus quis viverra augue quis. Habitant vel eget id massa malesuada pellentesque elit.",
//         image: firstImg,
//     },
//     {
//         id: 2,
//         name: "Satish Gupta",
//         title: "Roofing Projects",
//         description: "Lorem ipsum dolor sit amet consectetur. Nullam velit ut nunc sed tellus. Morbi sit eget volutpat id nunc. Faucibus quis viverra augue quis. Habitant vel eget id massa malesuada pellentesque elit.",
//         image: secondImg,
//     },
//     {
//         id: 3,
//         name: "Mahesh Solanki",
//         title: "Roofing Projects",
//         description: "Lorem ipsum dolor sit amet consectetur. Nullam velit ut nunc sed tellus. Morbi sit eget volutpat id nunc. Faucibus quis viverra augue quis. Habitant vel eget id massa malesuada pellentesque elit.",
//         image: thirdImg,
//     },
//     {
//         id: 4,
//         name: "Suresh Kumar",
//         title: "Roofing Projects",
//         description: "Lorem ipsum dolor sit amet consectetur. Nullam velit ut nunc sed tellus. Morbi sit eget volutpat id nunc. Faucibus quis viverra augue quis. Habitant vel eget id massa malesuada pellentesque elit.",
//         image: firstImg,
//     },
//     {
//         id: 5,
//         name: "Vikas Gupta",
//         title: "Roofing Projects",
//         description: "Lorem ipsum dolor sit amet consectetur. Nullam velit ut nunc sed tellus. Morbi sit eget volutpat id nunc. Faucibus quis viverra augue quis. Habitant vel eget id massa malesuada pellentesque elit.",
//         image: thirdImg,
//     },
//     {
//         id: 6,
//         name: "Sunil Kumawat",
//         title: "Roofing Projects",
//         description: "Lorem ipsum dolor sit amet consectetur. Nullam velit ut nunc sed tellus. Morbi sit eget volutpat id nunc. Faucibus quis viverra augue quis. Habitant vel eget id massa malesuada pellentesque elit.",
//         image: secondImg,
//     },
//     {
//         id: 7,
//         name: "Manoj Sharma",
//         title: "Roofing Projects",
//         description: "Lorem ipsum dolor sit amet consectetur. Nullam velit ut nunc sed tellus. Morbi sit eget volutpat id nunc. Faucibus quis viverra augue quis. Habitant vel eget id massa malesuada pellentesque elit.",
//         image: secondImg,
//     },
//     {
//         id: 8,
//         name: "Shubham Mishra",
//         title: "Roofing Projects",
//         description: "Lorem ipsum dolor sit amet consectetur. Nullam velit ut nunc sed tellus. Morbi sit eget volutpat id nunc. Faucibus quis viverra augue quis. Habitant vel eget id massa malesuada pellentesque elit.",
//         image: secondImg,
//     },
//     {
//         id: 9,
//         name: "Sunil ladda",
//         title: "Roofing Projects",
//         description: "Lorem ipsum dolor sit amet consectetur. Nullam velit ut nunc sed tellus. Morbi sit eget volutpat id nunc. Faucibus quis viverra augue quis. Habitant vel eget id massa malesuada pellentesque elit.",
//         image: secondImg,
//     },
//     {
//         id: 10,
//         name: "Raghav Jain",
//         title: "Roofing Projects",
//         description: "Lorem ipsum dolor sit amet consectetur. Nullam velit ut nunc sed tellus. Morbi sit eget volutpat id nunc. Faucibus quis viverra augue quis. Habitant vel eget id massa malesuada pellentesque elit.",
//         image: secondImg,
//     },
// ];

const imageMap = {
    image1: firstImg,
    image2: secondImg,
    image3: thirdImg,
    // Add more mappings as needed
};

const RecentProjects = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedIds, setSelectedIds] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    })

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    const handleCardClick = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
        navigate(`/details?ids=${id}`);
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Project",
        "name": "Our Completed Projects",
        "url": "https://jayojay-anants-projects.vercel.app/",
        "description": "Explore our portfolio of successful construction and consultation projects, including residential, commercial, and industrial buildings.",
        "creator": {
            "@type": "Organization",
            "name": "Jayojay Associates",
            "url": "https://jayojay-anants-projects.vercel.app/",
        },
        "hasPart": [
            {
                "@type": "Project",
                "name": "Luxury Villa Project",
                "url": "https://yourwebsite.com/projects/luxury-villa",
                "description": "A high-end luxury villa designed with modern architecture and premium materials."
            },
            {
                "@type": "Project",
                "name": "Commercial Office Tower",
                "url": "https://yourwebsite.com/projects/office-tower",
                "description": "A state-of-the-art office building with sustainable design elements."
            }
        ]
    }




    return (

        <>
            <SEO
                title="Our Projects - Jayojay Associates"
                description="Explore our projects"
                keywords="construction company, building consultation,interior, project management,best construction company in Indore,best construction company in Indore"
                structuredData={structuredData}
            />
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
                            fontSize: "50px",
                            marginBottom: "1rem",
                        }}
                    >
                        Our Projects
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
                            width: 'auto', // Adjust width to content
                            padding: '0 16px', // Add some padding
                            borderRadius: '5px',
                        }}
                    >
                        <Link
                            href="/"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                color: "white",
                                textDecoration: "none !important",
                                '&:hover': { // Optional: prevent underline on hover as well
                                    textDecoration: 'none',
                                },
                            }}
                        >
                            <Box display={'flex'} alignItems={'center'}>
                                <HomeIcon style={{ marginRight: '5px', alignSelf: 'center', color: 'white' }} />
                                <span
                                    style={{
                                        fontFamily: "Roboto",
                                        fontSize: "20px",
                                        fontWeight: "700",
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Home
                                </span>
                            </Box>
                        </Link>
                        <Typography
                            sx={{
                                fontFamily: "Roboto",
                                fontWeight: 300,
                                fontSize: "17px",
                            }}
                        >
                            Our Projects
                        </Typography>
                    </Breadcrumbs>
                </Box>
            </Box>
            <Box style={{ padding: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography sx={{ fontFamily: "Exo", fontWeight: "bold", fontSize: "26px" }}>
                    Our Work Speaks for Itself
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Roboto",
                        fontWeight: 400,
                        fontSize: "17px",
                        // color: "#6A6A6A",
                        marginTop: "1rem",
                        textAlign: 'justify',
                        marginBottom: '3rem'
                    }}
                >
                    As the best construction company in Indore, Jayojay is proud to present a curated portfolio of completed projects, highlighting our commitment to quality, innovation, and design excellence.
                </Typography>
                <Grid container spacing={3}>
                    {projects.slice(0, visibleCount).map((project) => (
                        <Grid item xs={12} sm={6} md={4} key={project.id}>
                            <Card
                                onClick={() => handleCardClick(project.id)}
                                sx={{
                                    height: '100%',
                                    borderRadius: '15px', border: '1px solid #8CC1FF',
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                    transition: "transform 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.02)",
                                    },
                                    cursor: 'pointer'
                                }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom sx={{ fontFamily: "Exo", fontSize: '25px', color: '#002D62', fontWeight: 700 }}>{project.name}</Typography>
                                    <Typography gutterBottom sx={{ fontFamily: "Roboto", fontSize: '20px', color: '#002D62', fontWeight: 400 }}>
                                        {project.title}
                                    </Typography>
                                    <Typography sx={{ fontFamily: "Roboto", fontSize: '13px', color: 'black', fontWeight: 400 }}>
                                        {project.description.slice(0, 200)}
                                        {project.description.length > 50 && "..."}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {visibleCount < projects.length && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleShowMore}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '30px',
                            backgroundColor: "#002D62",
                            color: "white",
                            fontFamily: "Roboto",
                            width: "160px",
                            height: "45px",
                        }}
                    >
                        Show More
                    </Button>
                )}
            </Box>
        </>
    );
};


export default RecentProjects;



// <Box
// sx={{
//     position: "relative",
//     height: "300px",
//     backgroundImage: `url(${projectsHeroBg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "white",
//     textAlign: "center",
// }}
// >
// <Box
//     sx={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: "rgba(0, 0, 0, 0.3)",
//     }}
// ></Box>
// <Box
//     sx={{
//         position: "relative",
//         zIndex: 2,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     }}
// >
//     <Typography
//         sx={{
//             fontFamily: "Exo",
//             fontWeight: 700,
//             fontSize: "50px",
//             marginBottom: "1rem",
//         }}
//     >
//         Our Projects
//     </Typography>
//     <Breadcrumbs
//         separator="/"
//         aria-label="breadcrumb"
//         sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             color: "white",
//             backgroundColor: '#002D62',
//             height: '50px',
//             width: 'auto', // Adjust width to content
//             padding: '0 16px', // Add some padding
//             borderRadius: '5px',
//         }}
//     >
//         <Link
//             href="/"
//             sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 color: "white",
//                 textDecoration: "none !important",
//                 '&:hover': { // Optional: prevent underline on hover as well
//                     textDecoration: 'none',
//                 },
//             }}
//         >
//             <Box display={'flex'} alignItems={'center'}>
//                 <HomeIcon style={{ marginRight: '5px', alignSelf: 'center', color: 'white' }} />
//                 <span
//                     style={{
//                         fontFamily: "Roboto",
//                         fontSize: "20px",
//                         fontWeight: "700",
//                         color: 'white',
//                         textDecoration: 'none'
//                     }}
//                 >
//                     Home
//                 </span>
//             </Box>
//         </Link>
//         <Typography
//             sx={{
//                 fontFamily: "Roboto",
//                 fontWeight: 300,
//                 fontSize: "17px",
//             }}
//         >
//             Our Projects
//         </Typography>
//     </Breadcrumbs>
// </Box>
// </Box>

// <Box sx={{ padding: { xs: '3rem 3rem 0rem 3rem', sm: '2rem 2rem 1rem 2rem' } }}>
// <Typography
//     sx={{
//         display: "flex",
//         justifyContent: "center",
//         fontFamily: "Exo",
//         fontWeight: 800,
//         fontSize: "50px",
//     }}
// >
//     Special Projects
// </Typography>
// <Box sx={{ display: "flex", flexDirection: "column", marginTop: { xs: '1rem' } }}>

//     <Typography
//         sx={{
//             fontFamily: "Roboto",
//             fontWeight: 400,
//             fontSize: "17px",
//             color: "black",
//             marginTop: "1rem",
//         }}
//     >
//         At Jayojay we’re proud to showcase a range of successful projects that highlight our commitment to quality and detail, solidifying our reputation as the best construction company in indore
//     </Typography>
// </Box>
// </Box>

// <Box sx={{ p: 3, textAlign: "center" }}>
// {/* Map over itemsToShow */}
// {itemsToShow.map((item, index) => (
//     <Grid
//         container
//         key={item.id}
//         spacing={2}
//         sx={{
//             mb: 5,
//             flexDirection: index % 2 === 0 ? "row" : "row-reverse",
//             alignItems: "flex-start",
//         }}
//     >
//         {/* Image Section */}
//         <Grid item xs={12} md={6}>
//             <Box
//                 component="img"
//                 src={item.image}
//                 alt={`Client ${item.id}`}
//                 sx={{
//                     width: "100%",
//                 }}
//             />
//         </Grid>

//         {/* Text Section */}
//         <Grid item xs={12} md={6}>
//             <Box
//                 sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     marginTop: "2rem",
//                     marginLeft: "1rem",
//                 }}
//             >
//                 <Typography
//                     variant="h3"
//                     component="div"
//                     sx={{
//                         fontWeight: 700,
//                         fontSize: "90px",
//                         mb: 1,
//                         mr: 3,
//                         color: "black",
//                         fontFamily: "Roboto",
//                     }}
//                 >
//                     {`0${item.id}`}
//                 </Typography>
//                 <Typography
//                     variant="h5"
//                     component="div"
//                     sx={{
//                         fontWeight: 700,
//                         fontSize: "40px",
//                         mb: 2,
//                         color: "black",
//                         fontFamily: "Roboto",
//                     }}
//                 >
//                     {item.heading}
//                 </Typography>
//             </Box>
//             <Typography
//                 sx={{
//                     fontWeight: 400,
//                     fontSize: "18px",
//                     marginLeft: "1rem",
//                     color: "black",
//                     fontFamily: "Roboto",
//                     textAlign: "justify",
//                 }}
//             >
//                 {item.description}
//             </Typography>
//         </Grid>
//     </Grid>
// ))}

// {/* See More Button */}
// {!showAll && (
//     <Button
//         sx={{
//             mt: 3,
//             backgroundColor: "#002D62",
//             color: "white",
//             fontFamily: "Roboto",
//             width: "160px",
//             height: "45px",
//         }}
//         onClick={() => setShowAll(true)}
//     >
//         See More
//     </Button>
// )}
// </Box>