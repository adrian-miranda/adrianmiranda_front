import React from 'react'
import logo from '../../../assets/images/logo_adrian_miranda_final.png'
import style from './imagen_de_fondo.module.css';

const ImagenDeFondo = () => {
  return (
    <div>
        <img src={logo} alt='logo de Adrian Miranda Desarrollador' className={style.imagen}/>
    </div>
  )
}

export default ImagenDeFondo
