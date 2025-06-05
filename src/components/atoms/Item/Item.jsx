import React from 'react'
import style from './item.module.css'

const Item = ({id , seccion}) => {
  return (
    <a href={seccion} className={style.item}>{seccion}{id}</a>
  )
}

export default Item
