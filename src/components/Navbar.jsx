import React, { useCallback, useEffect, useState } from 'react';

import { Link, NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DiamondIcon from "@mui/icons-material/Diamond"; 
import { IoDiamondOutline } from "react-icons/io5";
import Animatedbell from '../components/AnimatedBell';

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

import { Storage, Security } from '@mui/icons-material';
//mui icons
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import clikklepro from '../Assets/clikkleproj.png';
import { fileManager, sharedFile } from '../services/sidebarLinks';

import Notificationbell from '../components/NotificationBell';

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
import Clikklebrand from '../Assets/clikkleprobrand.png'


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorageIcon from '@mui/icons-material/Storage';
import FolderIcon from '@mui/icons-material/Folder';
import BugReportIcon from '@mui/icons-material/BugReport';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';


import personprogg from '../Assets/gg_profile.png';
import systemgg from '../Assets/fluent-mdl2_system.png';
import foldergg from '../Assets/bi_folder.png';
import trsckingg from '../Assets/fluent-mdl2_issue-tracking.png';
import peoplegg from '../Assets/bi_people-fill.png'


import upgradegrp from '../Assets/Group 1014.png';
import upgradestack from '../Assets/Group 1015.png';
import upgradeIssue from '../Assets/Group 1019.png';

import UpgradeButton from '../pages/Button/GradientButton'

import StandardFeatures from '../pages/Project/StandardFeatures';
import CloseIcon from '@mui/icons-material/Close';


import { Dialog, DialogContent, DialogTitle, Tabs, Tab, Card, CardContent,ListItemAvatar, AvatarGroup, DialogActions,
   ListSubheader, } from '@mui/material';

import { Person } from '@mui/icons-material';

import { Margin } from '@mui/icons-material';

import { useSignOut } from '../hooks/Authorize';

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
        //  sidebar apps with CDN images
        { order: 1, name: 'Adds', url: 'https://ads.clikkle.com/', logo: 'https://cdn.clikkle.com/images/ads/logo/2023/ads.png' },
        { order: 2, name: 'Campapaigns', url: 'https://campaigns.clikkle.com/', logo: 'https://cdn.clikkle.com/images/campaigns/logo/2023/campaigns.png' },
        { order: 3, name: 'E sign', url: 'https://esign.clikkle.com/', logo: 'https://cdn.clikkle.com/images/e-sign/logo/2023/e-sign.png' },
        { order: 4, name: 'Files', url: 'https://files.clikkle.com/', logo: 'https://cdn.clikkle.com/images/files/logo/2023/files.png' },
        { order: 5, name: 'hr', url: 'https://hr.clikkle.com/', logo: 'https://cdn.clikkle.com/images/hr/logo/2023/hr.png' },
        { order: 6, name: 'Host', url: 'https://host.clikkle.com/', logo: 'https://cdn.clikkle.com/images/host/logo/2023/host.png' },
        { order: 7, name: 'Launch', url: 'https://launch.clikkle.com/', logo: 'https://cdn.clikkle.com/images/launch/logo/2023/launch.png' },
        { order: 8, name: 'Cmail', url: 'https://mail.clikkle.com/', logo: 'https://cdn.clikkle.com/images/cmail/logo/2023/cmail.png' },
        { order: 9, name: 'Pitch', url: 'https://pitch.clikkle.com/', logo: 'https://cdn.clikkle.com/images/pitch/logo/2023/pitch.png' },
        
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



//opensetting

    const [opene, setOpen] = useState(false); // 
    const [opensetting, setOpene] = useState(false); 


const handleOpenset = () => {
    setOpene(true);
  };

  const handleCloseset = () => {
    setOpene(false);
  };







  const [opening, setNotification] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const toggleDialog = () => {
    setNotification(!opening);
  };


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


  

  
    const organization = location.state?.organization;
    

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


    const taketotheSubscriptionpage =() =>{
        navigate('/paymet-gateway')
    }

    const handleusermanagement =()=>{
        navigate('/Organization-managment')
    }

   
  
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
        setOpen(false); // This will close the menu
      };


      const handleUpgrade = ()=>{
        navigate('/paymet-gateway')
      }

     
      const organizations = [
        { id: 1, name: 'Clikkle Technologies', logo: 'https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.svg' },
        { id: 2, name: 'Tech Corp', logo: 'https://example.com/images/techcorp/logo.png' },
        { id: 3, name: 'InnovateX', logo: 'https://example.com/images/innovatex/logo.png' },
    ]; // Example organizations, fetch dynamically from backend if needed
      // Default organization
      
     // For navigation
     const [selectedOrganization, setSelectedOrganization] = useState(organizations[0].name);
     const [selectedOrgLogo, setSelectedOrgLogo] = useState(organizations[0].logo);
    

     const [userCount, setUserCount] = React.useState(0); // Track the user count
