import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const FooterBanner = ({footerBanner :{discount,desc, largeText1,largeText2,smallText,midText,product,buttonText,image,saleTime}}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
         <p>{discount}</p>
         <h3>{largeText1}</h3>
         <h3>{largeText2}</h3>
         <p>{saleTime}</p>
        </div>
        <div className='right'> 
           <p>{smallText}</p>
           <p>{midText}</p>
           <p>{desc}</p>
           <Link href={`/product/${product}`}>
             <button type='button'>{buttonText}</button>
           </Link>
        </div>
        <img src='https://i.postimg.cc/D0sZ9WYh/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp' className='footer-banner-image'/>
      </div>
    </div>
  )
}

export default FooterBanner