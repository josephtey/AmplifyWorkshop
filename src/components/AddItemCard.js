import React, { useState } from 'react';
import '../App.css';
import { TextField, Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import Predictions from '@aws-amplify/predictions';
import AudioRecorder from '../api/audio'

const NavBar = ({
  addAction
}) => {

  const [taskName, setTaskName] = useState()

  function convertFromBuffer(bytes) {
    Predictions.convert({
        transcription: {
          source: {
            bytes
          },
          language: "en-US"
        },
      }).then(({ transcription: { fullText } }) => {
        console.log(fullText)
        setTaskName(fullText)
      })
      .catch(err => setTaskName(JSON.stringify(err, null, 2)))
  }

  return (
    <div className="card">
          <TextField
            label="Task"
            onChange={(event)=>{
              setTaskName(event.target.value)
            }}
            value={taskName}
            variant="outlined"
            fullWidth
            autoFocus
          >
          </TextField>
        <div style={{float: 'right', paddingTop: '15px', display: 'flex'}}>
          {/* <AudioRecorder finishRecording={convertFromBuffer} /> */}
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