const [openFirstDialog, setOpenFirstDialog] = React.useState(false); // First dialog state
const [openSecondDialog, setOpenSecondDialog] = React.useState(false); // Second dialog state

const handleOpen = () => {
  if (userCount < 10) {
    setOpenFirstDialog(true); // Open the first dialog if users < 10
  } else {
    setOpenSecondDialog(true); // Open the second dialog if users >= 10
  }
};

const handleCloseFirstDialog = () => {
  setOpenFirstDialog(false);
};

const handleCloseSecondDialog = () => {
  setOpenSecondDialog(false);
};



    

     
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
            {organization && organization.imageUrl && (
  <Avatar 
    alt={selectedOrganization || 'Organization Logo'} 
    src={organization.imageUrl} 
    sx={{ backgroundColor: 'white', height: '32px', width: '32px', marginRight: '12px', marginLeft: '14px' }} 
  />
)}


            {/* Company Name */}
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
            {organization?.name} {/* Display the selected organization here */}
            </Typography>
            <div>
      <h1></h1>
      <p>{organization?._id}</p>
      {/* Render additional organization-specific content here */}
    </div>

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
                <Button sx={{ color: 'white' }} href="/listorganisation">
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
 {/* Upgrade Button */}
<Button 
  sx={{ marginRight: '-27px' }} 
  onClick={handleOpen}
>
  {userCount < 10 ? <UpgradeButton/> : 'Limited Users Reached'}
</Button>

{/* First Dialog (For Users < 10) */}
<Dialog
  open={openFirstDialog}
  onClose={handleCloseFirstDialog}
  maxWidth="lg"
  PaperProps={{
    sx: {
      width: '1050px',
      height: '600px',
      borderRadius: '12px',
      backgroundColor: 'background.default',
    },
  }}
>
<DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 0, 
           
          }}
        >
          {/* Left section */}
          <Box sx={{ width: '50%', padding: '24px', color: '#fff' }}>
            <Image src={Clikklebrand} sx={{height:'38px',marginBottom:'22px',marginTop:'22px'}}/>
            <Typography variant="h6" sx={{fontFamily:'sans-serif', mb: 2,fontSize:'22px' }}>
              Upgrade for unlimited users
            </Typography>
            <Typography sx={{ mb: 2 ,fontFamily:'sans-serif',fontSize:'14px',color:'gray',width:'400px'}}>
              With the Standard plan, you get unlimited users, 250GB of storage, free guest access and more.
            </Typography>

            {/* Users invited section */}
            <Typography sx={{ mb: 1,fontFamily:'sans-serif',fontSize:'20px',color:'gray'}}>0 of 10 invited</Typography>
            <Typography sx={{fontFamily:'sans-serif',fontSize:'15px',color:'gray'}}>Upgrade for unlimited users</Typography>
            <AvatarGroup max={10} sx={{ mb: 2 ,marginRight:'115px',marginTop:'12px', }}>
              {[...Array(10)].map((_, index) => (
                <Avatar key={index} sx={{ backgroundColor: '#666' }} />
              ))}
            </AvatarGroup>

            {/* Storage usage section */}
            <Typography sx={{ mb: 1,fontFamily:'sans-serif',color:'gray' }}>0 GB of 2 GB</Typography>
            <Typography sx={{fontFamily:'sans-serif',color:'gray',fontSize:'15px',marginBottom:'12px'}}>Upgrade for 250 GB storage</Typography>
            <LinearProgress
              variant="determinate"
              value={0}
              sx={{ mb: 3, backgroundColor: '#444', '& .MuiLinearProgress-bar': { backgroundColor: '#fff' } ,height:'7px',borderRadius:'22px'}}
            />

            {/* Actions */}
            <DialogActions sx={{  mt: 2,marginTop:'72px' }}>
              <Button onClick={handleClose} sx={{ color: '#888', backgroundColor: '#45413C', textTransform: 'none', p: '8px 24px' }}>
                Maybe later
              </Button>
              <Button onClick={handleUpgrade} sx={{ backgroundColor: '#3767B1', color: 'black', textTransform: 'none', p: '8px 24px' }}>
                Upgrade
              </Button>
            </DialogActions>
          </Box>

          {/* Right section */}
          <Box sx={{ width: '50%', backgroundColor: 'background.default', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
       <StandardFeatures/>
          </Box>
        </DialogContent>

</Dialog>

{/* Second Dialog (For Users >= 10) */}
<Dialog
  open={openSecondDialog}
  onClose={handleCloseSecondDialog}
  maxWidth="sm"
  fullWidth
  sx={{
    '& .MuiDialog-paper': {
      width: '420px',
      maxWidth: '90%',
      height: '540px',
      maxHeight: '90vh',
      borderRadius: '3px',
    },
  }}
>
<DialogTitle sx={{ p: 0 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '8px 16px',
            width:'150px',
            backgroundColor: 'rgba(0, 30, 255, 0.1)', // Transparent blue background
            borderRadius: '8px',
            marginBottom:'22px',
            marginTop:'24px',
            marginLeft:'23px',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#407BFF', // Bold blue text
              fontWeight: 'bold',
              fontSize: '14px',
              
              
              
            }}
          >
            14 DAYS LEFT
          </Typography>
        </Box>
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent sx={{ padding: '24px' }}>
        <Typography
          variant="h6"
          sx={{ marginBottom: '8px',fontFamily:'sans-serif',fontSize:'24px', }}
        >
          Make the most of your trial
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginBottom: '16px', fontFamily:"sans-serif",fontSize:'17px',}}
        >
          Your standard trial includes:
        </Typography>

        {/* Feature Cards */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {[
            { icon: <img src={upgradegrp} alt="Icon" style={{ width: '40px', height: '40px' }}/>, title: 'Unlimited users', description: 'Add your teams and stakeholders to boost collaboration.' },
            { icon:<img src={upgradeIssue} alt="Icon" style={{ width: '40px', height: '40px' }}/>, title: 'User activity logs', description: 'See all changes made in a project.' },
            { icon: <img src={upgradestack } alt="Icon" style={{ width: '40px', height: '40px' }}/>, title: 'Issue permissions', description: 'Choose who can view, edit, and create issues.' },
          ].map((feature, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px',
               
                backgroundColor:'#1c1c1c',
               
                cursor: 'pointer',
        
              }}
            >
              <Box sx={{ marginRight: '12px' }}>{feature.icon}</Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontSize: '17px',fontFamily:'sans-serif', }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '12px', color: 'gray',fontSize:'14px', }}>
                  {feature.description}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>

        {/* "I'm Ready to Buy" Button */}
        <Box sx={{display:'flex',flexDirection:"row",justifyContent:'flex-end',}}>
        <Button
          variant="contained"
          sx={{
            width: '47%',
            height:'44px',
            padding: '12px',
            fontSize: '16px',
            fontFamily:"sans-serif",
            backgroundColor: '#3767B1',
           
            color: 'white',
            borderRadius: '8px',
            '&:hover': { backgroundColor: '#3767B1' },
          }}
          onClick={taketotheSubscriptionpage}
        >
          I'm ready to buy
        </Button>


        </Box>
      </DialogContent>

</Dialog>

   <Box container sx={{marginRight:'-26px'}}>
    <Button  onClick={toggleDialog}>

<Animatedbell />
</Button>


