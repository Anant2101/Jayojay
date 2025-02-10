import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    styled,
    Button,
    Divider,
    Card,
    CardContent,
    TextField,
    Breadcrumbs,
    Link,
    Avatar,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import logo from '../../Assets/Footer/logo.webp'

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";


import aboutHeroBg from "../../Assets/Aboutus/aboutHeroBg.webp";

import contactImg from "../../Assets/Aboutus/about2.webp";

import firstIcon from "../../Assets/Aboutus/1.webp";
import secondIcon from "../../Assets/Aboutus/2.webp";
import thirdcon from "../../Assets/Aboutus/3.webp";
import SEO from "../../components/SEO/Seo";

const stats = [
    { number: "200+", label: "Projects Delivered" },
    { number: "150+", label: "Satisfied Clients" },
    { number: "35+", label: "Successful Ventures" },

];

const servicesData = [
    {
        icon: firstIcon,
        heading: "Accurate Budget Planning",
        description:
            "Our estimation process ensures a clear understanding of costs, helping you plan and allocate resources effectively.",
    },
    {
        icon: secondIcon,
        heading: "Customized Cost Breakdown ",
        description:
            "We provide a detailed and transparent breakdown of expenses tailored to the specific needs of your project.",
    },
    {
        icon: thirdcon,
        heading: "Risk Assessment and Optimization",
        description:
            "By identifying potential cost risks early, we help you optimize your budget and prevent unexpected financial challenges.​",
    },
];

const ceoData = [
    {
        id: 1,
        name: "Er. Pranav Bhondwe",
        designation: "Co-Founder",
        description:
            "Lorem ipsum dolor sit amet consectetur. Diam dignissim ac lectus pulvinar nunc tortor tempus. Eget a sit ornare sed dignissim auctor. Nulla diam pellentesque viverra a a vel id. Urna in cursus pharetra in suscipit diam.",
    },
    {
        id: 2,
        name: "Er. Naveen Vaishnav",
        designation: "Co-Founder",
        description:
            "Lorem ipsum dolor sit amet consectetur. Diam dignissim ac lectus pulvinar nunc tortor tempus. Eget a sit ornare sed dignissim auctor. Nulla diam pellentesque viverra a a vel id. Urna in cursus pharetra in suscipit diam.",
    },
    {
        id: 3,
        name: "Er. Nikhil Bhargav",
        designation: "Co-Founder",
        description:
            "Lorem ipsum dolor sit amet consectetur. Diam dignissim ac lectus pulvinar nunc tortor tempus. Eget a sit ornare sed dignissim auctor. Nulla diam pellentesque viverra a a vel id. Urna in cursus pharetra in suscipit diam.",
    },
];


