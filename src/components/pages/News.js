import React from 'react'
import NewsCard from '../NewsCard'
import '../styles/News.css'

import dabloonCat from '../../images/dabloonCat.jpg'

function News() {
  return (
    <div className='newsPage'>
        <div className='newsPageBG'>
            <h1>Wydarzenia</h1>
        </div>
        
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
        <NewsCard 
            link='/wydarzenia'
            path={dabloonCat}
            header='Lorem Ipsum'
            date='20/12/2022'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga libero nobis dolores repellendus natus fugit, quaerat ipsa quisquam adipisci.'
            />
    </div>
  )
}

export default News