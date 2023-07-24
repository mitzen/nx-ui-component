import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const TopJobs = () => {
    return (
        <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '16vh' }}
            >    
            <Grid item xs={1}>
            </Grid>

            <Grid item xs={11}>
               Top jobs based    on your search
            </Grid>
           
          
        </Grid>
            )
}

export default TopJobs