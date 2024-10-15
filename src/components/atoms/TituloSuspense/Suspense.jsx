import React from 'react'
import { Suspense } from "react";
import style from './titulo_suspense.module.css'

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
const MensajeDeInicio = () => {
    return(
        <>
            <Suspense fallback={<Loading />}>
                <h1 className={style.titulo}>En proceso</h1>
            </Suspense>
        </>
    )
}

export default MensajeDeInicio