const AboutUs = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        workInquiries: "",
        projectDetails: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        workInquiries: "",
        projectDetails: "",
    });

    // Handle change for input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const handleSubmit = () => {
        let newErrors = {};
        let hasError = false;

        // Validate each field
        for (const key in formValues) {
            if (!formValues[key]) {
                newErrors[key] = "This field cannot be empty";
                hasError = true;
            }
        }

        if (hasError) {
            setErrors(newErrors); // Set error messages
        } else {
            console.log(formValues); // Log the form values to the console
            // You can also perform further actions like sending the data to an API here
        }
    };


    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Jayojay Associates",
        "url": "https://jayojay-anants-projects.vercel.app/",
        "logo": { logo },
        "description": "We are a leading construction and consultation firm with expertise in building design, project management, and architecture.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 9669046539",
            "contactType": "Customer Service",
            "areaServed": "IN",
            "availableLanguage": "English, Hindi"
        },
        "sameAs": [
            "https://www.instagram.com/jayojayassociates?igsh=MWE5ajdlbjV4emp4ZA%3D%3D&utm_source=qr",
            "https://www.linkedin.com/company/yourcompany",
            "https://twitter.com/yourcompany"
        ]
    };


    return (

        <div>
            <SEO
                title="About Us - Jayojay Associates"
                description="Learn more about our construction and consultation services."
                keywords="construction company, The Jayojay Difference,affordable construction services,turnkey construction,interior, Architecture, project management"
                structuredData={structuredData}
            />
            {/* Hero Section */}
            <Box
                sx={{
                    position: "relative",
                    height: "300px",
                    backgroundImage: `url(${aboutHeroBg})`,
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
                <Box sx={{ position: "relative", zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ fontFamily: "Exo", fontWeight: 700, fontSize: "50px", marginBottom: "1rem" }}>About Us</Typography>
                    <Breadcrumbs
                        separator="/"
                        aria-label="breadcrumb"

                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                            marginBottom: "8px",
                            backgroundColor: '#002D62',
                            height: '50px',
                            width: '190px',
                            borderRadius: '5px'
                        }}
                    >
                        <Link
                            href="/"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            <HomeIcon />
                            <span style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: "700", marginLeft: '5px' }}>Home</span>
                        </Link>
                        <Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "17px" }}>About Us</Typography>
                    </Breadcrumbs>
                </Box>
            </Box>

            <Box sx={{ backgroundColor: "#f8f9fa", height: "100%" }}>
                <Grid container>
                    {/* Left Section */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={contactImg}
                            alt="construction"
                            sx={{
                                objectFit: "contain",
                                width: {
                                    xs: "80%",
                                    sm: "80%",
                                },
                                marginTop: { xs: "2rem", sm: '0px' },
                                height: {
                                    xs: "100%",
                                    sm: "80%",
                                },
                            }}
                        />
                    </Grid>

                    {/* Right Section */}
                    <Grid item xs={12} md={6} display={"flex"}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignitems: "center",
                                flexDirection: "column",
                                padding: {
                                    xs: "0px 3rem 3rem 3rem",
                                    sm: "5px 3rem 3rem 3rem",
                                    md: "3rem",
                                },
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
                                    About us
                                </Typography>
                            </Box>
                            <Typography
                                gutterBottom
                                sx={{ fontFamily: "Exo", fontWeight: 700, fontSize: "45px", lineHeight: '60px' }}
                            >
                                Creating Innovative <br></br>Spaces That Inspire and Endure
                            </Typography>
                            <Typography
                                gutterBottom
                                sx={{
                                    fontFamily: "Roboto",
                                    fontWeight: 400,
                                    fontSize: "17px",
                                    color: "#6A6A6A",
                                    textAlign: 'justify'
                                }}
                            >
                                At Jayojay Constructions, we don’t just build structures—we create legacies. Backed by years of expertise and an unwavering commitment to excellence, we are a name synonymous with quality, trust, and innovation in the construction industry. From residential marvels to commercial landmarks, we specialize in delivering projects that combine world-class craftsmanship with modern design, tailored to your unique vision.

                            </Typography>

                            <Grid container spacing={2} mt={3}>
                                {[
                                    "Desigining",
                                    "Construction",
                                    "Renovation",
                                    "Real Estate",
                                ].map((text, index) => (
                                    <Grid item xs={6} sm={6} key={index}>
                                        <Box display="flex" alignItems="center">
                                            <CheckCircleOutlineIcon
                                                color="primary"
                                                sx={{ color: "#002D62", marginRight: "0.5rem" }}
                                            />
                                            <Typography
                                                sx={{
                                                    fontFamily: "Exo",
                                                    fontWeight: 600,
                                                    fontSize: "17px",
                                                }}
                                            >
                                                {text}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>



                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box
                sx={{
                    backgroundColor: "#002855", // Dark blue background
                    color: "#fff", // White text
                    padding: "1rem 2rem",
                }}
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent={{ xs: "space-around", sm: "center" }}
                >
                    {stats.map((stat, index) => (
                        <React.Fragment key={index}>
                            <Grid
                                item
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                sx={{ flex: 1, minWidth: "150px" }}
                            >
                                <Typography
                                    sx={{ fontSize: "35px", fontFamily: "Exo", fontWeight: 700 }}
                                >
                                    {stat.number}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: "18px", fontFamily: "Exo", fontWeight: 600 }}
                                >
                                    {stat.label}
                                </Typography>
                            </Grid>
                            {index < stats.length - 1 && (
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{
                                        display: { xs: "none", sm: "none", md: "block" },
                                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                                        height: "70px",
                                    }}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ padding: { xs: "3rem", sm: "3rem", md: "4rem" } }}>
                {/* Heading Section */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "2rem",
                    }}
                >
                    {/* Text Section (Left) */}
                    <Box sx={{ alignSelf: { xs: "flex-start", md: "center" } }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 30,
                                    height: 2,
                                    backgroundColor: "#002D62",
                                    marginRight: 1,
                                }}
                            ></Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#002D62",
                                    fontSize: 18,
                                    fontFamily: "Exo",
                                    fontWeight: 600,
                                }}
                            >
                                What we do
                            </Typography>
                        </Box>
                        <Typography
                            variant="h4"
                            sx={{ fontSize: 45, fontFamily: "Exo", fontWeight: 700 }}
                        >
                            Fully Integrated Construction Services.
                        </Typography>
                        <Typography
                            variant="h4"
                            mt={2}
                            sx={{
                                fontSize: 16,
                                fontFamily: "Roboto",
                                fontWeight: 400,
                                color: "#6A6A6A",
                                textAlign: 'justify',
                                lineHeight: '1.5rem'
                            }}
                        >
                            Jayojay provides expert construction and pre-construction services, precisely tailored to each client's individual needs. Our project consultation services offer strategic guidance from concept to completion. We execute turnkey construction solutions, manage projects flawlessly, and integrate vital services, including interior design, architecture, and real estate valuation.  We prioritize transparent communication, collaborative partnerships, and efficient workflows, enabling informed choices and delivering exceptional, cost-effective outcomes.
                        </Typography>
                    </Box>
                </Box>

                <Grid
                    container
                    spacing={4}
                    justifyContent="left"
                    sx={{
                        padding: { sm: "0px", md: "0rem", xl: "1rem" },
                        display: "flex",
                        flexWrap: "wrap",
                    }}
                >
                    {servicesData.map((service, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card
                                variant="outlined"
                                sx={{
                                    width: "100%",
                                    height: "100%",

                                    border: "1px solid #ddd",
                                    borderRadius: "8px",
                                    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
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
                                        sx={{
                                            fontSize: 24,
                                            fontFamily: "Exo",
                                            fontWeight: 700,
                                            marginTop: { xs: "0px", sm: "1rem" },
                                        }}
                                    >
                                        {service.heading}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: 16,
                                            fontFamily: "Roboto",
                                            fontWeight: 400,
                                            marginBottom: "10px",
                                            marginTop: "8px",
                                            // textAlign: 'justify'
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>



            </Box>
            <Box sx={{ padding: "3rem", backgroundColor: "#002D62", color: "#fff" }}>
                {/* Heading */}
                <Typography variant="h4" align="left" gutterBottom>
                    Our CEO's
                </Typography>
                <Typography variant="body1" align="left" sx={{ marginBottom: "20px", textAlign: 'justify' }}>
                    Lorem ipsum dolor sit amet consectetur. Diam dignissim ac lectus pulvinar nunc tortor tempus. Eget a sit ornare sed dignissim auctor. Nulla diam pellentesque viverra a a vel id. Urna in cursus pharetra in suscipit diam.
                </Typography>

                {/* CEO Cards */}
                <Grid container spacing={4} justifyContent="center" padding={"2rem"}>
                    {ceoData.map((ceo) => (
                        <Grid item xs={12} sm={6} md={4} key={ceo.id}>
                            <Card
                                sx={{
                                    backgroundColor: "#fff",
                                    color: "#000",
                                    borderRadius: "8px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    padding: '1rem'
                                }}
                            >
                                <CardContent>
                                    {/* Avatar Section */}
                                    <Box display="flex" alignItems="center" mb={2}>
                                        <Avatar
                                            src={ceo.image}
                                            alt={ceo.name}
                                            sx={{ width: 56, height: 56, marginRight: "16px" }}
                                        />
                                        <Box>
                                            <Typography variant="h6">{ceo.name}</Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {ceo.designation}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <hr />
                                    {/* Description */}
                                    <Typography sx={{
                                        fontSize: 15,
                                        fontFamily: "Roboto",
                                        color: "#6A6A6A",
                                    }}>
                                        {ceo.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default AboutUs;

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: #002d62;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 1px solid #002d62; /* Set border when focused */
    }
    background-color: white; /* Set the background color to white */
  }
  & .MuiOutlinedInput-input {
    background-color: white; /* Ensure the input field has a white background */
  }
`;




// <Box
// sx={{
//     backgroundImage: `url('${contactbgImg}')`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     py: 5,
//     px: 2,
// }}
// >
// <Box sx={{ padding: { xs: "1.5rem", sm: "2rem", md: "5rem" } }}>
//     <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
//         {[
//             {
//                 icon: <EmailIcon sx={{ mr: 1 }} />,
//                 title: "Email Address",
//                 detail: "info@digital.com",
//             },
//             {
//                 icon: <PhoneIcon sx={{ mr: 1 }} />,
//                 title: "Phone Number",
//                 detail: "+123 456 789",
//             },
//             {
//                 icon: <LocationOnIcon sx={{ mr: 1 }} />,
//                 title: "Our Location",
//                 detail: "425 Avenue, NY City",
//             },
//             {
//                 icon: <AccessTimeIcon sx={{ mr: 1 }} />,
//                 title: "Opening Hour",
//                 detail: "Mon-Fri: 9 AM - 6 PM",
//             },
//         ].map((item, index) => (
//             <Grid item xs={12} md={3} key={index}>
//                 <Card sx={{ boxShadow: "none", textAlign: "center" }}>
//                     <CardContent>
//                         <Typography
//                             variant="h6"
//                             gutterBottom
//                             sx={{
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                             }}
//                         >
//                             {item.icon}
//                             {item.title}
//                         </Typography>
//                         <Typography variant="body2">{item.detail}</Typography>
//                     </CardContent>
//                 </Card>
//             </Grid>
//         ))}
//     </Grid>

//     <Grid
//         container
//         sx={{ backgroundColor: "white", borderRadius: "5px" }}
//     >
//         <Grid item xs={12} md={6} sx={{ backgroundColor: "#E6F2FF" }}>
//             <Box
//                 sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "100%",
//                 }}
//             >
//                 <Box
//                     sx={{
//                         position: "relative",
//                         padding: "3rem",

//                         borderRadius: "8px",
//                         display: "flex",
//                         justifyContent: "flex-start",
//                         alignItems: "center",
//                         textAlign: "",
//                         overflow: "hidden",
//                     }}
//                 >
//                     <style>
//                         {`
// @media screen and (max-width: 900px) {
// .contact-image {
// display: none; /* Hide the image on screens smaller than 900px */
// }
// }
// `}
//                     </style>
//                     <img
//                         src={contactVector}
//                         className="contact-image"
//                         alt="Vector"
//                         style={{
//                             width: "100%",
//                             height: "auto",
//                             maxWidth: "400px",
//                             position: "absolute",

//                             zIndex: 1,
//                             maxHeight: "300px",
//                         }}
//                     />
//                     <Box>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 marginBottom: "10px",
//                             }}
//                         >
//                             <Box
//                                 sx={{
//                                     width: "30px",
//                                     height: "2px",
//                                     backgroundColor: "#002D62",
//                                     marginRight: "10px",
//                                 }}
//                             ></Box>

//                             <Typography
//                                 variant="h6"
//                                 sx={{
//                                     color: "#002D62",
//                                     fontSize: "18px",
//                                     fontFamily: "Exo",
//                                     fontWeight: 600,
//                                 }}
//                             >
//                                 What we do
//                             </Typography>
//                         </Box>
//                         <Typography
//                             variant="h4"
//                             sx={{
//                                 fontSize: "30px",
//                                 fontFamily: "Exo",
//                                 fontWeight: 700,
//                                 color: "black",
//                             }}
//                         >
//                             Have a Project in Mind? <br></br>Contact With Us
//                         </Typography>
//                         <Typography
//                             variant="h4"
//                             sx={{
//                                 fontSize: "17px",
//                                 fontFamily: "Roboto",
//                                 fontWeight: 400,
//                                 color: "#6A6A6A",
//                                 marginTop: "1rem",
//                             }}
//                         >
//                             For more information or to speak with our team, please
//                             contact us today. We are here to help with all your
//                             construction needs and look forward to working with you.
//                         </Typography>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 padding: "1rem 1rem 1rem 0rem",
//                                 flexWrap: "wrap",
//                             }}
//                         >
//                             <img
//                                 src={contactIcon}
//                                 alt="Profile Picture"
//                                 style={{
//                                     width: "50px",
//                                     height: "50px",
//                                     borderRadius: "50%",
//                                     marginRight: "1rem",
//                                 }}
//                             />
//                             <div>
//                                 <Typography
//                                     sx={{
//                                         fontSize: "22px",
//                                         fontFamily: "Exo",
//                                         fontWeight: 700,
//                                         color: "black",
//                                     }}
//                                 >
//                                     Naveen Vaishnav
//                                 </Typography>
//                                 <Typography
//                                     sx={{
//                                         fontSize: "14px",
//                                         fontFamily: "Roboto",
//                                         fontWeight: 400,
//                                         color: "#6A6A6A",
//                                     }}
//                                 >
//                                     Support Manager
//                                 </Typography>
//                             </div>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>
//         </Grid>

//         <Grid item xs={12} md={6}>
//             <Box sx={{ maxWidth: 600, margin: "0 auto", p: 3 }}>
//                 <Typography
//                     variant="h5"
//                     align="center"
//                     sx={{ mb: 3, fontWeight: "bold" }}
//                 >
//                     Request A Quote
//                 </Typography>

//                 <Grid container spacing={3}>
//                     {[
//                         { label: "Name", name: "name" },
//                         { label: "Phone Number", name: "phoneNumber" },
//                         { label: "Email Address", name: "email" },
//                         { label: "Work Inquiries", name: "workInquiries" },
//                     ].map((field, index) => (
//                         <Grid item xs={12} sm={6} key={index}>
//                             <WhiteBorderTextField
//                                 fullWidth
//                                 label={field.label}
//                                 variant="outlined"
//                                 name={field.name}
//                                 value={formValues[field.name]}
//                                 onChange={handleChange}
//                                 error={!!errors[field.name]}
//                                 helperText={errors[field.name]}
//                             />
//                         </Grid>
//                     ))}
//                     <Grid item xs={12}>
//                         <WhiteBorderTextField
//                             fullWidth
//                             label="Project Details"
//                             variant="outlined"
//                             multiline
//                             rows={3}
//                             name="projectDetails"
//                             value={formValues.projectDetails}
//                             onChange={handleChange}
//                             error={!!errors.projectDetails}
//                             helperText={errors.projectDetails}
//                         />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                         <Button
//                             fullWidth
//                             sx={{
//                                 backgroundColor: "#001f54",
//                                 color: "white",
//                                 height: "50px",
//                                 fontSize: "16px",
//                                 fontWeight: 400,
//                             }}
//                             onClick={handleSubmit}
//                         >
//                             Send Message
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </Box>
//         </Grid>
//     </Grid>
// </Box>
// </Box>