import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

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
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { sm: '1fr 1fr 1fr' },
                gap: 2,
            }}>    
                <TextField id="filled-basic" label="Search" variant="filled" />
                <TextField id="filled-basic" label="Classification" variant="filled" />
                <TextField id="filled-basic" label="Location" variant="filled" />
            
            </Box>
        </Grid>
    </Grid>
        )
    }
    
    export default JobSearch