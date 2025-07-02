import React, { useState } from "react";
import contactUsEmail from "../../Assets/ContactUs/ContactUsEmail.webp";
import contactUsPhone from "../../Assets/ContactUs/ContactUsPhone.webp";
import contactUsLocation from "../../Assets/ContactUs/ContactUslocation.webp";
import contactUsformBg from "../../Assets/ContactUs/contactusformBG.webp";
import { Box, Breadcrumbs, Button, Grid, TextField, Typography, Link } from "@mui/material";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeIcon from '@mui/icons-material/Home';
import ContactusHero from '../../Assets/ContactUs/contactusHero.webp'


const contactInfo = [
    {
        icon: contactUsLocation,
        heading: "Our Location",
        description: "202 ShreeJi Business Pakr",
    },
    {
        icon: contactUsEmail,
        heading: "Email Address",
        description: "jayojayassociates@gmail.com",
    },
    {
        icon: contactUsPhone,
        heading: "Phone Number",
        description: "+91-9669046539",
    },
];

const initialFormValues = {
    name: "",
    phoneNumber: "",
    email: "",
    workInquiries: "",
    projectDetails: "",
};

const initialErrors = {
    name: "",
    phoneNumber: "",
    email: "",
    workInquiries: "",
    projectDetails: "",
};

