import React from 'react'
import "./Navbar.css"
import logo from "../images/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react"

const links = [
  {
      id: 1,
      url: "/",
      text: "Domů",
  },
  {
      id: 2,
      url: "/zajem",
      text: "Mám zájem",
  },
  {
    id: 3,
    url: "/Pro-firmy",
    text: "Pro firmy",
},
//   {
//       id: 4,
//       url: "/Ucet",
//       text: "Účet",
//   },
]



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return <nav>
    <div className="navigation">
        <div className="nav-header">
            <img className='navbarLogo' src={logo} alt="" />
            <button onClick={() => setShowMenu(!showMenu)}>
                  <GiHamburgerMenu className='hamburger-icon'/>
            </button>
        </div>
        <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
            <ul>
                {
                    links.map( (oneLink) => {
                        const {id, text, url} = oneLink

                        return <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    })
                }
            </ul>
        </div>

        <div className='ucet'>
            <a href="/Ucet">Ucet</a>
        </div>
    </div>
  </nav>

}

export default Navbar