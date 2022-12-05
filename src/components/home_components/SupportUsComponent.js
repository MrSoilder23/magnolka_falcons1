import React from 'react'
import Cards from '../Cards'
import '../styles/SupportUsComponent.css'
import hourglass from '../../images/hourglass.svg'
import rocket from '../../images/rocket.svg'
import travel from '../../images/travelPlanet.svg'

function SupportUsComponent() {
  return (
    <div className='supportUsComp'>
        <div className='whyUsSection'>
            <h1>
                Dlaczego my?
            </h1>
            <h2>
                Wspierając pomagasz
            </h2>
        </div>
        <div className="cardsList">
            <Cards 
            link='/wsparcie'
            path={hourglass}
            header='Buduj Przyszłość'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error tempore possimus officiis eaque similique omnis alias impedit nobis, totam, minus fugiat id atque sapiente ducimus quibusdam! Voluptatum commodi quae amet.'
            />

            <Cards 
            link='/wsparcie'
            path={travel}
            header='Lorem Ipsum'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error tempore possimus officiis eaque similique omnis alias impedit nobis, totam, minus fugiat id atque sapiente ducimus quibusdam! Voluptatum commodi quae amet.'
            />

            <Cards 
            link='/wsparcie'
            path={rocket}
            header='Benefity'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error tempore possimus officiis eaque similique omnis alias impedit nobis, totam, minus fugiat id atque sapiente ducimus quibusdam! Voluptatum commodi quae amet.'
            />
        </div>
    </div>
  )
}

export default SupportUsComponent