import React, { useState, useEffect } from 'react'
import { Auth, db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

const MessageContainer = () => {
  const [chat, setChat] = useState([])
  const [user] = useAuthState(Auth)

  const chatRef = collection(db, "messages")

  useEffect(() => {
    const getMessages = async () => {
      const res = await getDocs(chatRef)
      if (res) {
        setChat(res.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      }
    }
    getMessages()
  }, [chat])

  return (
    <div className='messages-container'>
      {user && chat ?
        <>
          {chat.map(message=>(
            <div className={`message-box ${user.uid === message.uid ? "current-user" : ""}`}>
              <img src={message.logo} alt={message.user} />
              <p>{message.message}</p>
            </div>
          ))}
        </>
        :
        <p>Make sure to login</p>
      }
    </div>
  )
}

export default MessageContainer;