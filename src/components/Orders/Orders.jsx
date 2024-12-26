import React, { useEffect, useState } from 'react'
import Style from './Orders.module.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../LoadingScreen/Loading';
import Dashboard from '../Dashboard/Dashboard';

// ---------------- Orders Function --------------
export default function Orders() {
  function getOrders(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders`);
  }

let {data, isLoading} = useQuery({
queryKey:['orders'],
queryFn:getOrders,
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
    <h1>Orders</h1>
    <div className='row'>
    <div className='tableScroll d-flex gap-4 justify-content-center align-items-center d-sm-none'>
      <h3>Scroll</h3>
      <div className="scrollright text-black">
    <div className="chevrons">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
    </div>
</div>
    </div>
       <div className='w-100 ordersTableContainer overflow-x-auto'>
       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
           <thead className="table-main">
      <tr>
        <th scope="col" className="h4 py-3 text-main-color">
          Name
        </th>
        <th scope="col" className="h4 py-3 text-main-color">
          Email
        </th>
        <th scope="col" className="h4 py-3 text-main-color">
          Phone
        </th>
        <th scope="col" className="h4 py-3 text-main-color">
          Total
        </th>
      </tr>
           </thead>
           <tbody className='my-3'>
    {data?.data.data.map((order)=> 
      <tr key={order.id} className="bg-white border-bottom border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-25">
          <h5>{order.user.name}</h5>
        </td>
        <td className="w-25 px-2 py-4">
        <h5>{order.user.email}</h5>
        </td>
        <td className="w-25 px-2 py-4">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <h5>{order.user.phone}</h5> 
            </div>
          </div>
        </td>
        <td className="w-25 px-2 py-4">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <h5>{order.totalOrderPrice} EGP</h5> 
            </div>
          </div>
        </td>
      </tr>
    )}
           </tbody>
        </table>
       </div>
     </div>
    </div>
        </div>
        </div>
    </div>
   </>
   }
    </>
}
