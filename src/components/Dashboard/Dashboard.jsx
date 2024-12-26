import React, {useContext} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import darkLogo from '../../assets/orthoplex-logo-dark.webp'

// ---------------- Dashboard Function --------------
export default function Dashboard() {

let {userLogin,setUserLogin} = useContext(UserContext);
let navigate = useNavigate();

  function logOut () {
    localStorage.removeItem('userToken');
    setUserLogin(null);
    navigate('/login');
  }
  return <>
  <Navbar collapseOnSelect expand="lg" className="bg-white dashboard-nav px-5 py-3 rounded-start-5 flex-column align-items-start gap-4">
        <Navbar.Brand href="/" className='w-50'><img src={darkLogo} width={150}></img></Navbar.Brand>
        <Navbar.Toggle className='border-0 text-main-color' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-between gap-4 align-items-start position-relative'>
        

          <Nav className="gap-5 fs-5 align-items-start flex-column justify-content-between"> 
          {userLogin !== null ? <>
                
              <div className='dashboardLinks'>
              <li className='nav-list-item py-2'><NavLink className={'text-black text-decoration-none p-4'} to="/brands">Brands</NavLink></li> 
              <li className='nav-list-item py-2'><NavLink className={'text-black text-decoration-none p-4'} to="/orders">Orders</NavLink></li> 
                <li className='nav-list-item py-2'><NavLink className={'text-black text-decoration-none p-4'} to="/products">Products</NavLink></li> 
              </div>
            <div className='logOut position-absolute bottom-0'><li onClick={logOut} className='nav-list-item'><button className={'text-black text-decoration-none cursor-pointer bg-main-color text-white rounded-3'}>LogOut</button></li>
            </div>             
          </>: <>
          <li className='nav-list-item'><NavLink className={'text-black text-decoration-none'} to="login">Login</NavLink></li> 
          <li className='nav-list-item'><NavLink className={'text-black text-decoration-none'} to="register">Register</NavLink></li>
          </>}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
   
  </>

}

