import React from 'react'
import NewsCard from '../NewsCard'
import '../styles/NewsComponent.css'
import dabloonCat from '../../images/dabloonCat.jpg'

function NewsComponent() {
  return (
    <div className='newsComp'>
        <h1>Nowości</h1>
        <div className="newsList">
            <NewsCard 
            link='/wydarzenia'
            path={dabloonCat}
            header='Lorem Ipsum'
            date='20/12/2022'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga libero nobis dolores repellendus natus fugit, quaerat ipsa quisquam adipisci.'
            />

            <NewsCard 
            link='/wydarzenia'
            path={dabloonCat}
            header='Lorem Ipsum'
            date='20/12/2022'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga libero nobis dolores repellendus natus fugit, quaerat ipsa quisquam adipisci.'
            />
        </div>
    </div>
  )
}

export default NewsComponent