import React from 'react'

import styles from './styles/Post.module.css'

export default function Post( props ) {
  const { post = {} } = props

  return (
    <article className={styles.container}>
      <h2 className={styles.title}>{post?.title}</h2>
      <p className={styles.summary}>{post?.summary}</p>
      <p className={styles.content}>{post?.summary}</p>
    </article>
  )
}

Post.propTypes = {
  post : PropTypes.object.isRequired,
}