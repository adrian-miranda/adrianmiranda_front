import React, { useEffect, useState } from 'react'
// import json from '../../prueba.json'
import axios from 'axios';

export const OpcionMenu = () => {
    
    const [personas , setPersonas] = useState([]);
    
    useEffect(()=>{
        const obtenerPersonas = async ()=>{
            const url = 'http://127.0.0.1:8000/api/personas/';
            try{
                const response = await axios.get(url)
                console.log(response.data)
                setPersonas(response.data)
            }catch (error){
                console.error("El error es: ", error)
            }
        }
        obtenerPersonas()
        // const intervalId = setInterval(obtenerPersonas, 5000); // Llamar cada 5 segundos
        // return () => clearInterval(intervalId); 
    },[]);
    
    return (
        <>
            {/* <div>
                {json && json.length > 0 ? json.map((js , index)=>{
                    return(
                        <ul key={index}>
                            <li key={index}>{index} {js.llave}</li>
                        </ul>
                    )
                })
                :  "no hay datos"
                }
            </div> */}
            <div>
                <ul>
                    {personas && personas.length > 0 ?  personas.map((persona , index)=>(
                        <li key={index}>{persona.apellido_paterno}</li>
                    )) : 'no hay data'}
                </ul>
            </div>
        
        </>
    );
}
