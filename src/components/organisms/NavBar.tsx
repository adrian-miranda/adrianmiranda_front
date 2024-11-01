import React from 'react'
import style from './navbar.module.css'
import logo from '../../assets/images/logo_adrian_miranda_final.png'

export const NavBar = () => {
  return (
    <div className={style.navbarcuerpo}>
      <img src={logo} alt="la imagen"  className={style.logo}/>
      <h1>AdrianMiranda.cl</h1>
      <ul className={style.ul}>
        <li className={style.lista}>Quien soy</li>
        <li className={style.lista}>Servicios</li>
        <li className={style.lista}>Curruculum</li>
        <li className={style.lista}>Casos de exito</li>
        <li className={style.lista}>Contacto</li>
      </ul>
    </div>
  )
}
