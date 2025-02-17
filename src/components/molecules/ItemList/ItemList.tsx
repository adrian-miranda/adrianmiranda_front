import React from 'react'
import { Item } from '../../atoms/Item/Item'
import style from './itemList.module.css'

import elJason from './opciones.json'
console.log(elJason)

export const ItemList = () => {
  return (
    <div className={style.itemList}>
        <ul >
            <li className={style.lista}>
                {elJason.map((item, index) => (
                  <Item key={index} itemName={item.hola} />
                  ))}
            </li>
        </ul>
    </div>
  )
}
