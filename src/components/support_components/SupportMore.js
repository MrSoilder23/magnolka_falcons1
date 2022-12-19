import React from 'react'
import '../styles/SupportMore.css'
import kitku from '../../images/dabloonCat.jpg'

function SupportMore() {
  return (
    <div className='supportMore'>
        <div className="supportMoreL">
            <img src={kitku} alt="img" />
        </div>
        <div className="supportMoreR">
            <div className="supportMoreText">
                <h1>Lorem Ipsum</h1>
                <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorem porro aliquam distinctio magnam voluptatem voluptatibus enim quidem? Laborum, iusto?
                </h2>
            </div>
        </div>
    </div>
  )
}

export default SupportMore