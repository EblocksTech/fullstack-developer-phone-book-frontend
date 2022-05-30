import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', paddingLeft: "20px" }}>  Phonebook  </Link>            
            <Link to="/add-entry" style={{ textDecoration: 'none', paddingLeft: "20px" }}>  Add Entry  </Link>            
            <Link to="/add-phone-book" style={{ textDecoration: 'none', paddingLeft: "20px" }}>  Add Phonbook  </Link>
          </Typography>          
        </Toolbar>
      </AppBar>
    </Box>
  );
}