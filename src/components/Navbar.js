import React from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../images/magnolkaPP2.svg'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/' className='navImg'>
        <img src={Logo} alt="Magnolka Falcons" className='logoImg'/>
      </Link>

      <div className="navList">
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
        <li className='navItem'>
          <Link to='/contact' className='navBtn'>
            Kontakt
          </Link>
        </li>
      </div>
    </div>
  )
}

export default Navbar