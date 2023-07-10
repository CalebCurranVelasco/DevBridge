import React, {useState} from 'react';
import { Link } from 'react-router-dom';
 
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <navbar classname="navbar">
        <div classname="navbar-container">
          <Link to='/'classname="navbar-logo">
            DevBridge
          </Link>
          <div classname='menu-icon' onClick={handleClick}>
            <i classname={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={'click' ? 'nav-menu active' : 'nave-menu'} />
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Service
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='nav-links-mobile' onClick={closeMobileMenu}>
                Register
              </Link>
            </li>
        </div>
      </navbar>
    </>
  )
}

export default Navbar