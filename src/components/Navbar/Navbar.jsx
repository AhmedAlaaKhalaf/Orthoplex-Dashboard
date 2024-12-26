import React, { useContext} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import logo from '../../assets/orthoplex-logo.webp'


export default function CollapsibleNavbar() {

let {userLogin,setUserLogin} = useContext(UserContext);
let navigate = useNavigate();

  function logOut () {
    localStorage.removeItem('userToken');
    setUserLogin(null);
    navigate('/login');
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-black px-5 py-3 rounded-5">
        <Navbar.Brand href="/"><img src={logo} width={150}></img></Navbar.Brand>
        <Navbar.Toggle className='border-0 text-success' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-between gap-4'>
          <Nav className="me-auto gap-3 fs-5">
          {userLogin !== null ? 
          <> <li className='nav-list-item'><NavLink className={'text-white text-decoration-none'} to="">Dashboard</NavLink></li> 
           </>:null}
          </Nav>
          <Nav className="gap-3 fs-5 align-items-center"> 
          {userLogin !== null ? <>
            <li onClick={logOut} className='nav-list-item'><span className={'text-white text-decoration-none cursor-pointer'}>LogOut</span></li> 
            <li className='nav-list-item'><p className={'text-white text-decoration-none m-0'}>Hello</p></li> 
          </>: <>
          <li className='nav-list-item'><NavLink className={'text-white text-decoration-none'} to="/login">Login</NavLink></li> 
          <li className='nav-list-item'><NavLink className={'text-white text-decoration-none'} to="/register">Register</NavLink></li>
          </>}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

