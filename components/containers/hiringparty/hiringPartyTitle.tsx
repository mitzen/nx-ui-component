import styles from "../../../app/product/styles.module.css";

export const HiringPartyTitle = async ({ title, description, delay }: { title : string, description : string, delay: number}) => {
    
  const getProductServer = async (delay: number) => { 
    'use server'
    const res = await fetch('http://localhost:3000/api/product');
    const data = await res.json();
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(data);
  }

  await getProductServer(delay);

  return <div className={styles.product}>
     <ul>
        <li className={styles.productInfo}> {title} </li>
        <li className={styles.productDescription}> {description}</li>
      </ul>
    </div>
}
