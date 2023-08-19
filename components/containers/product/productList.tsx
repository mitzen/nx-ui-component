import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { StaticImage } from "./staticimage"

// const DynamicHeader = dynamic(() => import('../components/header'), {
//       loading: () => <p>Loading...</p>,
// })

const ProductList = () => {
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
            
            <StaticImage imageUrl="https://weetbix.com.au/wp-content/uploads/2023/01/ADDED-BENE-Trans-2-768x658-1.png" />
      
            <StaticImage imageUrl="https://weetbix.com.au/wp-content/uploads/2023/01/ADDED-BENE-Trans-2-768x658-1.png" />
      
            <StaticImage imageUrl="https://weetbix.com.au/wp-content/uploads/2023/01/ADDED-BENE-Trans-2-768x658-1.png" />
      
            <StaticImage imageUrl="https://weetbix.com.au/wp-content/uploads/2023/01/ADDED-BENE-Trans-2-768x658-1.png" />
      
            <StaticImage imageUrl="https://weetbix.com.au/wp-content/uploads/2023/01/ADDED-BENE-Trans-2-768x658-1.png" />
      
            <StaticImage imageUrl="https://weetbix.com.au/wp-content/uploads/2023/01/ADDED-BENE-Trans-2-768x658-1.png" />
      
            <StaticImage imageUrl="https://weetbix.com.au/wp-content/uploads/2023/01/ADDED-BENE-Trans-2-768x658-1.png" />
      
            <StaticImage imageUrl="https://weetbix.com.au/wp-content/uploads/2023/01/ADDED-BENE-Trans-2-768x658-1.png" />
      
            <StaticImage imageUrl="https://weetbix.com.au/wp-content/uploads/2023/01/ADDED-BENE-Trans-2-768x658-1.png" />
      

           
            </Box>
        </Grid>
    </Grid>
      
      )
    }
    
    export default ProductList;