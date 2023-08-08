"use client"

import * as React from 'react';
import { useState } from 'react'
import { Model } from '@/lib/model/posting';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

/* Instruments */
import {
    useSelector,
    useDispatch,
    searchJobAsync, getJobById,
    selectJobModel
  } from '@/lib/redux';

const JobSearch = () => {

    const dispatch = useDispatch()
    const jobModel = useSelector(selectJobModel)

    return (
        <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '20vh', marginTop: 10 }}
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
                    e.preventDefault();                    
                    const searchCriteria: Model.JobSearch = { searchText: jobModel.searchText, jobCategory: jobModel.jobCategory, jobLocation: jobModel.jobLocation }

                    dispatch(searchJobAsync(searchCriteria));
                    
                    }}>Search</Button>
      
            </Box>
        </Grid>
    </Grid>
        )
    }
    
    export default JobSearch