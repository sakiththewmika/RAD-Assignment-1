import React, { useContext, useState } from 'react';
import { AppBar, Button, Grid, Box, Drawer, IconButton, List, ListItem, ListItemText, Typography, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { WbSunny, NightsStay } from '@mui/icons-material';
import { styled } from '@mui/system';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

// Custom styles using styled from @mui/system
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.appBar.main,
    color: theme.palette.appBar.contrastText,
    height: '80px',
    position: 'fixed',
    padding: '0 16px',
}));

const NavLinkStyled = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.common.white,
    margin: '0 15px',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const Menu = styled(Box)(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.appBar.main,
}));

const MenuLink = styled(Link)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1),
    textDecoration: 'none',
    color: 'black',
    margin: '5px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        transform: 'scale(1.05)',
    },
}));

const LogoImage = styled('img')({
    height: '60px',
    margin: '10px 0',
});

const CustomMenuIcon = styled(MenuIcon)({
    fontSize: '40px', // Custom size
});

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleThemeToggle = (event) => {
        toggleTheme();
    };

    const drawer = (
        <Menu
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
            role="presentation"
        >
            <List>
                <ListItem>
                    <MenuLink to={'/'}>
                        Home
                    </MenuLink>
                </ListItem>
                <ListItem>
                    <MenuLink to={'/about'}>
                        About
                    </MenuLink>
                </ListItem>
                <ListItem>
                    <MenuLink to={'/contact'}>
                        Contact Us
                    </MenuLink>
                </ListItem>
                <ListItem>
                    <Box display="flex" alignItems="center">
                        <Typography variant="body1">
                            {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                        </Typography>
                        <Switch checked={theme === 'dark'} onChange={handleThemeToggle} />
                    </Box>
                </ListItem>
            </List>
        </Menu>
    );

    return (
        <StyledAppBar>
            <Grid container alignItems="center" height={'80px'}>
                <Grid item xs={6} md={4} display="flex" alignItems="center">
                    <LogoImage src="/icon.png" alt="ER Logo" />
                    <Typography variant="h5" sx={{ display: { xs: 'none', md: 'block' }, marginLeft: '5px', marginTop: '7px' }}>
                        Emerald Rentals
                    </Typography>
                </Grid>
                <Grid item xs={6} md={9} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                <Box display="flex" justifyContent="flex-end" alignItems="center" marginLeft="20px">
                        {theme === 'light' ? <WbSunny /> : <NightsStay />}
                        <Switch checked={theme === 'dark'} onChange={handleThemeToggle} />
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                    >
                        <CustomMenuIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12} md={8} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                    <Box display="flex" justifyContent="flex-end" alignItems="center">
                        <NavLinkStyled to="/">Home</NavLinkStyled>
                        <NavLinkStyled to="/about">About</NavLinkStyled>
                        <NavLinkStyled to="/contact">Contact Us</NavLinkStyled>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" alignItems="center" marginLeft="20px">
                        {theme === 'light' ? <WbSunny /> : <NightsStay />}
                        <Switch checked={theme === 'dark'} onChange={handleThemeToggle} />
                    </Box>
                </Grid>
            </Grid>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </StyledAppBar>
    );
};

export default NavBar;





