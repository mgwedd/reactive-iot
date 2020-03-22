import React from 'react'
import { connect } from 'react-redux'

import { DataSelectors } from '../state/selectors'
import { Posts } from '../state/actions'
import { ScreenContainer, Header } from '../components'
import styles from './styles/BlogScreen.module.css'

class BlogScreen extends React.Component {

  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }

  render() {
    return (
      <ScreenContainer>
        <Header
          title="Reactive IoT Blog" />
      </ScreenContainer>
    )
  }
}

export default connect(
  ( state ) => ( {
    posts : DataSelectors.getPosts( state )
  } ),
  ( dispatch ) => ( {
    fetchPosts : () => { dispatch( Posts.fetchRange() ) }
  } ),
)( BlogScreen )
