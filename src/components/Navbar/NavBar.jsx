import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../Assets/Navbar/logo.webp";

export const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/our-services' },
        { label: 'Projects', path: '/our-projects' },
    ];

    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: '#002D62' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src={Logo} alt="JayoJay Logo" width="150px" height="100%" style={{ cursor: "pointer" }}
                        onClick={() => navigate("/")} />
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, justifyContent: 'center', flexDirection: 'row' }}>
                        {menuItems.map(({ label, path }) => (
                            <Link key={label} to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Typography sx={{
                                    mx: 3, fontFamily: 'Exo', fontWeight: 600, fontSize: '19px', transition: "transform 0.4s",

                                }}>
                                    {label}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ display: { xs: 'block', sm: 'none', marginRight: '10px' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button
                        sx={{
                            display: { xs: 'none', sm: 'block' }, textAlign: 'center', fontFamily: 'Exo',
                            fontWeight: 700, width: '150px', borderRadius: '5px',
                            backgroundColor: 'white', color: '#002D62',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                                backgroundColor: '#E0E0E0',
                                color: '#003B8D',
                                transform: 'scale(1.01)',
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                            },
                        }}
                        color="inherit"
                        component={Link}
                        to="/contact-us"
                    >
                        Contact Us
                    </Button>
                </Toolbar>
            </AppBar>


            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Box sx={{ height: '5rem', backgroundColor: '#002D62', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ width: '110px', height: '100%' }}
                        />
                    </Box>
                    <List>
                        {menuItems.map(({ label, path }) => (
                            <ListItem button key={label} component={Link} to={path}>
                                <ListItemText sx={{ color: '#002D62', fontSize: '30px', fontFamily: 'Roboto' }} primary={label} />
                            </ListItem>
                        ))}
                        <ListItem button component={Link} to="/contact-us" onClick={toggleDrawer(false)}>
                            <ListItemText
                                sx={{ color: '#002D62', fontSize: '30px', fontFamily: 'Roboto' }}
                                primary="Contact Us"
                            />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};