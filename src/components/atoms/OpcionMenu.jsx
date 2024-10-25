import React from 'react'
import json from '../../prueba.json'

export const OpcionMenu = () => {
    return (
        <div>
            {json && json.length > 0 ? json.map((js , index)=>{
                return(
                    <ul>
                        <li key={index}>{index} {js.llave}</li>
                    </ul>
                )
            })
            :  "no hay datos"
            }
        </div>
    );
}
