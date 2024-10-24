import React from 'react'
import json from '../../prueba.json'

export const OpcionMenu = () => {
    // let datos = json;
    let arreglo = [1 , 2, 3]
    return (
        <div>
            {Object.keys(json).map(key => (
                <div key={key}>
                    {key}: {JSON.stringify(json[key])}
                </div>
            ))}
            {
                arreglo.map(a=> a)
            }
{/* 
            {
                datos.map(j => j)
            } */}
        </div>
    );
}
