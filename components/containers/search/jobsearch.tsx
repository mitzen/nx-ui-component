"use client"

import * as React from 'react';
import { useState } from 'react'

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

/* Instruments */
import {
    useSelector,
    useDispatch,
    searchJobAsync,
    selectJobModel, JobSearch
  } from '@/lib/redux';

const JobSearch = () => {

    const dispatch = useDispatch()
    const jobModel = useSelector(selectJobModel)
    const [incrementAmount, setIncrementAmount] = useState(2)

    let executeSearch = (): void => {
        console.log("hello")
    }

    return (
        <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '20vh' }}
        >
            
        <Grid item xs={9}>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { sm: '1fr 1fr 1fr 1fr' },
                gap: 2,
            }}>    
                <TextField id="filled-basic" label={jobModel.searchText} variant="filled" />
                <TextField id="filled-basic" label={jobModel.jobCategory} variant="filled" />
                <TextField id="filled-basic" label={jobModel.jobLocation} variant="filled" />
                <Button variant="outlined" onClick={(e) => { 
                    //e.preventDefault();

                    console.log('here we go');
                    
                    const searchCriteria: JobSearch = { searchText: jobModel.searchText, jobCategory: jobModel.jobCategory, jobLocation: jobModel.jobLocation }
                    
                    dispatch(searchJobAsync(searchCriteria))
                    }}>Search</Button>
      
            </Box>
        </Grid>
    </Grid>
        )
    }
    
    export default JobSearch