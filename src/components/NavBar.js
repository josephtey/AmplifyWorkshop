import React from 'react';
import '../App.css';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';


const NavBar = ({
  logoutAction
}) => {
  return (
    <AppBar position="static">
          <Toolbar>
            <Typography className="navBarTitle">
              Homework Tracker
            </Typography>
            <Button color="inherit"
              onClick={logoutAction}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
  )
}

export default NavBar
