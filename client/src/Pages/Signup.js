import React, {useState} from 'react'


const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  async function registerUser(){
    const response = await fetch('https://localhost:5000/api/register', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
  }

  return (
    <div>
        This is signup page

        <div>
          <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/><br/>
          <input type="email" placeholder="Enter your email" onChange = {(e) => setEmail(e.target.value)}/><br/>
          <input type="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <input type="Submit" value="Register"/>
        
    </div>
  )
}

export default Signup
