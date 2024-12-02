import React from 'react'
import style from './item.module.css'

interface ItemProps{
  itemName?:string
}

export const Item: React.FC<ItemProps> = ({itemName = "Default"}) => {
  return (
    <div className={style.item}>{itemName}</div>
  )
}
