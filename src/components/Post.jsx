import React from 'react'
import PropTypes from 'prop-types'

import S from './styles/Post.module.css'

export default function Post( props ) {
  const { post = {} } = props

  return (
    <article className={S.container}>
      <h2 className={S.title}>{`Title: ${post?.title}`}</h2>
      <p className={S.summary}>{`Summary: ${post?.summary}`}</p>
      <p className={S.content}>{`Article: ${post?.summary}`}</p>
    </article>
  )
}

Post.propTypes = {
  post : PropTypes.object.isRequired,
}