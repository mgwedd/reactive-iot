import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import S from './styles/PostPreview.module.css'

export default function PostPreview( props ) {
  const { post = {} } = props

  return (
    <article className={S.container}>
      <Link
        to={{
          pathname : post?.slug,
          state : { postId : post?.id }
        }}
        className={S.link}
        style={{ textDecoration : 'none' }}>
        <h2 className={S.title}>{post?.title}</h2>
      </Link>
      <p className={S.summary}>{post?.summary}</p>
    </article>
  )
}

PostPreview.propTypes = {
  post : PropTypes.object.isRequired,
}