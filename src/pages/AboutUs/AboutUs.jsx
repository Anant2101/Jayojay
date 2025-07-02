
import React from "react";
import {
    Box,
    Grid,
    Typography,

    Card,
    CardContent,
    Breadcrumbs,
    Link,
    Avatar,
    Divider,
    CardMedia,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SEO from "../../components/SEO/Seo";



// Assets
import logo from '../../Assets/Footer/logo.webp';
import aboutHeroBg from "../../Assets/Aboutus/aboutHeroBg.webp";
import contactImg from "../../Assets/Aboutus/about2.webp";
import firstIcon from "../../Assets/Aboutus/1.webp";
import secondIcon from "../../Assets/Aboutus/2.webp";
import thirdcon from "../../Assets/Aboutus/3.webp";

// Data
const stats = [
    { number: "200+", label: "Projects Delivered" },
    { number: "150+", label: "Satisfied Clients" },
    { number: "35+", label: "Successful Ventures" },
];

const servicesData = [
    {
        icon: firstIcon,
        heading: "Accurate Budget Planning",
        description: "Our estimation process ensures a clear understanding of costs, helping you plan and allocate resources effectively.",
    },
    {
        icon: secondIcon,
        heading: "Customized Cost Breakdown",
        description: "We provide a detailed and transparent breakdown of expenses tailored to the specific needs of your project.",
    },
    {
        icon: thirdcon,
        heading: "Risk Assessment",
        description: "By identifying potential cost risks early, we help you optimize your budget and prevent unexpected financial challenges.",
    },
];

const ceoData = [
    {
        id: 1,
        name: "Er. Pranav Bhondwe",
        designation: "Co-Founder",
        description: "Lorem ipsum dolor sit amet consectetur. Diam dignissim ac lectus pulvinar nunc tortor tempus. Eget a sit ornare sed dignissim auctor. Nulla diam pellentesque viverra a a vel id. Urna in cursus pharetra in suscipit diam.",
    },
    {
        id: 2,
        name: "Er. Naveen Vaishnav",
        designation: "Co-Founder",
        description: "Lorem ipsum dolor sit amet consectetur. Diam dignissim ac lectus pulvinar nunc tortor tempus. Eget a sit ornare sed dignissim auctor. Nulla diam pellentesque viverra a a vel id. Urna in cursus pharetra in suscipit diam.",
    },
    {
        id: 3,
        name: "Er. Nikhil Bhargav",
        designation: "Co-Founder",
        description: "Lorem ipsum dolor sit amet consectetur. Diam dignissim ac lectus pulvinar nunc tortor tempus. Eget a sit ornare sed dignissim auctor. Nulla diam pellentesque viverra a a vel id. Urna in cursus pharetra in suscipit diam.",
    },
];

// Reusable Components
const SectionHeading = ({ title, subtitle, description, color = "#002D62" }) => (
    <Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <Box sx={{ width: 30, height: 2, backgroundColor: color, marginRight: 1 }} />
            <Typography variant="h6" sx={{ color, fontSize: 18, fontFamily: "Exo", fontWeight: 600 }}>
                {title}
            </Typography>
        </Box>
        <Typography variant="h4" sx={{ fontSize: 45, fontFamily: "Exo", fontWeight: 700 }}>
            {subtitle}
        </Typography>
        {description && (
            <Typography variant="body1" sx={{ fontSize: 16, fontFamily: "Roboto", fontWeight: 400, color: "#6A6A6A", mt: 2, textAlign: 'justify' }}>
                {description}
            </Typography>
        )}
    </Box>
);

const StatCard = ({ number, label }) => (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ flex: 1, minWidth: "150px" }}>
        <Typography sx={{ fontSize: "35px", fontFamily: "Exo", fontWeight: 700 }}>{number}</Typography>
        <Typography sx={{ fontSize: "18px", fontFamily: "Exo", fontWeight: 600 }}>{label}</Typography>
    </Box>
);

