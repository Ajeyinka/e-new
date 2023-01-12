import React from 'react';
import { client } from '../lib/client';

import {Product, FooterBanner, HeroBanner} from '../components/index';
import  Collect from '../components/Collection';
import Gallery from '../components/Gallery';
import Blog from '../components/Blog';

const Home = ({products,bannerData,categoryData}) => {
  return (
    <div >
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>products of many variation</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product}/> )}
      </div>

      <div><Collect /></div>
      <Gallery />
      <Blog />



      <FooterBanner footerBanner ={bannerData && bannerData[0]}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const categoryQuery = '*[_type == "category"]';
  const categoryData = await client.fetch(categoryQuery);

  return {
    props: { products, bannerData, categoryData }
  }
}

export default Home;