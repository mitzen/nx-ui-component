'use client'

import Image from 'next/image';
import dynamic from 'next/dynamic'
import { ProductAdd } from './productAdd';

const ProductTitle = dynamic(() => import('./productTitle').then(mod => mod.ProductTitle));

export const StaticImage = ({ imageUrl}: {imageUrl : string}) => {

 return <>
   
        <ProductTitle title="test" description="description"/>

        <Image
        src={imageUrl}
        alt=""
        width={500}
        height={500} /> 

        <ProductAdd price={9.10} description='test' />
    </>

}

