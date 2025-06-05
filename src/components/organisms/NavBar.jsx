import React from 'react'
import Logo from '../atoms/Logo/Logo'
import ItemList from '../molecules/ItemList/ItemList'
import style from './navbar.module.css'


/* const NavBar = () => {
return (
    <div className={style.ancho}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Logo/>
            <button     className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <ItemList/>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    )
} */

const NavBar = () => {
return (
    <>
        <Logo/>
        <ItemList/>
    </>

    )
}

export default NavBar
