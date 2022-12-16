import React from 'react'
import '../styles/DonateUs.css'
import kitku from '../../images/dabloonCat.jpg'

function DonateUs() {
  return (
    <div className='donateUs'>
        <div className="donateLSide">
            <div className="donateText">
                <h1>Każda <span>złotówka</span> się liczy</h1>
                <h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias obcaecati illum dolorum repellat eos, sed praesentium natus consequuntur! Autem, optio!
                </h2>
            </div>
        </div>
        <div className="donateRSide">
            <img src={kitku} alt="obrazek" />
        </div>
    </div>
  )
}

export default DonateUs