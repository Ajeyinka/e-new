import React from 'react';
import {Toaster} from 'react-hot-toast';
import '../styles/globals.css';
import Head from 'next/head';

import { Layout } from '../components';
import {StateContext} from '../context/StateContext';




function MyApp({ Component, pageProps }) {
  return ( 
     <div>
       <Head> 
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
         <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@400;600;700&family=Oswald:wght@400;500;600&display=swap" rel="stylesheet"/>
       </Head>
       <StateContext >
        <Layout>
         <Toaster />
         <Component {...pageProps} />
       </Layout>
      </ StateContext>
     </div>
      
    
  
  )
}

export default MyApp
