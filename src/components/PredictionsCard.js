import React, { useState } from 'react';
import '../App.css';
import { Button, Grid, Paper, CircularProgress, Typography } from '@material-ui/core';
import { getLabelsFromImage } from '../api/predictions'

const PredictionsCard = ({
  addAction
}) => {
  const [labels, setLabels] = useState([])
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState(null)

  return (
    <Grid item xs={12}>
        <Paper className="card">
          <Grid item xs={12} style={{paddingBottom: '10px'}}>
            <b>Use AI Predictions to Add New Items</b>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                type="file"
                style={{ display: "none" }}
                onChange={async (event)=>{
                  const file = event.target.files[0]
                  
                  if (file.size > 5000000) {
                    alert("Image is too large!")
                    return
                  }
                  
                  if (!["jpg", "jpeg", "png"].includes(file.name.split(".")[1])){
                    alert("File type incorrect!")
                    return
                  }
                  
                  setFileName(file.name)
                  setLoading(true)
                  
                  setLabels(await getLabelsFromImage(file))
                  
                  setLoading(false)
                }}
              />
            </Button>
            <span style={{paddingLeft: '10px'}}>{fileName ? fileName : null}</span>
          </Grid>
          <Grid item xs={12} style={{marginTop: '10px'}}>
            { loading ?
              <CircularProgress color="secondary" />
              :
              labels.map(label => (
                <Button
                  onClick={()=>{
                    addAction(label)
                  }}
                >{label}</Button>
              ))
            }
          </Grid>
        </Paper>
      </Grid>
  )
}

export default PredictionsCard
