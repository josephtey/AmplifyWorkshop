import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField, AppBar, Toolbar, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import { Auth, API } from 'aws-amplify';

function App() {

  const [aboutInfo, setAboutInfo] = useState()
  const [userTasks, setUserTasks] = useState()
  const [taskName, setTaskName] = useState()
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    getAboutInfo()
  }, [refresh])

  async function getAboutInfo() {
    const data = await API.get('itemsAPI', '/info', {})
    setAboutInfo(data.message)
  }

  async function getUserTasks(username) {
    const userData = await Auth.currentAuthenticatedUser()
    const data = await API.get('itemsAPI', '/items/' + userData.username, {})

    setUserTasks(data)
  }

  async function addTask(taskName) {
    const userData = await Auth.currentAuthenticatedUser()

    const data = await API.post('itemsAPI', '/items', {
      body: {
        user: userData.username,
        taskName
      }
    })

    setRefresh(!refresh)
  }

  return (
    <div className="app">
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
      <div className = "card">
        {aboutInfo}
      </div>
      <div className="card">
          <TextField
            label="Task"
            variant="outlined"
            onChange={(event)=>{
              setTaskName(event.target.value)
            }}
            fullWidth
          >
          </TextField>
        <div style={{float: 'right', paddingTop: '15px'}}>
          <Button
            variant="contained" 
            color="primary"
            onClick={()=>{
              addTask(taskName)
            }}
          >
            Add
          </Button>
        </div>
        <div style={{clear: 'both'}} />
      </div>
      
      <div className="card">
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userTasks.map( task => {
            return (
              <TableRow>
                <TableCell>
                  {task.tableName}
                </TableCell>
              </TableRow>
            )
          }) }
            
        </TableBody>
      </Table>
      </div>
      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </div>
  );
}

export default App;
