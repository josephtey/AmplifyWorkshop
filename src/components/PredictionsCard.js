import React from 'react';
import '../App.css';
import { Button, Grid, Paper } from '@material-ui/core';

const PredictionsCard = () => {
    return (
        <Grid item xs={12} md={6}>
          <Paper className="card fixedHeight">
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                type="file"
                style={{ display: "none" }}
                onChange={(event)=>{
                  const file = event.target.files[0]
                  
                  
                }}
              />
            </Button>
          </Paper>
        </Grid>
    )
}

export default PredictionsCard
