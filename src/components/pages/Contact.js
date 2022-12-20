import React from 'react'
import ContactHeader from '../contact_components/ContactHeader'
import ContactInfo from '../contact_components/ContactInfo'
import MessageComponent from '../contact_components/MessageComponent'

function Contact() {
  return (
    <div>
      <ContactHeader />
      <MessageComponent />
      <ContactInfo />
    </div>
  )
}

export default Contact