import {
    Card,
    Box,
    Button,
    CardContent,
    Grid,
    Paper,
    TextField,
    Typography,
    styled,
} from "@mui/material";
import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import contactImg from "../../../Assets/Home/ContactUs/ContactImg.webp";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InfoCard = ({ icon: Icon, title, content }) => (
    <Card
        sx={{
            marginBottom: 2,
            boxShadow: "none",
            padding: 2,
            display: "flex",
            flexWrap: 'wrap',
            alignItems: "center",
            border: "1px solid #e0e0e0",
            borderRadius: 2,
            width: '100%'
        }}
    >
        <Box
            sx={{
                marginRight: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Icon sx={{ fontSize: 30, width: '35px', height: '35px' }} />
        </Box>
        <Box >
            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1rem", color: "#333" }}
            >
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: '14px' }}>
                {content}
            </Typography>
        </Box>
    </Card>
);


const contactUsData = {
    contactDetails: [
        {
            icon: EmailOutlinedIcon,
            title: "Email",
            content: "jayojayassociates@gmail.com",
        },
        {
            icon: PhoneOutlinedIcon,
            title: "Phone",
            content: "+91-9669046539",
        },
        {
            icon: LocationOnOutlinedIcon,
            title: "Address",
            content: "202 ShreeJi Business Pakr",
        },
        {
            icon: AccessTimeOutlinedIcon,
            title: "Working Hours",
            content: "Mon-Fri: 10 AM - 6 PM",
        },
    ],
};

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

export const Contactus = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialErrors);


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
        const newErrors = {};
        let hasError = false;

        Object.entries(formValues).forEach(([key, value]) => {
            if (!value) {
                newErrors[key] = "This field cannot be empty";
                hasError = true;
            }
        });

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        const serviceId = "service_jvdrkqf";
        const templateId = "template_1tyns4t";
        const publicKey = "HUq1j9bJ5wDASRHPl";

        const detailsParams = {
            from_name: formValues.name,
            from_phone: formValues.phoneNumber,
            from_email: formValues.email,
            from_regarding: formValues.workInquiries,
            message: formValues.projectDetails,
        };

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
                    flexGrow: 1,
                    padding: 3,
                    background: "#f9f9f9",
                }}
            >
                <Grid container spacing={3} >
                    {/* Left Section */}
                    <Grid
                        item
                        xs={12}
                        md={4}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box
                            sx={{
                                width: "90%",
                                height: "90%",
                                borderRadius: "10px",
                            }}
                        >
                            <img
                                src={contactImg}
                                alt="bg img"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: "10px",
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Center Section */}
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                backgroundColor: {
                                    xs: "transparent",
                                    sm: "transparent",
                                    md: "#f9f9f9",
                                },
                                borderRadius: 1,
                                padding: 3,
                                height: "100%",
                            }}
                        >
                            {contactUsData.contactDetails.map((detail, index) => (
                                <InfoCard
                                    key={index}
                                    icon={detail.icon}
                                    title={detail.title}
                                    content={detail.content}
                                />
                            ))}
                        </Box>
                    </Grid>

                    {/* Right Section */}
                    <Grid item xs={12} md={5}>
                        <Box sx={{ padding: 2 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
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
                                    sx={{ fontSize: "16px", fontWeight: 400, fontFamily: "Exo", color: "#002D62" }}
                                >
                                    Lets Talk
                                </Typography>
                            </Box>
                            <Typography
                                mt={2}
                                variant="h4"
                                gutterBottom
                                sx={{ fontFamily: "Exo", fontSize: "28px", fontWeight: 700 }}
                            >
                                Have a Project in Mind? <br /> Contact Us.
                            </Typography>
                            <Typography
                                variant="body1"
                                gutterBottom
                                sx={{
                                    fontFamily: "Roboto",
                                    fontSize: "15px",
                                    fontWeight: 400,
                                    color: "#6A6A6A",
                                }}
                            >
                                {contactUsData.description}
                            </Typography>

                            <Box
                                sx={{
                                    backgroundColor: "#f9f9f9",
                                    borderRadius: 2,
                                    marginTop: "1rem",
                                }}
                            >
                                <Grid container spacing={3}>
                                    {/* Name */}
                                    <Grid item xs={12} sm={6}>
                                        <WhiteBorderTextField
                                            fullWidth
                                            label="Name"
                                            variant="outlined"
                                            name="name"
                                            value={formValues.name}
                                            onChange={handleChange}
                                            error={!!errors.name}
                                            helperText={errors.name}
                                        />
                                    </Grid>
                                    {/* Phone Number */}
                                    <Grid item xs={12} sm={6}>
                                        <WhiteBorderTextField
                                            fullWidth
                                            label="Phone Number"
                                            variant="outlined"
                                            name="phoneNumber"
                                            value={formValues.phoneNumber}
                                            onChange={(e) => {
                                                const input = e.target.value;
                                                if (/^\d{0,10}$/.test(input)) {
                                                    handleChange(e);
                                                }
                                            }}
                                            error={!!errors.phoneNumber}
                                            helperText={errors.phoneNumber}
                                            inputProps={{ maxLength: 10 }}
                                        />
                                    </Grid>

                                    {/* Email Address */}
                                    <Grid item xs={12} sm={6}>
                                        <WhiteBorderTextField
                                            fullWidth
                                            label="Email Address"
                                            variant="outlined"
                                            name="email"
                                            value={formValues.email}
                                            onChange={(e) => {
                                                const input = e.target.value;
                                                handleChange(e); // Always update the state
                                            }}
                                            onBlur={(e) => {
                                                const input = e.target.value;
                                                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                                                if (input && !emailPattern.test(input)) {
                                                    setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
                                                } else {
                                                    setErrors((prev) => ({ ...prev, email: "" }));
                                                }
                                            }}
                                            error={!!errors.email}
                                            helperText={errors.email}
                                        />

                                    </Grid>

                                    {/* Work Inquiries */}
                                    <Grid item xs={12} sm={6}>
                                        <WhiteBorderTextField
                                            fullWidth
                                            label="Work Inquiries"
                                            variant="outlined"
                                            name="workInquiries"
                                            value={formValues.workInquiries}
                                            onChange={handleChange}
                                            error={!!errors.workInquiries}
                                            helperText={errors.workInquiries}
                                        />
                                    </Grid>
                                    {/* Project Details */}
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
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Button
                                            fullWidth
                                            sx={{
                                                backgroundColor: "#002D62",
                                                color: "white",
                                                height: "50px",

                                                fontSize: "16px",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                            }}
                                            onClick={handleSubmit}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

const WhiteBorderTextField = styled(TextField)`
    & label.Mui-focused {
        color: #002d62;
    }
    & .MuiOutlinedInput-root {
        & fieldset {
            border: none;
        }
        &.Mui-focused fieldset {
            border: 1px solid #002d62;
        }
        background-color: white;
    }
    & .MuiOutlinedInput-input {
        background-color: white;
    }
`;
