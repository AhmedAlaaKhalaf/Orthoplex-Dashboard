import React, { useContext, useEffect, useState } from 'react'
import Dashboard from '../Dashboard/Dashboard';
import Brands from '../Brands/Brands';


export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
      setIsLoading(true)
    },[])
  return <>
    <Brands/>
    </>
}
