import React from 'react'
import PropTypes from 'prop-types'

import S from './styles/ContentContainer.module.css'

export default function ContentContainer( props ) {
  const { children } = props

  return (
    <section className={S.container}>
      {children}
    </section>
  )
}

ContentContainer.propTypes = {
  children : PropTypes.oneOfType( [ PropTypes.element, PropTypes.array ] ),
}