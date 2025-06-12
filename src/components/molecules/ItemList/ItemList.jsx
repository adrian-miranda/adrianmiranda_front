import React, { useEffect, useState } from 'react'
import Item from '../../atoms/Item/Item'
import axios from 'axios';


const ItemList = () => {

const [Items , SetItem] = useState([]);

useEffect(()=>{
    const fetchItemMenu = async ()=>{
        const response = await axios.get("/itemMenu.json");
        SetItem(response.data)
        console.log(response.data)
    }
    fetchItemMenu();

} , [])

    return (
        <>
            {Items.map((item)=>(
                <Item key={item.id} seccion={item.seccion}/>
                ))}
        </>
    )
}

export default ItemList
