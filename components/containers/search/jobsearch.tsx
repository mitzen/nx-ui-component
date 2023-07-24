import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const jobsearchpadding = {
  color: 'blue'
};

const JobSearch = () => {
    return (
    <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '20vh' }}
        >

        <Grid item xs={8}>
            <TextField id="filled-basic" label="Search" variant="filled" />
            <TextField id="filled-basic" label="Classification" variant="filled" />
            <TextField id="filled-basic" label="Location" variant="filled" />
        </Grid>
       
      
    </Grid>
        )
    }
    
    export default JobSearch