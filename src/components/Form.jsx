import React from 'react'
import { useState } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Auth, db} from './firebase-config'
import {collection, addDoc} from 'firebase/firestore'

const Form = () => {
    const [message, setMessage] = useState("")

    const [user] = useAuthState(Auth)

    const messageRef = collection (db, "messages")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(message);
        if(user){
          const res = await addDoc(messageRef, {
            message: message,
            user: user.displayName,
            logo: user.photoURL,
            uid: user.uid
          })
          {/*res = response*/}
          console.log(res);
          alert ("send...")

        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="message" placeholder='Type Message..' onChange={e=>setMessage(e.target.value)} value={message}/>
      <button type="submit">send</button>

    </form>
  )
}

export default Form;
