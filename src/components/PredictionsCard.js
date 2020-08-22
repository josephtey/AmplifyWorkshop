import React, { useState } from 'react';
import '../App.css';
import { Button, Grid, Paper, CircularProgress } from '@material-ui/core';
import { Predictions } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

const PredictionsCard = ({
  addAction
}) => {
  const [labels, setLabels] = useState([])
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState(null)

  const getLabelsFromImage = async(file) => {
    let predictions = await Predictions.identify({
      labels: {
        source: {
          file,
        },
        type: "ALL"
      }
    })

    predictions = predictions.labels.map(item => {
      return item.name
    })

    setLabels(predictions)
  }



  return (
    <Grid item xs={12}>
        <Paper className="card">
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
                  
                  if (!["jpg", "jpeg", "png"].includes(file.name.split(".")[1])){
                    alert("File type incorrect!")
                    return
                  }
                  
                  try {
                    setFileName(file.name)
                    setLoading(true)
                    await getLabelsFromImage(file)
                    setLoading(false)
                  } catch (err) {
                    alert(err)
                  }
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
                    const id = uuidv4();
                    addAction(id, label)
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
