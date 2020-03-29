import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ScreenContainer, ContentContainer, Post } from '../components'

import { Posts as PostActions } from '../state/actions'
import { DataSelectors } from '../state/selectors'

import styles from './styles/PostScreen.module.css'
class PostScreen extends Component {

  // TODO temporary
  componentDidMount() {
    const { post, fetchPost } = this.props

    if ( !Object.keys( post ).length ) {
      fetchPost()
    }
  }

  render() {
    const { post } = this.props
    console.log( 'post in post screen', post )
    return (
      <ScreenContainer>
        <ContentContainer>
          <Post post={post} />
        </ContentContainer>
      </ScreenContainer>
    )
  }
}

export default connect(
  ( state, ownProps ) => ( {
    post : DataSelectors.getPosts( state )[ownProps.location.state?.postId] || {},
  } ),
  dispatch => ( {
    fetchPost : () => dispatch( PostActions.fetchRange() ),
  } )
 )( PostScreen )
