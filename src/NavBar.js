import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavDropdown  } from "react-bootstrap";
function NavBar()
{
    const navigate=useNavigate()
    const [user,setUser]=useState('');
    useEffect(()=>{
        let userName=localStorage.getItem('userName')
        if(userName)
        {
            setUser(userName)
        }
    },[user])
    function signOut()
    {
        localStorage.removeItem('login');
        localStorage.removeItem('userName');
        navigate('/login')
         alert(`${user} ,You are signed out`)
        console.log('hello from signout')
    }
    return(
        <div>
             <ul className="navbar-links">
              <li > <NavLink to="/" className="navbar-link">Home</NavLink></li>
              <li> <NavLink to="/about" className="navbar-link">About</NavLink></li>
              <li> <NavLink to="/contact" className="navbar-link">Contact</NavLink></li>
              <li> <NavLink to="/services" className="navbar-link">Services</NavLink></li>
               {
                localStorage.getItem('login')?
            //     <li onClick={signOut} className="signOut">
            //         {/* <select> */}
            //            {/* <option>{user}</option> */}
            //             {/* <option onClick={signOut}>SignOut</option> */}
            //         {/* </select> */}
            //   SignOut
                
                    
            //     </li>
           
              <NavDropdown title={user} className="navbar-link">
              <NavDropdown.Item onClick={signOut}>
          
               
              SignOut
              </NavDropdown.Item>
              <NavDropdown.Item  ><NavLink to="/page" className="navbar-link">Page</NavLink></NavDropdown.Item>
                  
              
              </NavDropdown>
           
                :
                <li> <NavLink to="/login" className="navbar-link">Login</NavLink></li>
                
               }
               
               
             </ul>
        </div>
    )

}
export default NavBar;