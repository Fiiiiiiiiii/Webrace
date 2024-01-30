import "./Home.css"
import background from "../images/student1.jpg"

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
        
    </div>
  }
  
  
  export default Home