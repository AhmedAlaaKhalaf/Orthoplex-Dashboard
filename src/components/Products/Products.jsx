import React, { useContext, useEffect, useState } from 'react'
import Style from './Products.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Loading from '../LoadingScreen/Loading';
import { useQuery } from '@tanstack/react-query';
import Dashboard from '../Dashboard/Dashboard';


// ---------------- Products Fetch Function --------------
export default function Products() {
  function getRecent(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }



let {data, isLoading} = useQuery({
queryKey:['Products'],
queryFn:getRecent,
refetchInterval:120000,
refetchIntervalInBackground:true
})

  return <>
  {
    isLoading ?<Loading/>: <>

     <div className='dashbaordContainer rounded-5'>
            <div className='row'>
            <div className='col-lg-4 dashboardMenu'>
            <Dashboard/>
        </div>
        <div className='col-lg-8 dashboardBody'>
        <div className='mt-4 ProductsContainer '>
      <h1>Shop All Products</h1>
    <div className='row'>
       {data?.data.data.map((product) =>
        <div key={product.id} className='col-lg-3 col-md-4 col-sm-6 px-2'>
            <div className='product-card p-3'>
            <Link to={`#`}>
              <img className='w-100' src={product.imageCover} alt={product.title}/>
              <h6 className='text-success fw-lighter my-2'>{product.category.name}</h6>
              <h4 className='mb-3 text-black'>{product .title.split(" ").slice(0,2).join(" ")}</h4>
              <div className='d-flex justify-content-between'>
                <span className='price text-black'>{product.price} EGP</span>
                <span className='rating text-black'><i className='fas fa-star text-warning'></i> {product.ratingsAverage}</span>
              </div>
              </Link>
            </div>
        </div>
       )}
    </div>
   </div>
            </div>
            </div>
        </div>
   </>
  }
  </>
}
