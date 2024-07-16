import React, { useContext, useState } from 'react';
import { AppBar, Button, Grid, Box, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { ThemeContext } from '../context/ThemeContext';

// Custom styles using styled from @mui/system
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.appBar.main,
    color: theme.palette.appBar.contrastText,
    height: '80px',
    position: 'fixed',
    padding: '0 16px',
}));

const NavLinkStyled = styled('a')(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.common.white,
    margin: '0 15px',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const DrawerButton = styled(Button)(({ theme }) => ({
    width: '100%',
    justifyContent: 'center',
    padding: theme.spacing(1),
    textTransform: 'inherit',
    color: 'black',
    backgroundColor: 'lightgray',
    '&:hover': {
        backgroundColor: 'light',
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

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
            role="presentation"
        >
            <List>
                <ListItem>
                    <DrawerButton component="a" href="#home">
                        Home
                    </DrawerButton>
                </ListItem>
                <ListItem>
                    <DrawerButton component="a" href="#about">
                        About
                    </DrawerButton>
                </ListItem>
                <ListItem>
                    <DrawerButton component="a" href="#contact">
                        Contact Us
                    </DrawerButton>
                </ListItem>
                <ListItem>
                    <DrawerButton onClick={toggleTheme}>
                        {theme === 'light' ? 'Dark' : 'Light'} Mode
                    </DrawerButton>
                </ListItem>
            </List>

        </Box>
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
                        <NavLinkStyled href="#home">Home</NavLinkStyled>
                        <NavLinkStyled href="#about">About</NavLinkStyled>
                        <NavLinkStyled href="#contact">Contact Us</NavLinkStyled>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" alignItems="center" marginLeft="20px">
                        <Button onClick={toggleTheme}>
                            {theme === 'light' ? 'Dark' : 'Light'} Mode
                        </Button>
                    </Box>
                </Grid>
                {/* <Grid item xs={6} md={2} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                    <Box display="flex" justifyContent="flex-end" alignItems="center">
                        <Button onClick={toggleTheme}>
                            {theme === 'light' ? 'Dark' : 'Light'} Mode
                        </Button>
                    </Box>
                </Grid> */}
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




