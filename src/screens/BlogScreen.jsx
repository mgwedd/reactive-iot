import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ScreenContainer, ContentContainer, Header, PostList } from '../components'

import { DataSelectors } from '../state/selectors'
import { Posts } from '../state/actions'

import styles from './styles/BlogScreen.module.css'
class BlogScreen extends Component {

  componentDidMount() {
    const { posts, fetchPosts } = this.props
    if ( !Object.keys( posts ).length ) {
      fetchPosts()
    }
  }

  render() {
    const { posts } = this.props
    console.log( 'psots in blog scren', posts )
    return (
      <ScreenContainer>
        <ContentContainer>
          <Header title="Reactive IoT" />
          <PostList posts={posts}/>
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
