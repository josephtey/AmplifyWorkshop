import React from 'react';
import '../App.css';
import { Auth } from 'aws-amplify'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';


const NavBar = ({
    data,
    removeAction
}) => {
    return (
        <AppBar position="static">
          <Toolbar>
            <Typography className="navBarTitle">
              Homework Tracker
            </Typography>
            <Button color="inherit"
              onClick={async ()=>{
                await Auth.signOut();
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar
