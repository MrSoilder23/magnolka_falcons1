import React from 'react'
import TeamHeader from '../team_components/TeamHeader'
import TeamInfoComponent from '../team_components/TeamInfoComponent'
import TeamMoreInfo from '../team_components/TeamMoreInfo'

function Team() {
  return (
    <div>
      <TeamHeader />
      <TeamInfoComponent />
      <TeamMoreInfo />
    </div>
  )
}

export default Team