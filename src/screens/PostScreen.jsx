import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ScreenContainer, ContentContainer, Post } from '../components'

import Header from '../components/Header'
import { Posts as PostActions } from '../state/actions'
import { DataSelectors } from '../state/selectors'

import S from './styles/PostScreen.module.css'
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
          <Header title="Reactive IoT" />
          <Post post={post} />
        </ContentContainer>
      </ScreenContainer>
    )
  }
}

PostScreen.propTypes = {
  post : PropTypes.object.isRequired,
}

export default connect(
  ( state, ownProps ) => ( {
    post : DataSelectors.getPosts( state )[ownProps.location.state?.postId] || {},
  } ),
  dispatch => ( {
    fetchPost : () => dispatch( PostActions.fetchRange() ),
  } )
 )( PostScreen )
