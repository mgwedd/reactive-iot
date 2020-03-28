import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ScreenContainer, ContentContainer, Header, PostList } from '../components'

import { DataSelectors } from '../state/selectors'
import { Posts } from '../state/actions'

import styles from './styles/BlogScreen.module.css'
class BlogScreen extends Component {

  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <ScreenContainer>
        <ContentContainer>
          <Header title="Reactive IoT" />
          <PostList />
        </ContentContainer>
      </ScreenContainer>
    )
  }
}

export default connect(
  ( state ) => ( {
    posts : DataSelectors.getPosts( state )
  } ),
  ( dispatch ) => ( {
    fetchPosts : () => dispatch( Posts.fetchRange() )
  } ),
)( BlogScreen )
