import React from 'react'
import { Link } from 'react-router-dom'

import S from './styles/Header.module.css'

export default function Header( props ) {
  const { title } = props

  return (
    <div className={S.container}>
      <Link to="/" style={ { textDecoration : 'none'} } >
        <h1 className={S.title}>{title}</h1>
      </Link>
    </div>
  )
}
