import React from 'react'
import Logo from '../atoms/Logo/Logo'
import ItemList from '../molecules/ItemList/ItemList'
//import style from './navbar.module.css'
import ThemeSwitch from '../atoms/ThemeSwitch/ThemeSwitch'

const NavBar = () => {
return (
    <div className="backdrop-blur-md bg-gradient-to-r from-indigo-950 via-purple-950 text-amber-200 shadow-2xl fixed top-0 left-0 -full z-50 min-w-12/12 flex justify-between items-center">
        <Logo/>
        <ItemList />
        <ThemeSwitch />
    </div>

    )
}

export default NavBar
