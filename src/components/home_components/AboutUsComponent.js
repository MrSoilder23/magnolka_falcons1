import React from 'react'
import '../styles/AboutUsComponent.css'
import teamImg from '../../images/happi.jpg'
import { Link } from 'react-router-dom'

function AboutUsComponent() {
  return (
    <div className='aboutUsComp'>
        <div className="leftSide">
            <img src={teamImg} alt="Magnolka Falcons" className='aboutUsImg'/>
        </div>
        <div className="rightSide">
            <h2>
                Kim jesteśmy?
            </h2>
            <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus fugit at obcaecati, non recusandae, cumque dicta aliquid voluptas magni sint commodi exercitationem expedita ab libero veritatis assumenda omnis incidunt.
            </h3>
            <div className="aboutBtnFrame">
                <Link to='/about' className='aboutButton' >Więcej</Link>
            </div>
        </div>
    </div>
  )
}

export default AboutUsComponent