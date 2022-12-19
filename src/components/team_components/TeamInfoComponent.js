import React from 'react'
import '../styles/TeamInfoComponent.css'

import teamImg from '../../images/happi.jpg'

function TeamInfoComponent() {
  return (
    <div className='teamInfoComp'>
        <div className="teamLSide">
            <h2>Lorem Ipsum</h2>
            <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id atque quibusdam soluta nam itaque. Eveniet amet ipsa quasi dolorem!
            </h3>
        </div>
        <div className="teamRSide">
            <img src={teamImg} alt="zdjecie Drużynowe" />
        </div>
    </div>
  )
}

export default TeamInfoComponent