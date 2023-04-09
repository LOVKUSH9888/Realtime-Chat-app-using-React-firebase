import React from 'react'
import Navbar from './Navbar'
import Form from './Form';
import MessageContainter from './MessageContainter';

const Chatbox = () => {
  return (
    <>
        <Navbar/>
        <Form/>
        <MessageContainter/>
    </>
  )
}

export default Chatbox;

