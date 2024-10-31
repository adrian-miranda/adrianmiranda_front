import React from 'react'
import { Suspense } from "react";
import suspense from './titulo_suspense.module.css'
import estiloLogo from '../ImagenDeFondo/imagen_de_fondo.module.css'


import logo from "../../../assets/images/logo_adrian_miranda_final.png" 

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
const MensajeDeInicio = () => {
    return(
        <>
            <Suspense fallback={<Loading />}>
                <h1 className={suspense.titulo}>En proceso</h1>
                <img src={logo} alt='logo de Adrian Miranda Desarrollador' className={estiloLogo.imagen}/>
            </Suspense>
        </>
    )
}

export default MensajeDeInicio

