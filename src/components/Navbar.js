import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.css';
import {IconContext} from 'react-icons/lib';
function Navbar() {
  const [click,setClick] = useState(false);
  const [button,setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  }

  useEffect(()=>{
    showButton();
  },[]);
  window.addEventListener('resize',showButton);
  return (
    <>
      <IconContext.Provider value={{color:'#fff'}}>
        <div className ="navbar">
            <div className='navbar-container container'>
                <Link to="/" className="navbar-logo">
                  <MdFingerprint className='navbar-icon' onClick={closeMobileMenu}/>
                    Antharya
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click? 'nav-menu active':'nav-menu'}>
                  <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/AboutUs" className="nav-links" onClick={closeMobileMenu}>
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Portfolio" className="nav-links" onClick={closeMobileMenu}>
                      Portfolio
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link to="/ContactUs" className="nav-links" onClick={closeMobileMenu}>
                      Contact Us
                    </Link>
                  </li>
                </ul>   
            </div>
        </div>
        </IconContext.Provider>
    </>
  )
}

export default Navbar