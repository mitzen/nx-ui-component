import { HiringPartyTitle } from "@/components/containers/hiringparty/hiringPartyTitle"
import { HiringContent } from "@/components/containers/hiringparty/hiringContent"
import styles from "../../../app/product/styles.module.css";

export const HiringContainer = async ({ title, description, info, jobDescription, delay }: { title : string, description : string, info : string, jobDescription : string, delay: number }) => {
    
    // const getProductServer = async () => { 
    //   'use server'
    //   const res = await fetch('http://localhost:3000/api/product');
    //   const data = await res.json();
    //   await new Promise(resolve => setTimeout(resolve, 2000));
    //   console.log(data);
    // }
    // await getProductServer();
  
    return <div className={styles.product}>
        <HiringPartyTitle description={description} title={title} delay={delay} />
        <HiringContent jobDescription={jobDescription} info={info} delay={delay}/>
      </div>
  }
  