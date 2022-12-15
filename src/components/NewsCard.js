import React from 'react'
import { Link } from 'react-router-dom'

function NewsCard(props) {
  return (
    <div className='newsCard'>
      <div className="newsImg">
        <Link to={props.link} >
          <img src={props.path} alt="Zdjęcie nowości" />
        </Link>
      </div>

      <div className="newsText">
        <div>
        <Link to={props.link}>
          <h2>{props.header}</h2>
        </Link>
        </div>
        <h3 className='newsDate'>{props.date}</h3>
        <h3 className='newsPropText'>{props.text}</h3>
      </div>
    </div>
  )
}

export default NewsCard