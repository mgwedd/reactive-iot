import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/Post.module.css'

export default function Post( props ) {
  const { post = {} } = props

  return (
    <article className={styles.container}>
      <h2 className={styles.title}>{`Title: ${post?.title}`}</h2>
      <p className={styles.summary}>{`Summary: ${post?.summary}`}</p>
      <p className={styles.content}>{`Article: ${post?.summary}`}</p>
    </article>
  )
}

Post.propTypes = {
  post : PropTypes.object.isRequired,
}