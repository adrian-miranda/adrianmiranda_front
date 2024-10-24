import React from 'react'
import json from '../../prueba.json'

export const OpcionMenu = () => {
    let datos = json.otra_llave;
    let arreglo = [1 , 2, 3]
    let arreglo2 = [{"hola" : "chao0"}, {"hola" : "chao1"},{"hola" : "chao2"} , {"dia" : "noche"}]
    return (
        <div>
            {Object.keys(json).map(key => (
                <div key={key}>
                    {key}: {JSON.stringify(json[key])}
                </div>
            ))}

            <ul>
                {arreglo.map((a)=> {
                   return(
                    <li>{a}</li>
                   )
                })}
            </ul>
            {arreglo2.map(a2 =>{
                return(
                        <ul>
                            <li><h3>{a2.dia}</h3></li>
                        </ul>
                )
            })}
            {
                datos.map((j)=>{
                    return(
                        <ul>
                            <li>{j}</li>
                        </ul>
                    )
                })
            }

        </div>
    );
}