export const ContactUsPage = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialErrors);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = () => {
        const newErrors = {};
        let hasError = false;

        Object.entries(formValues).forEach(([key, value]) => {
            if (!value) {
                newErrors[key] = "This field cannot be empty";
                hasError = true;
            }
        });

        if (formValues.phoneNumber && !/^\d{10}$/.test(formValues.phoneNumber)) {
            newErrors.phoneNumber = "Enter a valid Phone number";
            hasError = true;
        }


        if (hasError) {
            setErrors(newErrors);
            return;
        }

        const serviceId = "service_5ncv73q";
        const templateId = "template_pxl3652";
        const publicKey = "Fd6iYUYge4ZE9fspD";

        const detailsParams = {
            from_name: formValues.name,
            from_phone: formValues.phoneNumber,
            from_email: formValues.email,
            from_regarding: formValues.workInquiries,
            message: formValues.projectDetails,
        };

        const url = "https://script.google.com/macros/s/AKfycbxgpsVWkvhAxxTWRx7kcAi07BWYpKfTzNoE0_4DHZPbkF1udGROmtJ9Qn5JWueTMHFI/exec"
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: (`Name=${formValues.name}&Phone=${formValues.phoneNumber}`),
        }).then(res => res.text()).then(data => {
            // alert(data)
        }).catch(error => console.log(error))

        emailjs
            .send(serviceId, templateId, detailsParams, publicKey)
            .then((response) => {
                toast.success("Email sent successfully!");
                setFormValues(initialFormValues);
            })
            .catch((error) => {
                toast.error("Failed to send email. Please try again later.");
                console.error("Email not sent", error);
            });
    };

    return (
        <>
            <ToastContainer />
            <Box
                sx={{
                    position: "relative",
                    height: "300px",
                    backgroundImage: `url(${ContactusHero})`,
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
                            fontSize: "40px",
                            marginBottom: "1rem",
                        }}
                    >
                        Contact Us
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
                            Contact Us
                        </Typography>
                    </Breadcrumbs>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", padding: "3rem" }}>
                <Typography
                    sx={{
                        fontSize: "60px",
                        fontFamily: "Exo",
                        fontWeight: 700,
                        marginBottom: "1rem",
                    }}
                >
                    Contact Us
                </Typography>
                <Grid container sx={{ backgroundColor: "white", borderRadius: "5px" }}>
                    <Grid item xs={12} md={6} sx={{ backgroundColor: "#E6F2FF" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%", // Full viewport height
                                // White background with some transparency
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative", // Set position relative for the inner box
                                    padding: { xs: "1.5rem", sm: "3rem" },

                                    borderRadius: "8px", // Optional: rounded corners
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    textAlign: "", // Center the text
                                    overflow: "hidden", // Prevent overflow
                                }}
                            >
                                <style>
                                    {`
                @media screen and (max-width: 900px) {
                  .contact-image {
                     display: none; /* Hide the image on screens smaller than 900px */
                  }
              }`}
                                </style>
                                <img
                                    src={contactUsformBg}
                                    className="contact-image"
                                    alt="Vector"
                                    style={{
                                        width: "100%", // Adjust width as needed
                                        height: "auto", // Maintain aspect ratio
                                        maxWidth: "400px", // Optional: limit the max width
                                        position: "absolute", // Position the image absolutely

                                        zIndex: 1, // Ensure the image is behind the text
                                        maxHeight: "300px",
                                    }}
                                />
                                <Box>
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
                                            Lets Talk
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: "30px",
                                            fontFamily: "Exo",
                                            fontWeight: 700,
                                            color: "black",
                                        }}
                                    >
                                        Ready to Build Something ?
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: "17px",
                                            fontFamily: "Roboto",
                                            fontWeight: 400,
                                            color: "#6A6A6A",
                                            marginTop: "1rem",
                                        }}
                                    >
                                        Looking for a reliable construction company near you? Let’s connect and make your vision a reality.
                                        📞 Call us | 📧 Email us | 📍 Visit our Indore office
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ maxWidth: 600, margin: "0 auto", p: 3 }}>
                            <Typography
                                variant="h5"
                                align="center"
                                sx={{ mb: 3, fontWeight: "bold" }}
                            >
                                Request A Quote
                            </Typography>

                            <Grid container spacing={3}>
                                {[
                                    { label: "Name", name: "name" },
                                    { label: "Phone Number", name: "phoneNumber" },
                                    { label: "Email Address", name: "email" },
                                    { label: "Work Inquiries", name: "workInquiries" },
                                ].map((field, index) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <WhiteBorderTextField
                                            fullWidth
                                            label={field.label}
                                            variant="outlined"
                                            name={field.name}
                                            value={formValues[field.name]}
                                            onChange={handleChange}
                                            error={!!errors[field.name]}
                                            helperText={errors[field.name]}
                                        />
                                    </Grid>
                                ))}
                                <Grid item xs={12}>
                                    <WhiteBorderTextField
                                        fullWidth
                                        label="Project Details"
                                        variant="outlined"
                                        multiline
                                        rows={3}
                                        name="projectDetails"
                                        value={formValues.projectDetails}
                                        onChange={handleChange}
                                        error={!!errors.projectDetails}
                                        helperText={errors.projectDetails}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Button
                                        fullWidth
                                        sx={{
                                            backgroundColor: "#001f54",
                                            color: "white",
                                            height: "50px",
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box
                sx={{
                    backgroundColor: "#002D62",
                    padding: { xs: "3rem", sm: "5rem" },
                    height: "100%",
                }}
            >
                <Grid container spacing={3} justifyContent="center">
                    {contactInfo.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    border: "1px solid white",
                                    borderRadius: "8px",
                                    textAlign: "center",
                                    padding: "2rem",
                                    color: "white",
                                    height: "170px",
                                }}
                            >
                                <img
                                    src={item.icon}
                                    alt="Contact icon"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                <Typography variant="h6" sx={{ margin: "1rem 0" }}>
                                    {item.heading}
                                </Typography>
                                <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
                                    {item.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ height: "400px", padding: "2rem" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9176750978627!2d75.82570117455377!3d22.694108379405453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc35baca5d35%3A0xb34346cd9c1bbcb!2sPhooti%20Kothi%20Cir%2C%20Indore%2C%20Madhya%20Pradesh%20452009!5e0!3m2!1sen!2sin!4v1736854922457!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
        </>
    );
};

export default ContactUsPage;

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
