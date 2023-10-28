import React, { useState } from 'react'

function Register() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const handleSubmit=()=>{
        
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter UserName' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      <input type='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' placeholder='Enter Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
      <button type='submit'>Regester</button>
    </form>
  )
}

export default Register
