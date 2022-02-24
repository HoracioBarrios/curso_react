import React from 'react'

const Header = () => {
    return (
        <header class= "row p-3" >
            <h1 class= "col-sm-4 pl-5">Wildvest</h1>
            <nav class="nav justify-content-end col-sm-8">
              <a class="nav-link active" href="#">Remeras</a>
              <a class="nav-link active" href="#">Personalizados</a>
              <a class="nav-link active" href="#">Mayoristas</a>
            </nav>
        </header>
    )
}

export default Header