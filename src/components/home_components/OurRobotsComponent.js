import React from 'react'
import '../styles/OurRobotsComponent.css'
import robotImg from '../../images/kerfus.png'
import { Link } from 'react-router-dom'

function OurRobotsComponent() {
  return (
    <div className='ourRobotComp'>
        <div className="secBackground">
        </div>
        <h1>
            Nasze Roboty
        </h1>
        <div className='robotCard'>
            <div className='robotLeftSide'>
                <div className='robotHeaders'>
                    <Link to='/roboty'>
                        <h2>
                        Falcon MK1
                        </h2>
                    </Link>
                </div>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea unde repellat ipsum, omnis fugiat quibusdam in explicabo iure laboriosam est.
             </h3>
            <div className="moreLink">
                <Link to='/roboty'>
                    <h3>Dowiedz się  więcej</h3>
                </Link>
            </div>

            </div>
            <div className="robotRightSide">
                <img src={robotImg} alt="Robot Falcon MK1" />
            </div>
        </div>
    </div>
  )
}

export default OurRobotsComponent