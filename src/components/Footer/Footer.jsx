
import React from 'react';
import './Footer.css';
import { Box, Typography, List, ListItem, ListItemIcon, Grid, Divider } from '@mui/material';
import Logo from '../../Assets/Footer/logo.webp';
import FooterIcon from '../../Assets/Footer/FooterIcon.webp';
import fb from '../../Assets/Footer/facebook.webp';
import tw from '../../Assets/Footer/twitter.webp';
import ln from '../../Assets/Footer/linkedin.webp';
import insta from '../../Assets/Footer/instagram.webp';
import { useNavigate } from 'react-router-dom';

const Footer = ({ scrollToSection, refs }) => {
    const navigate = useNavigate();

    return (
        <footer className="App-footer">
            <Grid container spacing={3}>

                <Grid item xs={12} sm={6} md={3}>
                    <Box>
                        <img src={Logo} alt="Company Logo" className="footer-logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")} />
                        <Typography sx={{ fontFamily: 'Roboto' }} className="footer-description">
                            Jayojay Construction is a leading construction company based in Indore, committed to delivering high-quality residential, commercial, and infrastructure projects
                        </Typography>
                    </Box>
                </Grid>

                {/* Section 2: Quick Links */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box>
                        <Typography sx={{ fontFamily: 'Exo', fontWeight: 700, fontSize: '20px' }}>Quick Links</Typography>
                        <List>
                            {['About Us', 'How we Work', 'Testimonials', 'Projects', 'Contact Us'].map((text) => (
                                <ListItem key={text} className="footer-list-item">
                                    <ListItemIcon sx={{ minWidth: '0px', marginRight: '5px' }}>
                                        <img src={FooterIcon} alt="List Icon" width="10px" height="10px" />
                                    </ListItemIcon>
                                    <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '15px', color: 'white' }}>{text}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>

                {/* Section 3: Our Services */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box>
                        <Typography sx={{ fontFamily: 'Exo', fontWeight: 700, fontSize: '20px' }}>Our Services</Typography>
                        <List>
                            {['Project Consultant', 'Turn Key Construction', 'Interior', 'Project Management', 'Architecture', 'Evaluation', 'Real Estate'].map((text) => (
                                <ListItem key={text} className="footer-list-item">
                                    <ListItemIcon sx={{ minWidth: '0px', marginRight: '5px' }}>
                                        <img src={FooterIcon} alt="List Icon" width="10px" height="10px" /> {/* Use <img> tag */}

                                    </ListItemIcon>
                                    <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '15px' }}>{text}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>

                {/* Section 4: Working Hours */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box>
                        <Typography sx={{ fontFamily: 'Exo', fontWeight: 700, fontSize: '20px', marginBottom: '1rem' }}>Working Hours</Typography>
                        {['Monday to Saturday: 09.00 AM – 06.00 PM'].map((text) => (
                            <Typography key={text} sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '14px', marginBottom: '1rem' }}> {/* Add key prop */}
                                {text} {/* Display the correct text */}
                            </Typography>
                        ))}
                    </Box>
                </Grid>
            </Grid>

            {/* Divider Line */}
            <Divider />
            <Box className="footer-divider"></Box>

            {/* Footer Bottom */}
            <Box className="footer-bottom" >
                <Typography variant="body2" className='allrights' >
                    © Copyright JAYOJAY 2024. All rights reserved.
                </Typography>
                <Box display="flex" justifyContent="center" gap={2}>
                    <span className="social-icon">
                        <img src={tw} alt="Facebook" width="12px" height="16px" />
                    </span>
                    {/* <span className="social-icon">
                        <img src={fb} alt="Twitter" width="12px" height="16px" />
                    </span> */}
                    <span className="social-icon">
                        <img src={ln} alt="LinkedIn" width="12px" height="16px" />
                    </span>
                    <span className="social-icon" onClick={() => window.open("https://www.instagram.com/jayojayassociates?igsh=MWE5ajdlbjV4emp4ZA%3D%3D&utm_source=qr", "_blank")}>
                        <img src={insta} alt="Instagram" width="12px" height="16px" />
                    </span>
                </Box>
                <Box className='copyright' gap={3} >
                    <Typography variant="body2" component="span" className="footer-link">
                        Privacy Policy
                    </Typography>

                    <Typography variant="body2" component="span" className="footer-link">
                        Terms & Conditions
                    </Typography>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;
