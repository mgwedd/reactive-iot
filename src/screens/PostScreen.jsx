import React, { Component } from 'react'
import styles from './styles/PostScreen.module.css'

export default function PostScreen( props ) {
  const { match } = props
  return (
    <h2>{`Read: ${match.params.slug}`}</h2>
  )
}
