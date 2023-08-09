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
        sx={{ minHeight: '20vh', marginTop: 10 }}>
        {
          jobModel.jobResult.map(x => 
            (
            <> 
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2}>
                {x.name}
            </Grid>
            <Grid item xs={2}>
                {x.description}
            </Grid>
            <Grid item xs={5}>
                {x.jobInDetails}
            </Grid>
            <Grid item xs={1}>
            </Grid>
            </>
            ))
        }

      </Grid>
    )
}

export default SearchResult