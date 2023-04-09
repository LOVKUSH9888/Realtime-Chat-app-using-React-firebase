import React from 'react'
import { Auth, Provider } from './firebase-config';
import {useAuthState} from 'react-firebase-hooks/auth'
import {signInWithPopup} from 'firebase/auth'
import {signOut} from 'firebase/auth'

const Navbar = () => {
  const [user] = useAuthState(Auth)

  const signIn = async () => {
    signInWithPopup(Auth, Provider)
    .then((res)=>console.log(res))
    .catch(err=>console.log(err));
  }

    const logOut = async () => {
      signOut(Auth)
      .then(()=>alert('You are now logged out.'))
      .catch(err=>console.log(err));
    }


  return (
    <div className='header'>
      <h3>Firechat</h3>
      {/*Now I am using the ternary operator to show this or not when the user is there or not*/}
      {!user?
      <button onClick={signIn}>Sign in</button>
      :<button onClick={logOut}>logout</button>
      }
    </div>
  )
}

export default Navbar;
