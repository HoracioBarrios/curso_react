import React from 'react'
import CarWidget from './CarWidget.js'

const Header = () => {
    return (
        <header className= 'row p-3' id = 'header' >
            <h1 className= 'col-sm-4 pl-5'>Wildvest</h1>
            <nav className="nav justify-content-end col-sm-7">
              <a className="nav-link active" href="#">Remeras</a>
              <a className="nav-link active" href="#">Personalizados</a>
              <a className="nav-link active" href="#">Mayoristas</a>
            <CarWidget/>
            </nav>
        </header>
    )
}

export default Header