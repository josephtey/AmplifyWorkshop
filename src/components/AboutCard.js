import React from 'react';
import '../App.css';
import { Typography, Grid, Paper } from '@material-ui/core';

const AboutCard = ({
    text
}) => {
    return (
        <Grid item xs ={12} md={6}>
            <Paper className="card fixedHeight">
                <Typography>
                        <b> What is this application about? </b> <br/>
                        {text}
                    </Typography>
            </Paper>
        </Grid>
    )
}

export default AboutCard
