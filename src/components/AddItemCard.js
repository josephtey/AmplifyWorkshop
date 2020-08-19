import React, { useState } from 'react';
import '../App.css';
import { TextField, Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const NavBar = ({
  addAction
}) => {

  const [taskName, setTaskName] = useState()

  return (
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
              const id = uuidv4();
              addAction(id, taskName)
            }}
          >
            Add
          </Button>
        </div>
        <div style={{clear: 'both'}} />
        </div>
  )
}

export default NavBar
