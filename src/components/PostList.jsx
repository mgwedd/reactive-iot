import React from 'react'
import PropTypes from 'prop-types'

import TestUtils from '../tests/testUtils'

import { PostPreview } from './index'

import styles from './styles/PostList.module.css'

export default function PostList( props ) {
  const { posts = {} } = props

  return (
    <section className={styles.container}>
      {Object
        .values( posts )
        .map( post => <PostPreview key={post?.slug} post={post} /> )
      }
    </section>
  )
}

PostList.propTypes = {
  posts : PropTypes.object.isRequired,
}

PostList.defaultProps =  {
  posts : {
    'postid123' : {
      slug : 'postid123',
      title : TestUtils.mockText.generateSentences( 1 ),
      summary : TestUtils.mockText.generateSentences( 2 ),
      content : TestUtils.mockText.generateParagraphs( 5 ),
    },
    'post098123' : {
      slug : 'post098123',
      title : TestUtils.mockText.generateSentences( 1 ),
      summary : TestUtils.mockText.generateSentences( 2 ),
      content : TestUtils.mockText.generateParagraphs( 10 ),
    },
    'post0918230192309' : {
      slug : 'post0918230192309',
      title : TestUtils.mockText.generateSentences( 1 ),
      summary : TestUtils.mockText.generateSentences( 2 ),
      content : TestUtils.mockText.generateParagraphs( 3 ),
    },
    'post17171111' : {
      slug : 'post17171111',
      title : TestUtils.mockText.generateSentences( 1 ),
      summary : TestUtils.mockText.generateSentences( 2 ),
      content : TestUtils.mockText.generateParagraphs( 7 ),
    },
    'postZxlkajlkjalskjd' : {
      slug : 'postZxlkajlkjalskjd',
      title : TestUtils.mockText.generateSentences( 1 ),
      summary : TestUtils.mockText.generateSentences( 2 ),
      content : TestUtils.mockText.generateParagraphs( 4 ),
    }
  }
}
