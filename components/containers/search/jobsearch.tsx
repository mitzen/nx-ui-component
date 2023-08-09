"use client"

import * as React from 'react';
import { useRef, useState } from 'react'
import { Model } from '@/lib/model/posting';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { jobsearchSlice } from '@/lib/redux'; 

/* Instruments */
import {
    useSelector,
    useDispatch,
    searchJobAsync, 
    selectJobModel
  } from '@/lib/redux';

const JobSearch = () => {

    const dispatch = useDispatch()
    const jobModel = useSelector(selectJobModel)
    const seachCriteriaRef = useRef<any>()

    const [formData, setFormData] = useState({
        searchText: "",
        jobCategory: "",
        jobLocation: ""
      });
    
      const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        console.log(name, "-", value);
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

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
                <TextField name='searchText' id="filled-basic" label={jobModel.searchText} variant="filled" inputRef={seachCriteriaRef} onChange={handleInputChange} />

                <TextField name='jobCategory' onChange={handleInputChange} id="filled-basic" label={jobModel.jobCategory} variant="filled" />

                <TextField name='jobLocation' onChange={handleInputChange} id="filled-basic" label={jobModel.jobLocation} variant="filled" />

                <Button variant="outlined" onClick={(e) => { 
                    e.preventDefault();
                    dispatch(jobsearchSlice.actions.setSearchText(formData['searchText']));
                    dispatch(jobsearchSlice.actions.setJobLocation(formData['jobCategory']));
                    dispatch(jobsearchSlice.actions.setCategory(formData['jobLocation']));

                    const searchCriteria: Model.JobSearch = { 
                        searchText: seachCriteriaRef.current.value, 
                        jobCategory:jobModel.jobCategory, 
                        jobLocation: jobModel.jobLocation 
                    }

                    dispatch(searchJobAsync(searchCriteria));

                    }}>Search</Button>
      
            </Box>
        </Grid>
    </Grid>
        )
    }
    
    export default JobSearch