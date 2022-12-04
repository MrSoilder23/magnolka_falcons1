import React from 'react'
import { Link } from 'react-router-dom'

function Cards(props) {
  return (
    <div className='cardComp'>
        <Link to={props.link}>
            <div className="iconComp">
                <img src={props.path} alt="ikona" />
            </div>
            <div className="cardText">
                <h2>{props.header}</h2>
                <h3>{props.text}</h3>
            </div>
        </Link>
    </div>
  )
}

export default Cards