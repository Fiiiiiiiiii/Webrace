import React from 'react'
import "./Ucet.css"

//handleSubmit
const handleSubmit = async (e) => {
  e.preventDefault()

 

  const name = e.target[0].value
  const email = e.target[1].value
  const password = e.target[2].value
  let isAdmin = false
  let isBanned = false
  let isVerified = false 
  let verificationCode = "4651215"

  const userData = `{
    "name": "${name}",
    "email": "${email}",
    "password": "${password}",
    "isAdmin": ${isAdmin},
    "isBanned": ${isBanned},
    "isVerified": ${isVerified},
    "verificationCode": "${verificationCode}"
  }`;

  try {

    const res = await fetch("https://webrace.azurewebsites.net/api/Users/AddUser", {
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: userData
    })

    const data = await res.json()
    console.log(data)

  } catch (err) {
    console.log(err)
  }
}

const Ucet = () => {
  return (
    <div className='ucet1'>
        <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Jméno"
                required
              />
              <input
                type="text"
                placeholder="Email"
                required
              />
              <input
                type="password"
                placeholder="Heslo"
                required
              />
            <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Ucet