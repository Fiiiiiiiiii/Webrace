import "./Home.css"
import background from "../images/student1.jpg"

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

const Home = () => {
    return <div className="home">
        <img className="background" src={background} alt="" />
        <div className="box">
            <p className="basictext">
                Hledáš práci svých snů <br />
                A chceš ukázet své znalosti v IT? <br />
                Pak jsi tu správně! <br />
            </p>
            <h1 className="nadpis">
                DTR
            </h1>
            <br />
            
        </div>

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
        
    </div>
  }
  
  
  export default Home