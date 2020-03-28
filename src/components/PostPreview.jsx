import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/PostPreview.module.css'

export default function Post( props ) {
  const { post = {} } = props

  return (
    <article className={styles.container}>
      <h2>{post?.title}</h2>
      <p>{post?.summary}</p>
    </article>
  )
}

Post.propTypes = {
  post : PropTypes.object.isRequired,
}