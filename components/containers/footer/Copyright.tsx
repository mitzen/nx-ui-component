'use client'

import * as React from 'react';
import { Grid, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Copyright() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ marginTop: 10 }}>
         <Grid item xs={4}>
            <Stack>
              <Item>Job seekers</Item>
              <Item>Job Search</Item>
              <Item>Profile</Item>
            </Stack>
         </Grid>
         <Grid item xs={4}>
          <Stack>
              <Item>Employers</Item>
              <Item>Register for free</Item>
              <Item>Post a job ad</Item>
            </Stack> 
         </Grid>
         <Grid item xs={4}>
          <Stack>
              <Item>About Us</Item>
              <Item>Newsroom</Item>
              <Item>Investors</Item>
            </Stack>
         </Grid>       
    </Grid>   
  );
}
