import React, { useCallback, useEffect, useState } from 'react';

import { Link, NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DiamondIcon from "@mui/icons-material/Diamond"; 
import { IoDiamondOutline } from "react-icons/io5";

import NotificationIcon from './NotificationIcon';

import SparklesIcon from '@mui/icons-material/AutoAwesome';
//mui component
import {
    AppBar,
    Box,
    Stack,
    Drawer as MuiDrawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Avatar,
    Button,
    Grid,
    Toolbar,
    Typography,
    ListItemButton,
    Menu,
    Link as MuiLink,
    MenuItem,
    Modal,
    useTheme as useMuiTheme,
    Skeleton,
    LinearProgress,
    styled,
    useMediaQuery,
} from '@mui/material';

//mui icons
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import clikklepro from '../Assets/clikkleproj.png';
import { fileManager, sharedFile } from '../services/sidebarLinks';

//react component
import Image from '../components/Image';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//services
import { useTheme } from '../style/theme';
import { useMenu } from '../hooks/useMenu';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import SearchBar from './SearchBar';
import axios from 'axios';
import { useMessage } from './Header';
import { useUser } from '../hooks/Authorize';
import useModal from './../hooks/useModal';
import ActionIcon from './ActionIcon';
import { clearCookie, getCookie, setCookie } from '../utilities/cookies';
import { env, handleAxiosError } from '../utilities/function';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Feedback from './Feedback';
import MicrophoneIcon from './MicrophoneIcon';
import { Margin } from '@mui/icons-material';

const drawerWidth = 260;
const appsWidth = 54;
const miniDrawerWidth = 72;

const StyledButton = styled(Button)({
    border: '2px solid #3767B1', // Match the border color
    borderRadius: '8px', // Rounded corners
    color: '#3767B1', // Text and icon color
    padding: '8px 16px', // Adjust padding for a good fit
    fontSize: '13px', // Adjust font size
    textTransform: 'none', // Remove uppercase transformation
    display: 'flex',
    alignItems: 'center',
    gap: '8px', // Space between icon and text
    transition: 'all 0.3s ease', // Smooth transition for hover effect
    '&:hover': {
      backgroundColor: '#3767B1', // Keep background transparent on hover
      borderColor: '#2962FF', // Ensure border color stays on hover
      boxShadow: '0 0 10px rgba(41, 98, 255, 0.5)', // Glow effect
      color: '#ffff', // Change text color on hover if desired
    },
  });
  

const openedMixin = theme => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: theme.palette.background.default,
    borderRight: 'none',
});

