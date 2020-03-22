import React from 'react'
import styles from './styles/ScreenContainer.module.css'

export default function ScreenContainer( props ) {
  const { children } = props
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
