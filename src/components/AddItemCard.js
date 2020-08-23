import React, { useState } from 'react';
import '../App.css';
import { TextField, Button, Grid, Paper } from '@material-ui/core';

const NavBar = ({
  addAction
}) => {

  const [taskName, setTaskName] = useState()

  return (
    <Grid item md={6} xs ={12}>
      <Paper className="card fixedHeight">
          <TextField
            label="Item"
            onChange={(event)=>{
              setTaskName(event.target.value)
            }}
            value={taskName}
            fullWidth
          >
          </TextField>
        <div style={{float: 'right', paddingTop: '15px', display: 'flex'}}>
          {/* <AudioRecorder finishRecording={convertFromBuffer} /> */}
          <Button
            variant="contained" 
            color="primary"
            onClick={()=>{
              addAction(taskName)
            }}
          >
            Add
          </Button>
        </div>
        <div style={{clear: 'both'}} />
      </Paper>
    </Grid>
  )
}

export default NavBar
