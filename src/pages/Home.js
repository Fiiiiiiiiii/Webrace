import "./Home.css"
import background from "../images/student1.jpg"
import img1 from "../images/Prostredi.jpg"
import img2 from "../images/rozvoj.jpg"

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
        <article>
                <h2 className="podnadpis">
                    Co je to DTR?
                </h2>
                <p className="text">
                    - DTR je webová stránka, která ti pomůže najít práci v IT. <br />
                    - Zde si můžeš vytvořit účet a následně si vybrat z mnoha nabídek práce. <br />
                    - Pokud jsi zaměstnavatel, tak si můžeš vytvořit účet a následně zde vytvořit inzerát na práci. <br />
                </p>
        </article>

        <div className="section">
          <div className="section1">
            <h1>Zažij s námi dobrodružství</h1>
            <img src={img1} alt="" />
          </div>
          <div className="section2">
            <img src={img2}  alt="" />
            <h1>Rozbíjej svoje znalosti</h1>
          </div>
        </div>

        <div className='ucet2'>
            <h1>Registrace</h1>

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
            <button>Register</button>
            </form>
        </div>
        
    </div>
  }
  
  
  export default Home