const closedMixin = theme => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.background.default,
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    borderRight: 'none',
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,

    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export default function Navbar(props) {
    const { children } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [sidebarApps, setSidebarApps] = useState([
        // Example sidebar apps with CDN images
        { order: 1, name: 'Adds', url: 'https://ads.clikkle.com/', logo: 'https://cdn.clikkle.com/images/ads/logo/2023/ads.png' },
        { order: 2, name: 'Campapaigns', url: 'https://campaigns.clikkle.com/', logo: 'https://cdn.clikkle.com/images/campaigns/logo/2023/campaigns.png' },
        { order: 3, name: 'E sign', url: 'https://esign.clikkle.com/', logo: 'https://cdn.clikkle.com/images/e-sign/logo/2023/e-sign.png' },
        { order: 4, name: 'Files', url: 'https://files.clikkle.com/', logo: 'https://cdn.clikkle.com/images/files/logo/2023/files.png' },
        { order: 5, name: 'Host', url: 'https://host.clikkle.com/', logo: 'https://cdn.clikkle.com/images/host/logo/2023/host.png' },
        { order: 6, name: 'Launch', url: 'https://launch.clikkle.com/', logo: 'https://cdn.clikkle.com/images/launch/logo/2023/launch.png' },
        { order: 7, name: 'Cmail', url: 'https://mail.clikkle.com/', logo: 'https://cdn.clikkle.com/images/cmail/logo/2023/cmail.png' },
        { order: 8, name: 'Pitch', url: 'https://pitch.clikkle.com/', logo: 'https://cdn.clikkle.com/images/pitch/logo/2023/pitch.png' },
        { order: 9, name: 'Project', url: 'https://projects.clikkle.com/', logo: 'https://cdn.clikkle.com/images/projects/logo/2023/projects.png' },
        // Add more apps as needed
    ]);;
    const [isOrderChanged, setIsOrderChanged] = useState(false);
    const [editable, setEditable] = useState(false);
    const [user, setUser] = useState(null);
    const [collapseDrawer, setCollapseDrawer] = useState(true);
    const [drawerHover, setDrawerHover] = useState(false);
    const {
        modalState: feedbackState,
        openModal: openFeedback,
        closeModal: closeFeedback,
    } = useModal();
    const { showError, showResponse } = useMessage();
    const location = useLocation();
    const platformUser = useUser();
    const matches = useMediaQuery('(min-width:1024px)', { noSsr: true });

    const { toggleTheme, mode } = useTheme();
    const theme = useMuiTheme();

    // useMenu
    const {
        anchorEl: anchorElProfile,
        openMenu: openProfileMenu,
        closeMenu: closeProfileMenu,
    } = useMenu();

    const { anchorEl: anchorElApps, openMenu: openAppsMenu, closeMenu: closeAppsMenu } = useMenu();

    const {
        anchorEl: anchorElSettings,
        openMenu: openSettingsMenu,
        closeMenu: closeSettingsMenu,
    } = useMenu();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerOpen = () => {
        setCollapseDrawer(!collapseDrawer);
    };
    const navigate = useNavigate();

    const onDragEnd = result => {
        const { source, destination } = result;

        if (!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index)
            return;

        setIsOrderChanged(true);

        const draggingJob = sidebarApps[source.index];
        sidebarApps.splice(source.index, 1);

        sidebarApps.splice(destination.index, 0, draggingJob);
        setSidebarApps([...sidebarApps]);
    };

    const getProfile = useCallback(async () => {
        const role = getCookie('role');
        const accessToken = getCookie('accessToken');

        if (!(accessToken && role)) return;

        try {
            const response = await axios.get(`/${role}/profile`, {
                baseURL: env('AUTHENTICATION_SERVER'),
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            const user = response.data.user;
            setUser(user);
        } catch (err) {
            console.log(err);
        }
    }, [setUser]); // fetching user to get its personalize settings

    const getPlatforms = useCallback(async () => {
        try {
            const response = await axios.get('/platforms?sortBy=name&direction=1', {
                baseURL: env('AUTHENTICATION_SERVER'),
            });

            const { success, errors, platforms } = response.data;

            if (!success) return showError(errors);

            const SidebarApps = platforms?.filter(platform => platform.slug !== 'e-sign'); // Platform to exclude from list

            SidebarApps.forEach((app, i) => (app.order = i + 1));

            const arrangedOrder = [];
            user?.personalize?.appsOrder.forEach(order => {
                SidebarApps.forEach((app, i) => {
                    if (order === app.order) {
                        arrangedOrder.push(app);
                        SidebarApps.splice(i, 1);
                    }
                });
            });

            if (arrangedOrder.length) setSidebarApps([...arrangedOrder, ...SidebarApps]);
            else setSidebarApps(SidebarApps);
        } catch (e) {
            console.log(e);
        }
    }, [user, showError]);

    const saveOrder = async () => {
        const accessToken = getCookie('accessToken');
        const appsOrder = sidebarApps.map(app => app.order);

        try {
            const response = await axios.patch(
                '/user/personalize',
                { appsOrder },
                {
                    baseURL: env('AUTHENTICATION_SERVER'),
                    headers: { Authorization: `Bearer ${accessToken}` },
                }
            );

            const { success, errors } = response.data;

            if (!success) return showError(errors);

            setCookie('side_apps_order', appsOrder);
            showResponse('Setting updated');
        } catch (e) {
            handleAxiosError(e, showError);
        } finally {
            setIsOrderChanged(false);
        }
    };

    

    const signOut = () => {
        console.log("signoutfunctioned called")
        clearCookie('accessToken');
        clearCookie('role');
        clearCookie('setupCompleted');
        console.log('User signed out. Redirecting to login...');
        const redirectTo =
            env('AUTHENTICATION_CLIENT') + '/login?redirectto=' + encodeURIComponent(env('DOMAIN'));
        window.location.replace(redirectTo);
    };

    const [anchorEl, setAnchorEl] = useState(null);  // State to manage dropdown open/close
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);  // Open the dropdown
    };
  
    const handleOrganisation = () => {
        navigate('Neworganisation')  // Close the dropdown
    };

   
  
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleViewOrganizations = () => {
        navigate('/organizations'); // Navigate to the OrganizationList
        handleClose(); // Close the menu after clicking
    };  
    const handleClose = () => {
        setAnchorEl(null); // This will close the menu
      };

     
      const organizations = [
        { id: 1, name: 'Clikkle Technologies', logo: 'https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.svg' },
        { id: 2, name: 'Tech Corp', logo: 'https://example.com/images/techcorp/logo.png' },
        { id: 3, name: 'InnovateX', logo: 'https://example.com/images/innovatex/logo.png' },
    ]; // Example organizations, fetch dynamically from backend if needed
      // Default organization
      
     // For navigation
     const [selectedOrganization, setSelectedOrganization] = useState(organizations[0].name);
     const [selectedOrgLogo, setSelectedOrgLogo] = useState(organizations[0].logo);
    
    
     const handleSelectOrganization = (name, logo) => {
        setSelectedOrganization(name);
        setSelectedOrgLogo(logo);
        handleClose();
      };
    

    const checking =()=>{
        console.log("Sign out function called");
        clearCookie('accessToken');
        clearCookie('role');
        clearCookie('setupCompleted');
        
        console.log('User signed out. Redirecting to login...');
        
        const isDevelopment = process.env.NODE_ENV === 'development'; // Check if in development mode
        const clientUrl = isDevelopment ? process.env.REACT_APP_DEVELOPMENT_AUTHENTICATION_CLIENT : process.env.REACT_APP_PRODUCTION_AUTHENTICATION_CLIENT;
        const domainUrl = isDevelopment ? process.env.REACT_APP_DEVELOPMENT_DOMAIN : process.env.REACT_APP_PRODUCTION_DOMAIN;
        console.log('Client URL:', clientUrl);
        console.log('Domain URL:', domainUrl);
        const redirectTo =
            `${clientUrl}/login?redirectto=${encodeURIComponent(domainUrl)}`;
        
        console.log('Redirect URL:', redirectTo);
        window.location.href = redirectTo;

    }

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname, location.hash]);

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    useEffect(() => {
        user && getPlatforms();
    }, [user, getPlatforms]);

    const drawer = (
        <Box minHeight='100dvh' color='text.secondary' display='flex' flexDirection='column'>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                position='relative'
                component={Link}
                to='/'
                sx={{ textDecoration: 'none', color: 'text.primary', py: 1 }}>
                <Image cdn='projects/logo/2023/projects-text.png' sx={{ height: '50px' }} />
                <Typography
                    color='text.secondary'
                    variant='body2'
                    fontWeight='bold'
                    sx={{ position: 'absolute', bottom: 2, left: '27%' }}>
                    Beta
                </Typography>
            </Box>

            <Box sx={{ overflowY: 'auto', height: 'calc(100dvh - 90px)', flexGrow: 1 }}>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                borderRadius: '8px',
                color: '#B0B0B0', // Gray text color
            }}
        >
            {/* Avatar */}
            <Avatar 
                alt={selectedOrganization} 
                src={selectedOrgLogo} // Dynamically set the logo based on selected organization
                sx={{ backgroundColor: 'white', height: '32px', width: '32px', marginRight: '12px', marginLeft: '14px' }} 
            />

            {/* Company Name */}
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                {selectedOrganization} {/* Display the selected organization here */}
            </Typography>

            {/* Dropdown Icon */}
            <IconButton
                size="small"
                sx={{ color: '#B0B0B0', padding: '0', marginLeft: '4px' }}
                onClick={handleClick}  // Trigger dropdown on click
            >
                <ArrowDropDownIcon />
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        backgroundColor: '#1c1c1c', // Same dark background as the header
                        color: '#B0B0B0', // Gray text color for the dropdown items
                    },
                }}
            >
                {/* Loop through organizations */}
                {organizations.map((org) => (
                    <MenuItem
                        key={org.id}
                        onClick={() => handleSelectOrganization(org.name, org.logo)} // Set the selected organization
                        sx={{ fontSize: '14px', padding: '10px' }}
                    >
                        {org.name}
                    </MenuItem>
                ))}

                {/* Divider and "Create Organization" option */}
                <MenuItem
                    onClick={() => {
                        handleOrganisation(); // Redirect to create organization page
                        handleClose(); // Close the menu after clicking
                    }}
                    sx={{ fontSize: '14px', padding: '10px', fontWeight: 'bold' }}
                >
                    Create Organization
                </MenuItem>

                {/* New "View Organizations" option */}
                <Button sx={{ color: 'white' }} href="/listorganization">
          Organizations
        </Button>
            </Menu>
        </Box>

                <List sx={{ px: 3 }}>
                    {fileManager.map(link => (
                        <NavLink
                            to={link.to}
                            key={link.name}
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            {({ isActive }) => (
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={isActive}
                                        disableRipple
                                        disableTouchRipple
                                        variant='sidebarButton'>
                                        <ListItemIcon
                                            sx={{
                                                minWidth: '35px',
                                                color: 'text.secondary',
                                            }}>
                                            {link.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={link.name} />
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </NavLink>
                    ))}
                </List>
                <Divider variant='middle' />
                <Typography variant='body2' pl={3} mt={1.5} fontSize='14px' fontWeight={500}>
                    Your work
                </Typography>
                <List sx={{ px: 3 }}>
                    {sharedFile.map(link => (
                        <NavLink
                            to={link.to}
                            key={link.name}
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            {({ isActive }) => (
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={isActive}
                                        disableRipple
                                        disableTouchRipple
                                        variant='sidebarButton'>
                                        <ListItemIcon
                                            sx={{
                                                minWidth: '35px',
                                                color: 'text.secondary',
                                            }}>
                                            {link.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={link.name} />
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </NavLink>
                    ))}
                </List>
            </Box>

            <Box>
                <Divider variant='middle' />
                <Typography variant='body2' pl={3} mt={1.5} fontSize='14px' fontWeight={500}>
                    Storage
                </Typography>

                <Box px={3} pb={3}>
                    <LinearProgress
                        variant='determinate'
                        value={20}
                        color='primary'
                        sx={{ borderRadius: '2px', mt: 1 }}
                    />
                    <Typography variant='caption' component='div' mt={1} color='primary.main'>
                        1 GB used of 5 GB
                    </Typography>
                    <Button
                        variant='contained'
                        color='primary'
                        startIcon={<CloudOutlinedIcon fontSize='small' />}
                        sx={{ mt: 1, color: 'white' }}
                        href={env('MY_ACCOUNT')}
                        fullWidth>
                        Upgrade storage
                    </Button>
                </Box>
                <Divider variant='middle' sx={{ display: { xs: 'block', sm: 'none' } }} />
                <List sx={{ px: 1, display: { xs: 'block', sm: 'none' } }}>
                    <ListItem
                        disablePadding
                        onClick={openSettingsMenu}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'custom.cardHover',
                                borderRadius: '8px',
                            },
                        }}>
                        <ListItemButton disableRipple disableTouchRipple variant='sidebarButton'>
                            <ListItemIcon
                                sx={{
                                    minWidth: '30px',
                                    color: 'text.secondary',
                                }}>
                                <SettingsIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemText
                                primary='Settings'
                                primaryTypographyProps={{ fontSize: 14 }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Stack
                    direction='row'
                    justifyContent='center'
                    my={1}
                    sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <MuiLink
                        display='inline-flex'
                        alignItems='center'
                        color='text.secondary'
                        sx={{ cursor: 'pointer' }}
                        onClick={openFeedback}>
                        <MicrophoneIcon />
                        <Typography variant='caption' fontWeight='bold'>
                            Give feedback
                        </Typography>
                    </MuiLink>
                </Stack>
            </Box>
        </Box>
    );
    const miniDrawer = (
        <Box minHeight='100dvh' color='text.secondary' display='flex' flexDirection='column'>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                component={Link}
                mb={1.5}
                to='/'
                sx={{ textDecoration: 'none', color: 'text.primary', py: 1 }}>
                <Image cdn='projects/logo/2023/projects.png' sx={{ height: '50px' }} />
            </Box>

            <Box
                sx={{
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    height: 'calc(100dvh - 90px)',
                    flexGrow: 1,
                }}>
                <List sx={{ px: 1 }}>
                    {fileManager.map(link => (
                        <NavLink
                            to={link.to}
                            key={link.name}
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            {({ isActive }) => (
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={isActive}
                                        disableRipple
                                        disableTouchRipple
                                        variant='sidebarButton'
                                        sx={{ height: '45px' }}>
                                        <ListItemIcon
                                            sx={{
                                                // minWidth: '35px',
                                                color: 'text.secondary',
                                            }}>
                                            {link.icon}
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </NavLink>
                    ))}
                </List>
                <Divider variant='middle' />
                <List sx={{ px: 1 }}>
                    {sharedFile.map(link => (
                        <NavLink
                            to={link.to}
                            key={link.name}
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            {({ isActive }) => (
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={isActive}
                                        disableRipple
                                        disableTouchRipple
                                        variant='sidebarButton'
                                        sx={{ height: '36px' }}>
                                        <ListItemIcon
                                            sx={{
                                                minWidth: '35px',
                                                color: 'text.secondary',
                                            }}>
                                            {link.icon}
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </NavLink>
                    ))}
                </List>
            </Box>
        </Box>
    );

    console.log({ drawerHover });
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                px: { xs: 0.5, xm: 0 },
                height: '100dvh',
                position: 'relative',
            }}>
            <AppBar
                elevation={0}
                component={Box}
                position='sticky'
                sx={{
                    width: {
                        xs: '100%',
                        xm:
                            collapseDrawer && !drawerHover
                                ? `calc(100% - ${drawerWidth}px)`
                                : `calc(100% - ${miniDrawerWidth}px )`,
                    },
                    ml: {
                        xm:
                            collapseDrawer && !drawerHover
                                ? `${drawerWidth}px`
                                : `${miniDrawerWidth}px`,
                    },
                    backgroundColor: 'background.default',

                    borderBottom: '1px solid custom.border',
                    // borderBottomColor: 'custom.border',
                    color: 'text.primary',
                    transition: 'ease-in-out 225ms, background-color 0s',
                }}>
                <Toolbar
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        '&': {
                            minHeight: '64px',
                            px: 1,
                        },
                    }}>
                    <Grid container alignItems='center' columnSpacing={3}  >
                        <Grid item>
                            <IconButton
                                onClick={matches ? handleDrawerOpen : handleDrawerToggle}
                                edge='start'
                                sx={{
                                    ml: 0.2,
                                    mr: 1,
                                }}>
                                <MenuIcon sx={{ fontSize: '30px' }} />
                            </IconButton>
                        </Grid>

                        <Grid className='searchbar' item xs md={5} alignItems='start'  >
                            <SearchBar  />
                        </Grid>
                       
                        <Grid item xs display={{ xs: 'none', sm: 'block' }}>
                        
                            <Stack
                                direction='row'
                                alignItems='center'
                                justifyContent='flex-end'
                                spacing={0}>
  <StyledButton>
  <IoDiamondOutline sx={{fontSize:'19px',}} />      Upgrade
    </StyledButton>
    <Box sx={{ transform: 'rotate(40deg)' }}>
  <NotificationIcon />
</Box>

                                <IconButton onClick={openSettingsMenu}>
                                
                                    <SettingsIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorElSettings}
                                    open={Boolean(anchorElSettings)}
                                    onClose={closeSettingsMenu}>
                                    <MenuItem onClick={toggleTheme}>
                                        <ListItemIcon>
                                            {mode === 'dark' ? (
                                                <LightModeIcon fontSize='small' />
                                            ) : (
                                                <DarkModeIcon fontSize='small' />
                                            )}
                                        </ListItemIcon>
                                        Appearance
                                    </MenuItem>
                                </Menu>

                                <IconButton onClick={() => window.location.href = 'https://apps.clikkle.com/'}>
    <AppsIcon />
</IconButton>

                                <Menu
                                    anchorEl={anchorElApps}
                                    open={Boolean(anchorElApps)}
                                    onClose={closeAppsMenu}
                                    sx={{
                                        '.MuiPaper-root.MuiMenu-paper.MuiPopover-paper': {
                                            marginTop: '16px',
                                            bgcolor: 'custom.menu',
                                            width: '300px',
                                            padding: '10px 14px',
                                            borderRadius: '8px',
                                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                            border: '1px solid rgba(0, 0, 0, 0.11)',
                                        },
                                    }}>
                                    <Grid container alignItems='center' spacing={2}>
                                        {sidebarApps
                                            ? sidebarApps.map(app => (
                                                  <Grid item xs={4} key={app.name}>
                                                      <MuiLink
                                                          href={app.url}
                                                          target='_blank'
                                                          sx={{
                                                              fontWeight: 500,
                                                              textDecoration: 'none',
                                                              color: '#5f6368',
                                                          }}>
                                                          <Box
                                                              align='center'
                                                              sx={{
                                                                  borderRadius: '8px',
                                                                  p: 1.2,
                                                                  textAlign: 'center',
                                                                  '&:hover': {
                                                                      bgcolor: 'custom.appsHover',
                                                                  },
                                                              }}>
                                                              <Image
                                                                  src={app.logo}
                                                                  sx={{
                                                                      height: '35px',
                                                                  }}
                                                              />
                                                              <Typography
                                                                  sx={{
                                                                      fontSize: '12px',
                                                                      overflowX: 'hidden',
                                                                      textOverflow: 'ellipsis',
                                                                      whiteSpace: 'nowrap',
                                                                      fontWeight: 500,
                                                                  }}>
                                                                  {app.name}
                                                              </Typography>
                                                          </Box>
                                                      </MuiLink>
                                                  </Grid>
                                              ))
                                            : Array(9)
                                                  .fill(0)
                                                  .map((_, i) => (
                                                      <Grid item xs={4} key={i} align='center'>
                                                          <Skeleton
                                                              variant='circular'
                                                              animation='wave'
                                                              width={37}
                                                              height={37}
                                                              sx={{ mt: 1 }}
                                                          />
                                                          <Skeleton
                                                              variant='text'
                                                              animation='wave'
                                                              width={38}
                                                              sx={{ mt: 1 }}
                                                          />
                                                      </Grid>
                                                  ))}
                                    </Grid>
                                </Menu>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={openProfileMenu}
                                sx={{
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    borderColor: 'primary.main',
                                    width:'45px',
                                    p: '3px',
                                }}>
                                <Typography
    variant='subtitle1' // Corrected 'substitle1' to 'subtitle1'
    component='div'
    fontWeight={600}
    sx={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }}>
    {platformUser && platformUser.firstName && platformUser.lastName
        ? platformUser.firstName.charAt(0).toUpperCase() + platformUser.lastName.charAt(0).toLowerCase()
        : '?'}
</Typography>
                            </IconButton>

                            <Menu
            anchorEl={anchorElProfile}
            open={Boolean(anchorElProfile)}
            onClose={closeProfileMenu}
            sx={{
                '.MuiPaper-root.MuiMenu-paper.MuiPopover-paper': {
                    width: 'min(100%, 320px)',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
                    border: '1px solid #00000017',
                    bgcolor: 'custom.menu',
                    px: 0.5,
                    pt: 1.5,
                },
            }}>
            <Grid container spacing={2} alignItems='center' flexWrap='nowrap'>
                <Grid item>
                    <Avatar
                        alt='Remy Sharp'
                        src='https://shorturl.at/fjqz9'
                        sx={{ width: 100, height: 100 }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography
                        variant='subtitle1' // Corrected 'substitle1' to 'subtitle1'
                        component='div'
                        fontWeight={600}
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}>
                        {platformUser.firstName + ' ' + platformUser.lastName}
                    </Typography>
                    <Typography
                        variant='caption'
                        component='div'
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}>
                        {platformUser.email}
                    </Typography>
                    <Typography
                        variant='caption'
                        component='a'
                        href={env('MY_ACCOUNT')}
                        color='primary.main'
                        display='block'>
                        My Clikkle account
                    </Typography>
                    <Typography
                        variant='caption'
                        component='a'
                        href='#'
                        color='primary.main'
                        display='block'>
                        My Profile
                    </Typography>
                </Grid>
            </Grid>
            <Stack direction='row' mt={2}>
                <Button variant='text' fullWidth>
                    Add account
                </Button>
                <Button variant='text' onClick={signOut} fullWidth>
                    Sign out
                </Button>

                
            </Stack>
        </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>

                <Box
                    sx={{
                        width: appsWidth,
                        display: { xs: 'none', xm: 'block' },
                        backgroundColor: 'background.default',
                        zIndex: '1200',
                        position: 'absolute',
                        right: 0,
                        
                        top: 65,
                    }}>
                    <Stack
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        spacing={1}
                        
                       
                        overflow='hidden'
                        px={0.8}>
                        <DragDropContext  onDragEnd={onDragEnd}>
                            <Droppable droppableId='apps' isDropDisabled={!editable}>
                                {provided => (
                                    <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {sidebarApps ? (
                                            sidebarApps.map((app, i) => (
                                                <Draggable
                                                    key={app.order}
                                                    draggableId={app.name}
                                                    index={i}
                                                    isDragDisabled={!editable}>
                                                    {provided => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}>
                                                            <ActionIcon
                                                                title={editable ? '' : app.name}
                                                                href={app.url}
                                                                src={app.logo}
                                                                key={app.order}
                                                                sx={{
                                                                    mt: 0.8,
                                                                    width: 'auto',
                                                                }}
                                                                imageSx={{
                                                                    filter:
                                                                        editable &&
                                                                        `drop-shadow(0px 2px 2px ${theme.palette.primary.main})`,
                                                                }}
                                                            />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        ) : (
                                            <Box mt={2} >
                                                {Array(8)
                                                    .fill(0)
                                                    .map((_, i) => (
                                                        <Skeleton
                                                            variant='circular'
                                                            animation='wave'
                                                            key={i}
                                                            width={35}
                                                            height={35}
                                                            sx={{ mb: 2 }}
                                                        />
                                                    ))}
                                            </Box>
                                        )}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                        <Divider variant='middle' sx={{ my: 2, width: '80%' }} />
                        {editable ? (
                            <ActionIcon
                                title='Save'
                                icon={<DoneIcon fontSize='small' />}
                                onClick={() => {
                                    setEditable(false);
                                    if (isOrderChanged) saveOrder();
                                }}
                            />
                        ) : (
                            <ActionIcon
                                title='Edit'
                                icon={<EditIcon fontSize='small' />}
                                onClick={() => setEditable(true)}
                            />
                        )}
                    </Stack>
                </Box>
            </AppBar>

            <Box
                component='nav'
                sx={{
                    width: { xm: drawerWidth },
                    flexShrink: { sm: 0 },
                    bgcolor: 'custom.menu',
                }}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <MuiDrawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', xm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            bgcolor: 'custom.menu',
                        },
                    }}>
                    {drawer}
                </MuiDrawer>
                <Drawer
                    variant='permanent'
                    open={collapseDrawer}
                    hover={drawerHover}
                    onMouseOver={() => {
                        if (!collapseDrawer) {
                            setCollapseDrawer(true);
                            setDrawerHover(true);
                        }
                    }}
                    onMouseLeave={() => {
                        if (drawerHover) {
                            setCollapseDrawer(false);
                            setDrawerHover(false);
                        }
                    }}
                    sx={{
                        display: { xs: 'none', xm: 'block' },
                        p: 0,
                        '& .MuiDrawer-paper': {
                            boxShadow: drawerHover
                                ? 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                                : 'none',
                        },
                    }}>
                    {collapseDrawer ? drawer : miniDrawer}
                </Drawer>
            </Box>

            <Box
                component='main'
                sx={{
                    width: {
                        xs: '100%',
                        xm:
                            collapseDrawer && !drawerHover
                                ? `calc(100% - ${drawerWidth + appsWidth}px)`
                                : `calc(100% - ${appsWidth + miniDrawerWidth}px )`,
                    },
                    ml: {
                        xm:
                            collapseDrawer && !drawerHover
                                ? `${drawerWidth}px`
                                : `${miniDrawerWidth}px`,
                    },
                    mt: 1,
                    height: { xs: 'calc(100dvh - 90px)' },
                    backgroundColor: 'background.paper',
                    borderRadius: '12px',
                }}>
                {children}
            </Box>

            <Modal
                open={feedbackState}
                onClose={closeFeedback}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                <>
                    <Feedback closeModal={closeFeedback} />
                </>
            </Modal>
            
        </Box>
    );
}