const ServiceCard = ({ icon, heading, description }) => (
    <Card variant="outlined" sx={{ width: "100%", height: "100%", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0px 2px 8px rgba(0,0,0,0.1)" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Box component="img" src={icon} alt={`${heading} icon`} sx={{ width: 50, height: 50, marginBottom: 2 }} />
            <Typography variant="h6" sx={{ fontSize: 24, fontFamily: "Exo", fontWeight: 700 }}>{heading}</Typography>
            <Typography variant="body2" sx={{ fontSize: 15, fontFamily: "Roboto", fontWeight: 400, mt: 1, color: "#6A6A6A" }}>
                {description}
            </Typography>
        </CardContent>
    </Card>
);

const CEOCard = ({ name, designation, description, image }) => (
    <>

        <Card sx={{ backgroundColor: "#fff", color: "#000", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: '1rem' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw3aRsabOpnXP3kgJ_u9q3Mt&ust=1750850056234000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDT-O72iY4DFQAAAAAdAAAAABAE"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 15, fontFamily: "Roboto", color: "#6A6A6A" }}>
                    {description}
                </Typography>
            </CardContent>

        </Card>

    </>

);

// Main Component
const AboutUs = () => {

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Jayojay Associates",
        "url": "https://jayojay-anants-projects.vercel.app/",
        "logo": logo,
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
                keywords="construction company, The Jayojay Difference, affordable construction services, turnkey construction, interior, Architecture, project management"
                structuredData={structuredData}
            />

            {/* Hero Section */}
            <Box sx={{ position: "relative", height: 300, backgroundImage: `url(${aboutHeroBg})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center", color: "white", textAlign: "center" }}>
                <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.3)" }} />
                <Box sx={{ position: "relative", zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ fontFamily: "Exo", fontWeight: 700, fontSize: "40px", marginBottom: "1rem" }}>About Us</Typography>
                    <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", marginBottom: "8px", backgroundColor: '#002D62', height: '50px', width: '190px', borderRadius: '5px' }}>
                        <Link href="/" sx={{ display: "flex", alignItems: "center", color: "white", textDecoration: "none" }}>
                            <HomeIcon />
                            <span style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: "700", marginLeft: '5px' }}>Home</span>
                        </Link>
                        <Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "17px" }}>About Us</Typography>
                    </Breadcrumbs>
                </Box>
            </Box>

            {/* About Section */}
            <Box sx={{ backgroundColor: "#f8f9fa", height: "100%" }}>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box component="img" src={contactImg} alt="construction" sx={{ objectFit: "contain", width: { xs: "80%", sm: "80%" }, marginTop: { xs: "2rem", sm: '0px' }, height: { xs: "100%", sm: "80%" } }} />
                    </Grid>
                    <Grid item xs={12} md={6} display={"flex"}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: { xs: "0px 3rem 3rem 3rem", sm: "5px 3rem 3rem 3rem", md: "3rem" } }}>
                            <SectionHeading title="About us" subtitle="Creating Innovative Spaces That Inspire and Endure" description="At Jayojay Constructions, we don’t just build structures—we create legacies. Backed by years of expertise and an unwavering commitment to excellence, we are a name synonymous with quality, trust, and innovation in the construction industry. From residential marvels to commercial landmarks, we specialize in delivering projects that combine world-class craftsmanship with modern design, tailored to your unique vision." />
                            <Grid container spacing={2} mt={3}>
                                {["Designing", "Construction", "Renovation", "Real Estate"].map((text, index) => (
                                    <Grid item xs={6} sm={6} key={index}>
                                        <Box display="flex" alignItems="center">
                                            <CheckCircleOutlineIcon sx={{ color: "#002D62", marginRight: "0.5rem" }} />
                                            <Typography sx={{ fontFamily: "Exo", fontWeight: 600, fontSize: "17px" }}>{text}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Stats Section */}
            <Box sx={{ backgroundColor: "#002855", color: "#fff", padding: "1rem 2rem" }}>
                <Grid container alignItems="center" justifyContent={{ xs: "space-around", sm: "center" }} gap={"20px"}>
                    {stats.map((stat, index) => (
                        <React.Fragment key={index}>
                            <StatCard number={stat.number} label={stat.label} />
                            {index < stats.length - 1 && (
                                <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "none", md: "block" }, backgroundColor: "rgba(255, 255, 255, 0.2)", height: "70px" }} />
                            )}
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>

            {/* Services Section */}
            <Box sx={{ padding: { xs: "3rem", sm: "3rem", md: "4rem" } }}>
                <SectionHeading title="What we do" subtitle="Fully Integrated Construction Services." description="Jayojay provides expert construction and pre-construction services, precisely tailored to each client's individual needs. Our project consultation services offer strategic guidance from concept to completion. We execute turnkey construction solutions, manage projects flawlessly, and integrate vital services, including interior design, architecture, and real estate valuation. We prioritize transparent communication, collaborative partnerships, and efficient workflows, enabling informed choices and delivering exceptional, cost-effective outcomes." />
                <Grid container spacing={4} justifyContent="left" sx={{ padding: { sm: "0px", md: "0rem", xl: "1rem" }, display: "flex", flexWrap: "wrap", marginTop: '1rem' }}>
                    {servicesData.map((service, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <ServiceCard icon={service.icon} heading={service.heading} description={service.description} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* CEO Section */}
            <Box sx={{ padding: "3rem", backgroundColor: "#002D62", color: "#fff" }}>
                <Typography variant="h4" align="left" gutterBottom>Our CEO's</Typography>
                <Typography variant="body1" align="left" sx={{ marginBottom: "20px", textAlign: 'justify' }}>
                    Lorem ipsum dolor sit amet consectetur. Diam dignissim ac lectus pulvinar nunc tortor tempus. Eget a sit ornare sed dignissim auctor. Nulla diam pellentesque viverra a a vel id. Urna in cursus pharetra in suscipit diam.
                </Typography>
                <Grid container spacing={4} justifyContent="center" sx={{ sm: '2rem' }}>
                    {ceoData.map((ceo) => (
                        <Grid item xs={12} sm={6} md={4} key={ceo.id}>
                            <CEOCard name={ceo.name} designation={ceo.designation} description={ceo.description} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div >
    );
};

export default AboutUs;