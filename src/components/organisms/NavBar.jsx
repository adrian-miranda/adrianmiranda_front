import React from 'react'
import Logo from '../atoms/Logo/Logo'
import ItemList from '../molecules/ItemList/ItemList'
import style from './navbar.module.css'


const NavBar = () => {
return (
    <div className={`bg-blue-500 p-4 ${style.ancho}`}>
        <Logo/>
        <ItemList/>
    </div>

    )
}

export default NavBar
