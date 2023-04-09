import React from 'react'
import logo from '../logo.png'

const MessageContainter = () => {
  return (
    <div className='message-container'>
      <div className="message-box">
        <img src={logo} alt="logo" />
        <p>This is message</p>
      </div>
    </div>
  )
}

export default MessageContainter
