import React from 'react'
import "./Firmy.css"

const Firmy = () => {
  return (
    <div className='firmy'>
        <article className='clanek'>
          <h2>
            DTR - nejlepší výběr kandidátů pro Vaši firmu
          </h2>
          <br />
          <p>
            DTR je personální webová aplikace, která se zabývá výběrem a zprostředkováním vhodných kandidátů kterými jsou studenti pro Vaši firmu. 
            Využijte našich služeb a získejte kvalitní zaměstnance, kteří budou odpovídat Vašim požadavkům.
          </p>
        </article>
        
        <article className='clanek'>
          <h2>
            DTR - jednoduché a rychlé zprostředkování
          </h2>
          <br />
          <p>
            DTR nemá složitou instalaci, stačí se jen zaregistrovat a kandidát může začít. Po vyplnění formuláře se kandidát dostane do databáze, ve které se můžou procházet jeho výsledky a posoudit tak jeho možnost získání práce.
          </p>
        </article>
    </div>
  )
}

export default Firmy