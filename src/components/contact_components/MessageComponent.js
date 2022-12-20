import React from 'react'
import '../styles/MessageComponent.css'

import teamImg from '../../images/happi.jpg'

function MessageComponent() {
  return (
    <div className='msgComponent'>
        <div className="msgLSide">
            <h1>Zostaw nam wiadomość!</h1>

            <div className="formPrompt">
                <div className="name">
                    <h2>Imię</h2>
                    <input type="text" name='firstName' className='firstName' placeholder='Imię' tabIndex='1' />
                </div>

                <div className="emailBox">
                    <h2>Email</h2>
                    <input type="email" name='email' className='email' placeholder='Adres Email' tabIndex='2' />
                </div>

                <div className="messageBox">
                    <h2>Wiadomość</h2>
                    <textarea name="message" className='message' cols="30" rows="10" placeholder='Wiadomość'/>
                </div>
                <div className="messageButtonFrame">
                    <button className='messageButton'>
                        Wyślij
                    </button>
                </div>
            </div>
        </div>
        <div className="msgRSide">
            <img src={teamImg} alt="" />
        </div>
    </div>
  )
}

export default MessageComponent