<Dialog open={opening} onClose={toggleDialog} fullWidth maxWidth="sm">
        <Box sx={{ p: 2, backgroundColor: '#1F1F1F', color: '#FFFFFF' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Notifications
            </Typography>
            <IconButton onClick={toggleDialog} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Tabs for 'Direct' and 'Watching' */}
          <Tabs value={tabValue} onChange={handleTabChange} textColor="inherit" indicatorColor="primary">
            <Tab label="Direct" />
            <Tab label="Watching" />
          </Tabs>

          {/* Divider */}
          <Divider sx={{ backgroundColor: '#333' }} />

          {/* Content for Notification */}
          <Box sx={{ p: 2 }}>
            {tabValue === 0 ? (
              <Box>
                <Typography variant="body2" sx={{ color: '#999', marginBottom: 2 }}>
                  TODAY
                </Typography>

                {/* Example notification entry */}
                <Box display="flex" alignItems="flex-start" mb={2}>
                  <Box
                    component="img"
                    src="https://via.placeholder.com/40"
                    alt="Avatar"
                    sx={{ width: 40, height: 40, borderRadius: '50%', marginRight: 2 }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Yogesh Singh updated an issue <span style={{ color: '#999' }}>2 hours ago</span>
                    </Typography>
                    <Typography variant="body2">Employee section in Clikkle HR Dashboard</Typography>
                    <Typography variant="caption" sx={{ color: '#999' }}>
                      CHR-17 - In Progress
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ backgroundColor: '#333' }} />
              </Box>
            ) : (
              <Box>
                <Typography variant="body2" sx={{ color: '#999', marginBottom: 2 }}>
                  TODAY
                </Typography>

                <Box display="flex" alignItems="flex-start" mb={2}>
                  <Box
                    component="img"
                    src="https://via.placeholder.com/40"
                    alt="Avatar"
                    sx={{ width: 40, height: 40, borderRadius: '50%', marginRight: 2 }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      James Bator updated an issue <span style={{ color: '#999' }}>10 hours ago</span>
                    </Typography>
                    <Typography variant="body2">Fix UI Flaws</Typography>
                    <Typography variant="caption" sx={{ color: '#999' }}>
                      CHR-8 - To Do
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ backgroundColor: '#333' }} />
              </Box>
            )}
          </Box>
        </Box>
      </Dialog>

</Box>

                                <IconButton onClick={handleOpenset}>
                                
                                    <SettingsIcon />
                                </IconButton>


                                 {/* Dialog for the settings popup */}
                                 <Dialog
  sx={{ marginLeft: '655px' }}
  open={opensetting}
  onClose={handleClose}
  fullWidth
  maxWidth="sm"
  PaperProps={{
    style: {
      color: '#fff',
      borderRadius: '10px',
      height: '91vh',
      width: "550px"
    }
  }}
