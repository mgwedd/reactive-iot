import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './styles/PostPreview.module.css'

export default function Post( props ) {
  const { post = {} } = props

  return (
    <article className={styles.container}>
      <Link
        to={post?.slug}
        className={styles.link}
        style={{ textDecoration : 'none' }}>
        <h2 className={styles.title}>{post?.title}</h2>
      </Link>
      <p className={styles.summary}>{post?.summary}</p>
    </article>
  )
}

Post.propTypes = {
  post : PropTypes.object.isRequired,
}