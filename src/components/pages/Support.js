import React from 'react'
import DonateUs from '../support_components/DonateUs'
import Supporters from '../support_components/Supporters'
import SupportersAbout from '../support_components/SupportersAbout'
import SupportHeader from '../support_components/SupportHeader'
import SupportMore from '../support_components/SupportMore'

function Support() {
  return (
    <div>
        <SupportHeader />
        <SupportersAbout />
        <DonateUs />
        <SupportMore />
        <Supporters />
    </div>
  )
}

export default Support