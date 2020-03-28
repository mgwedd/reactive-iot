import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/ContentContainer.module.css'

export default function ContentContainer( props ) {
  const { children } = props

  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}

ContentContainer.propTypes = {
  children : PropTypes.element,
}