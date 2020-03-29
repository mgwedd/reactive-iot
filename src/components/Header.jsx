import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles/Header.module.css'

export default function Header( props ) {
  const { title } = props

  return (
    <div className={styles.container}>
      <Link to="/" style={ { textDecoration : 'none'} } >
        <h1 className={styles.title}>{title}</h1>
      </Link>
    </div>
  )
}
