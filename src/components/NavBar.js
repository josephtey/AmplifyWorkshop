import React from 'react';
import '../App.css';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Auth } from 'aws-amplify';



const NavBar = () => {
  return (
    <AppBar position="static">
          <Toolbar>
            <Typography className="navBarTitle">
              Smart Shopping List
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
