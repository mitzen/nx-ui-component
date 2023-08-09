"use client"

import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {
    useSelector,
    useDispatch, 
    selectJobModel
  } from '@/lib/redux';


const SearchResult = () => {

    //const dispatch = useDispatch();
    //const jobModel = useSelector(selectJobModel);
    debugger;
    console.log("search result");
    let result = [{ title: '1', description: 'desc', hiringParty: 'demo' }];
    let jobModel = { jobResult: result }

    return (
        <p>        
        Search Results/more more more               {
                jobModel.jobResult.map(x => (
                    <div key={x.title}>
                        {x.description}
                    </div>
                ))
               }
         </p>
    )
}

export default SearchResult