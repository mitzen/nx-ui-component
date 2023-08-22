import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from "../../../app/product/styles.module.css";
import { useState, useEffect } from 'react';

export const ProductAdd = ({ price, description }: { price : number, description : string}) => {
    
  // normal ways of working with call
  const execute = async () => { 
     console.log("execute");
     const result = await fetch('https://randomuser.me/api/');
     console.log(result);
   }

   const [count,setCount] = useState<number>(0);

   useEffect(() => {
    console.log("calling effects");
   }, [count]);

   useEffect(() => {
    console.log("calling effects");
    const itv = setInterval(() => 
    {
      setCount(count + 1)
    }, 3000);

    return () => {
       clearInterval(itv);
    }
   }, [count]);

  //const [person, setPerson] = useState(null);
   
  //  useEffect(() => {
  //   let ignore = false;
  //   const fetchData = async() => { 
  //     const data = await fetch('https://randomuser.me/api/');
  //     return data.json();
  //   };

  //   fetchData().then(result => {
  //     console.log(result);
  //     setPerson(result.results[0].name.first)
  //   });
    
  //   return () => {
  //     ignore = true;
  //   };
  //  }, []);

    return <div className={styles.product}>
     <ul>
        <li className={styles.productInfo}> Price $ {price}  {count} </li>
        <li className={styles.productDescription}> Quantity <TextField id="outlined-basic" label="Outlined" variant="outlined" /> </li>
        <li className={styles.productDescription}> <Button variant="contained" onClick={() => { 
           console.log(count);
           setCount(count + 1)}}>Add to cart</Button></li>
      </ul>
    </div>
}
