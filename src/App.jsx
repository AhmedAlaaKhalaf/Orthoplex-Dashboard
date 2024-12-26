import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Brands from './components/Brands/Brands';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import Orders from './components/Orders/Orders';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



let query = new QueryClient();
let x= createBrowserRouter([
  {
    path:'',element:<Layout/> ,children:[
      {index:true ,element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:'login' ,element:<Login/>},
      {path:'brands' ,element:<Brands/>},
      {path:'products' ,element:<Products/>},
      {path:'orders' ,element:<Orders/>},
      {path:'register' ,element:<Register/>},
      {path:'*' ,element:<Notfound/>}
    ]
  }
])

function App() {

  return <>
  <QueryClientProvider client={query}>
  <UserContextProvider>
           <RouterProvider router={x}></RouterProvider>

    </UserContextProvider>
  </QueryClientProvider>
  </>
}

export default App
