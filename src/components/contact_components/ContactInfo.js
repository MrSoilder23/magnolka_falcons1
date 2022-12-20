import React from 'react'
import '../styles/ContactInfo.css'

function ContactInfo() {
  return (
    <div className='contactInfo'>
        <h1>Kontakt</h1>
        <div className='info'>
            <div>
                <h2>Email</h2>
                <h3>magnolkafalcons@gmail.com</h3>
            </div>
            <div>
                <h2>Telefon</h2>
                <h3>000 000 000</h3>
                <h3>111 111 111</h3>
            </div>
            <div>
                <h2>Lokalizacja</h2>
                <h3>Lublin Lckziu 000</h3>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo