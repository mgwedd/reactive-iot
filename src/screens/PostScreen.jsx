import React from 'react'
import { useParams } from 'react-router-dom'

import { ScreenContainer, ContentContainer } from '../components'

import styles from './styles/PostScreen.module.css'

export default function PostScreen( props ) {
  const { slug } = useParams()

  return (
    <ScreenContainer>
      <ContentContainer>
        <h2>{`Read: ${slug}`}</h2>
      </ContentContainer>
    </ScreenContainer>
  )
}
