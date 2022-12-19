import React from 'react'
import '../styles/TeamMoreInfo.css'

import teamImg from '../../images/happi.jpg'

function TeamMoreInfo() {
  return (
    <div className='teamMoreInfo'>
        <div className="teamMoreInfoL">
            <img src={teamImg} alt="" />
        </div>
        <div className="teamMoreInfoR">
            <h2>Lorem Ipsum</h2>
            <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem in earum tempore amet sunt dolore non. Tenetur voluptatem nesciunt ratione praesentium ullam ducimus odit dolores culpa commodi distinctio. Consequatur?
            </h3>
        </div>
    </div>
  )
}

export default TeamMoreInfo