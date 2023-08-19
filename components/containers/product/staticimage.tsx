import Image from 'next/image';
import dynamic from 'next/dynamic'

const StaticLabel = dynamic(() => import('./productTitle').then(mod => mod.ProductTitle));

export const StaticImage = ({ imageUrl}: {imageUrl : string}) => {

 return <>
   
    <StaticLabel title="test" description="description"/>

    <Image
    src={imageUrl}
    alt=""
    width={500}
    height={500} /> 

    </>

}

