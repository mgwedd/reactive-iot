import React from 'react'

import S from './styles/ScreenContainer.module.css'

export default function ScreenContainer( props ) {
  const { children } = props
  return (
    <div className={S.container}>
      {children}
    </div>
  )
}