>
  <DialogTitle sx={{ color: 'gray', marginTop: '22px' }}>Settings</DialogTitle>
  <DialogContent>
    <List>
      {/* Personal Settings Section */}
      <ListSubheader
        sx={{
          color: 'gray',
          backgroundColor: 'inherit',
          fontSize: '18px',
          fontFamily: 'sans-serif',
          paddingBottom: '10px',
          marginTop: '-33px'
        }}
      >
        PERSONAL SETTINGS
      </ListSubheader>

      {/* Theme Toggle MenuItem */}
      <ListItem
        sx={{
          borderRadius: '10px',
          mb: 2,
          '&:hover': { backgroundColor: '#2e2e2d' }  // Add hover effect
        }}
        onClick={toggleTheme}
      >
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: '#3767B1', borderRadius: '7px' }}>
            {mode === 'dark' ? (
              <LightModeIcon sx={{ height: '22px' }} />
            ) : (
              <DarkModeIcon sx={{ height: '22px' }} />
            )}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{ color: 'gray', fontFamily: 'sans-serif', fontSize: '18px' }}>
              Appearance
            </Typography>
          }
          secondary={
            <Typography sx={{ color: 'gray', fontSize: '13px', fontFamily: 'sans-serif', width: '500px' }}>
              Toggle between light and dark themes.
            </Typography>
          }
        />
      </ListItem>

      {/* Other Personal Settings Items */}
      <ListItem
        sx={{
          borderRadius: '10px',
          mb: 2,
          '&:hover': {backgroundColor: '#2e2e2d' }  // Add hover effect
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: '#3767B1', borderRadius: '7px' }}>
            <Image sx={{ height: '22px' }} src={personprogg} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{ color: 'gray', fontFamily: 'sans-serif', fontSize: '18px' }}>
              Personal Projects Settings
            </Typography>
          }
          secondary={
            <Typography sx={{ color: 'gray', fontSize: '13px', fontFamily: 'sans-serif', width: '500px' }}>
              Manage your email notifications and other projects settings.
            </Typography>
          }
        />
      </ListItem>

      {/* Projects Settings Section */}
      <ListSubheader
        sx={{
          color: 'gray',
          backgroundColor: 'inherit',
          fontSize: '18px',
          paddingBottom: '10px',
          marginTop: '-13px',
          fontFamily: 'sans-serif'
        }}
      >
        PROJECTS SETTINGS
      </ListSubheader>

      <ListItem
        sx={{
          borderRadius: '10px',
          mb: 2,
          '&:hover': { backgroundColor: '#2e2e2d' }  // Add hover effect
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: '#3767B1', borderRadius: '7px' }}>
            <Image sx={{ height: '22px' }} src={systemgg} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{ color: 'gray', marginTop: '-12px', fontFamily: 'sans-serif', fontSize: '18px' }}>
              System
            </Typography>
          }
          secondary={
            <Typography sx={{ color: 'gray', fontFamily: 'sans-serif', fontSize: '13px', width: '600px' }}>
              Manage your general configuration, global permissions, look, feel, and more.
            </Typography>
          }
        />
      </ListItem>

      <ListItem
        sx={{
          borderRadius: '10px',
          mb: 2,
          '&:hover': { backgroundColor: '#2e2e2d' }  // Add hover effect
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: '#3767B1', borderRadius: '7px' }}>
            <Image sx={{ height: '22px' }} src={foldergg} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{ marginTop: '-12px' }}
          primary={
            <Typography sx={{ color: 'gray', fontFamily: 'sans-serif', fontSize: '18px' }}>
              Projects
            </Typography>
          }
          secondary={
            <Typography sx={{ color: 'gray', fontFamily: 'sans-serif', fontSize: '13px', width: '600px' }}>
              Manage your projects settings, categories, and more.
            </Typography>
          }
        />
      </ListItem>

      <ListItem
        sx={{
          borderRadius: '10px',
          mb: 2,
          '&:hover': { backgroundColor: '#2e2e2d' }  // Add hover effect
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: '#3767B1', borderRadius: '7px' }}>
            <Image sx={{ color: 'gray' }} src={trsckingg} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{ color: 'gray', fontFamily: 'sans-serif', fontSize: '18px' }}>
              Issues
            </Typography>
          }
          secondary={
            <Typography sx={{ color: 'gray', fontFamily: 'sans-serif', fontSize: '13px', width: '600px' }}>
              Configure your issue types, workflows, screens, custom fields, and more.
            </Typography>
          }
        />
      </ListItem>

      {/* Projects Admin Section */}
      <ListSubheader
        sx={{
          color: 'gray',
          backgroundColor: 'inherit',
          fontSize: '18px',
          paddingBottom: '10px',
          marginTop: '-13px',
          fontFamily: 'sans-serif'
        }}
      >
        PROJECTS ADMIN
      </ListSubheader>

      <ListItem
        sx={{
          borderRadius: '10px',
          mb: 2,
          '&:hover': { backgroundColor: '#2e2e2d' }  // Add hover effect
        }}
        onClick={handleusermanagement}
      >
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: '#3767B1', borderRadius: '7px' }}>
            <Image sx={{ height: '22px' }} src={peoplegg} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{ color: 'gray', fontFamily: 'sans-serif', fontSize: '18px' }}>
              User Management
            </Typography>
          }
          secondary={
            <Typography sx={{ color: '#bbb', fontFamily: 'sans-serif', fontSize: '13px', width: '600px' }}>
              Add users, groups, and manage access requests.
            </Typography>
          }
        />
      </ListItem>
    </List>
  </DialogContent>
</Dialog>


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
        ? platformUser.firstName.charAt(0).toUpperCase() + platformUser.lastName.charAt(0).toUpperCase()
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
               

                <Grid sx={{ borderWidth: "2px",
                  width
                  :'145px',
                  marginLeft:'22px',
                  height
                  :'85px',
                 
                  borderRadius:'60px',
                  textAlign:'center',
                  borderStyle: "solid",
                  borderColor: "primary.main",
                  p: "3px",}} item>
                  <Typography
    variant='subtitle1' // Corrected 'substitle1' to 'subtitle1'
    component='div'
    fontWeight={600}
    sx={{
       
      fontSize:'30px',
      fontFamily:'sans-serif',
      marginLeft:'-12px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }}>
    {platformUser && platformUser.firstName && platformUser.lastName
        ? platformUser.firstName.charAt(0).toUpperCase() + platformUser.lastName.charAt(0).toUpperCase()
        : '?'}
</Typography>
                  
                  
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