import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    useEffect(()=>{

    },[])
  return <>
      <Outlet></Outlet>
</>
}
