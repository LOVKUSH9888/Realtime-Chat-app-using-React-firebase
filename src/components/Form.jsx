import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(message);
    }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="message" placeholder='Type Message..' onChange={e=>setMessage(e.target.value)} value={message}/>
      <button type="submit">send</button>

    </form>
  )
}

export default Form;
