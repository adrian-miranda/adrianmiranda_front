import React from 'react'
import { Item } from '../../atoms/Item/Item'
import style from './itemList.module.css'

export const ItemList = () => {
  return (
    <div className={style.itemList}>
        <ul >
            <li className={style.lista}>
                <Item/>
                <Item/>
                <Item/>
            </li>
        </ul>
    </div>
  )
}
