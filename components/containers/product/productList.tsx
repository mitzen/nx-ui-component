import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { StaticImage } from "./staticimage";
import AddToCart from "./addCart";
import { cookies } from 'next/headers'

const ProductList = async () => {

    // const getProduct = async() => { 
    //     const res = await fetch('http://localhost:3000/api/product');
    //     const data = await res.json();
    //     console.log(data);
    // }
    // await getProduct();

    const getProductServer = async () => { 
        'use server'
        const res = await fetch('http://localhost:3000/api/product');
        const data = await res.json();
        cookies().set("cartId", "123456");
        console.log(data);
    }

    getProductServer();

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
                  
            <AddToCart></AddToCart>
            
            </Box>
        </Grid>
    </Grid>
      
      )
    }
    
export default ProductList;