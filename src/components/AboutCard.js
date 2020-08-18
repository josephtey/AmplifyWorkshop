import React from 'react';
import '../App.css';
import { Typography } from '@material-ui/core';


const AboutCard = ({
    text
}) => {
    return (
        <div className="card">
            <Typography>
                {text}
            </Typography>
        </div>
    )
}

export default AboutCard
