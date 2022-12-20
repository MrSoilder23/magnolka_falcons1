import React from 'react'
import axios from 'axios';

import '../styles/MessageComponent.css'

import teamImg from '../../images/happi.jpg'
import { Component } from 'react'

class MessageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
      handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST",
          url:"http://localhost:3002/send",
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
          } else if (response.data.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }
      resetForm(){
        this.setState({name: '', email: '', message: ''})
      }
    render() {
        return (
            <div className='msgComponent'>
        <div className="msgLSide">
            <h1>Zostaw nam wiadomość!</h1>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="formPrompt">
                <div className="name">
                    <h2>Imię</h2>
                    <input type="text" name='firstName' className='firstName' placeholder='Imię' tabIndex='1' value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>

                <div className="emailBox">
                    <h2>Email</h2>
                    <input type="email" name='email' className='email' placeholder='Adres Email' tabIndex='2' value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                </div>

                <div className="messageBox">
                    <h2>Wiadomość</h2>
                    <textarea name="message" className='message' cols="30" rows="10" placeholder='Wiadomość' value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
                </div>
                <div className="messageButtonFrame">
                    <button type='submit' className='messageButton'>
                        Wyślij
                    </button>
                </div>
            </div>
            </form>
        </div>
        <div className="msgRSide">
            <img src={teamImg} alt="" />
        </div>
    </div>
  )
}
onNameChange(event) {
    this.setState({name: event.target.value})
}
onEmailChange(event) {
    this.setState({email: event.target.value})
}
onMessageChange(event) {
    this.setState({message: event.target.value})
}
}

export default MessageComponent