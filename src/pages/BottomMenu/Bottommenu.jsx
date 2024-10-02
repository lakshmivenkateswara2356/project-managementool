import React, { useState } from "react";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Homeiconbtn from '../../Assets/ic_outline-home.png';
import clipboard from '../../Assets/el_list-alt.png';
import peoples from '../../Assets/ic_round-people.png';
import workicon from '../../Assets/material-symbols_work-outline.png'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PeopleIcon from '@mui/icons-material/People';
import { useMenu } from '../../hooks/useMenu';
import {
    Box,
    Grid,
    IconButton,
    Menu,
    Typography,
    Skeleton,
    Link as MuiLink,
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

const Bottommenu = () => {

    const {
        anchorEl: anchorElProfile,
        openMenu: openProfileMenu,
        closeMenu: closeProfileMenu,
    } = useMenu();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [sidebarApps, setSidebarApps] = useState(null);
    const [activeTab, setActiveTab] = useState('home');
    const { anchorEl: anchorElApps, openMenu: openAppsMenu, closeMenu: closeAppsMenu } = useMenu();

    return (
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',height:'82px',position: 'fixed',paddingLeft:'12px',paddingRight:'12px', backgroundColor:'#1f1e1e',paddingTop:'22px',
            bottom: 0, 
            zIndex: 1000,
            left: 0,   
            right: 0,  }}>
           
           <Box>
            <HomeOutlinedIcon sx={{ fontSize: '30px', color: activeTab === 'home' ? 'primary.main' : 'text.secondary',
                flexDirection:'column',justifyContent:'space-between'
            }} />
            <Typography sx={{marginTop: '-10px', fontSize: '12px', color: activeTab === 'home' ? 'primary.main' : 'text.secondary'}}>Home</Typography>
            </Box>

            <Box  onClick={() => setActiveTab('home')} sx={{ textAlign: 'center', cursor: 'pointer' }}>
            <AssignmentOutlinedIcon sx={{fontSize:'30px', fontWeight:'lighter', display:'flex',
                flexDirection:'column',justifyContent:'space-between'}} />
            <Typography sx={{marginTop:'-4px', fontSize:'12px',marginLeft:'-8px'}}>Projects</Typography>
            </Box>
            <Box>
            <IconButton onClick={() => window.location.href = 'https://apps.clikkle.com/'}>
    <AppsIcon />
</IconButton>


            </Box>
           
           <Box sx={{alignItems:'center'}}>

            <WorkOutlineIcon sx={{fontSize:'30px', fontWeight:'lighter', display:'flex',
                flexDirection:'column',justifyContent:'space-between'}}/>
            <Typography sx={{marginTop:'-5px', fontSize:'12px',marginLeft:'3px'}}>work</Typography>
            </Box>

            <Box sx={{alignItems:'center'}}>
            <PeopleIcon sx={{fontSize:'30px', fontWeight:'lighter'}} />
            <Typography sx={{marginTop:'-10px', fontSize:'12px',marginLeft:'-6px'}}>Teams</Typography>
           
           
           
            </Box>



           
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
        </Box>
    );
};

export default Bottommenu;
