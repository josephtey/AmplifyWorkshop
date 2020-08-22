import React from 'react';
import '../App.css';
import { Typography, Grid, Paper } from '@material-ui/core';

const AboutCard = ({
    text
}) => {
    return (
        <Grid item xs ={12}>
            <Paper className="card">
                <Typography>
                        <b> What is this application about? </b> <br/>
                        {text}
                    </Typography>
            </Paper>
        </Grid>
    )
}

export default AboutCard
