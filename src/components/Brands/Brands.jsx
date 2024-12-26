import React, { useEffect, useState } from 'react'
import Style from './Brands.module.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../LoadingScreen/Loading';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';


export default function Brands() {
  function getBrands(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }

let {data, isLoading} = useQuery({
queryKey:['brands'],
queryFn:getBrands,
refetchInterval:120000,
refetchIntervalInBackground:true
})


  return <>
    {isLoading ? <Loading/>: 
   <>
    <div className='dashbaordContainer rounded-5'>
        <div className='row'>
        <div className='col-lg-4 dashboardMenu'>
        <Dashboard/>
    </div>
    <div className='col-lg-8 dashboardBody'>
    <div className='my-3 recentProductsContainer'>
    <h1>Brands</h1>
    <div className='row'>
        {data?.data.data.map((brand) =>
         <div key={brand._id} className='col-lg-3 col-md-4 col-sm-6 p-3'>
         <Link to={`#`}>
             <div className='brand-card shadow p-2 cursor-pointer'>
             <img className='w-100 brand-img p-1' src={brand.image}/>
             <h3 className='text-main-color mt-3'>{brand.name}</h3>
             </div>
             </Link>
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
