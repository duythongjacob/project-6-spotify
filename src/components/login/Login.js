import React from 'react'
import './Login.css'
import {loginUrl} from  '../../connect/spotify'

function Login() {


  return (
    <div className='login'>
      {/* Spotify logo */}
      {/* <h1>login page</h1> */}
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
      {/* Spotify button */}
      <a href={loginUrl}> LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login