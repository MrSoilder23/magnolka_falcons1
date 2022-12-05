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
          <Link to='/about'>
            O nas
          </Link>
        </li>
        <li className='navItem'>
          <Link to='/wsparcie'>
            Wsparcie
          </Link>
        </li>
        <li className='navItem'>
          <Link to='/roboty'>
            Roboty
          </Link>
        </li>
        <li className='navItem'>
          <Link to='/contact'>
            Kontakt
          </Link>
        </li>
      </div>
    </div>
  )
}

export default Navbar