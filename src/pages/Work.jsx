import React from "react";
import Header from '../components/Header';
import Workheaderele from '../pages/Work/Workheaderele';
import Detailsoftheproject from '../pages/Work/Detailofworkproject';
import Listofprojects from '../pages/Work/listofprojectsifwehave';
import { Box, Typography, Table, TableBody,IconButton, Menu, Checkbox,   Dialog, DialogActions, DialogContent, DialogTitle,TableCell,TextField,MenuItem, TableHead, TableRow, Button, Grid, Card, CardContent } from '@mui/material';


const Work=()=>{

    return(
        <Header>
            <Box>
                <Workheaderele/>
                
                
            </Box>
            </Header>
    )
};

export default Work;
