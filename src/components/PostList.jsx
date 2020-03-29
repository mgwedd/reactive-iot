import React from 'react'
import PropTypes from 'prop-types'

import { PostPreview } from './index'

import styles from './styles/PostList.module.css'

export default function PostList( props ) {
  const { posts = {} } = props

  return (
    <section className={styles.container}>
      {Object
        .values( posts )
        .map( post => <PostPreview key={post?.id} post={post} /> )
      }
    </section>
  )
}

PostList.propTypes = {
  posts : PropTypes.object.isRequired,
}
