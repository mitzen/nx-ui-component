"use client"

import React from 'react'
import Grid from '@mui/material/Grid';

import {
    useSelector,
    useDispatch, 
    selectJobModel
  } from '@/lib/redux';

const SearchResult = () => {

    const dispatch = useDispatch();
    const jobModel = useSelector(selectJobModel);

    return (

        <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '20vh', marginTop: 10 }}
        >

        <Grid item xs={9}>
        {
          jobModel.jobResult.map(x => (
            <div key={x.title}>
                {x.description}
            </div>))
        }
        </Grid>
      </Grid>
    )
}

export default SearchResult