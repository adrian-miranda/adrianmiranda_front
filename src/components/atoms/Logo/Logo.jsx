import React from 'react'
import logo from '../../../assets/images/logo_adrian_miranda_final.png'
import style from './logo.module.css'

const Logo = () => {
  return (
    <img src={logo} className={style.logo} alt="logo adrian miranda desarrollador web" />
  )
}

export default Logo
