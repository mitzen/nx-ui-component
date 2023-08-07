import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const SearchResult = () => {
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
               Search Results
            </Box>
        </Grid>
    </Grid>
        )
}

export default SearchResult