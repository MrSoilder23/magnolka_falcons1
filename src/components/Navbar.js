import React, {useState} from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../images/magnolkaPP2.svg'
import Hamburger from '../images/hamburgerIcon.svg'


function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
    console.log(openLinks)
  };

  return (
    <div className='navbar'>
      <Link to='/' className='navImg'>
        <img src={Logo} alt="Magnolka Falcons" className='logoImg'/>
      </Link>

      <div className="navList" id={openLinks ? "open" : "close"}>
        <li className='navItem'>
          <Link to='/about' className='navBtn'>
            O nas
          </Link>
        </li>
        <li className='navItem'>
          <Link to='/wsparcie' className='navBtn'>
            Wsparcie
          </Link>
        </li>
        <li className='navItem'>
          <Link to='/roboty' className='navBtn'>
            Roboty
          </Link>
        </li>
        <li className='navItem' >
          <Link to='/contact' className='navBtn'>
            Kontakt
          </Link>
        </li>
      </div>

      <div className='hamburger'>
        <button className='hamburgerButton' onClick={toggleNavbar}>
            <img src={Hamburger} alt="" />
        </button>
      </div>

    </div>
  )
}

export default Navbar