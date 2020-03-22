import React from 'react'
import { connect } from 'react-redux'

import { DataSelectors } from '../state/selectors'
import ScreenContainer from '../components/ScreenContainer'
import styles from './styles/BlogScreen.module.css'

function BlogScreen( props ) {
  return (
    <ScreenContainer>
      <h2>Welcome to the Blog</h2>
    </ScreenContainer>
  )
}

export default connect(
  ( state ) => ( {
    // posts : DataSelectors.getPosts()
  } ),
  ( dispatch ) => ( {

  } ),
)( BlogScreen )
