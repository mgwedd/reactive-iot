import React from 'react'

import styles from './styles/Header.module.css'

export default function Header( props ) {

  const { title } = props

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}
