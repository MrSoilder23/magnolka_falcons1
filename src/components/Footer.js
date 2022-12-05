import React from 'react'
import './styles/Footer.css'
import facebook from '../images/icons8-facebook.svg'
import instagram from '../images/icons8-instagram.svg'
import github from '../images/icons8-github.svg'

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <h1>Sledź nas</h1>
      <div className="icons">
        <Link to=''>
          <img src={facebook} alt="facebook" className='socialIcons'/>
        </Link>
        <Link to=''>
          <img src={instagram} alt="instagram" className='socialIcons'/>
        </Link>
        <Link to=''>
          <img src={github} alt="github" className='socialIcons'/>
        </Link>
      </div>
    </div>
  )
}

export default Footer