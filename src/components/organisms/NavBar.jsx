import React from 'react'
import Logo from '../atoms/Logo/Logo'
import ItemList from '../molecules/ItemList/ItemList'
import style from './navbar.module.css'


const NavBar = () => {
return (
    <div className={`bg-slate-900 p-4 ${style.ancho}`}>
        <button>Tema</button>
        <Logo/>
        <ItemList/>
    </div>

    )
}

export default NavBar
