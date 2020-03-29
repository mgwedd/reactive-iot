import Constants from '../../shared/Constants'
import TestUtils from '../../tests/testUtils'

function fetchRange() {
  return async ( dispatch, getState ) => {
    // default query range, but build in ability to parameterized.

    const loremPosts = {
      'postid123' : {
        id : 'postid123',
        slug : 'postid123',
        title : TestUtils.mockText.generateSentences( 1 ),
        summary : TestUtils.mockText.generateSentences( 2 ),
        content : TestUtils.mockText.generateParagraphs( 5 ),
      },
      'post098123' : {
        id : 'post098123',
        slug : 'post098123',
        title : TestUtils.mockText.generateSentences( 1 ),
        summary : TestUtils.mockText.generateSentences( 2 ),
        content : TestUtils.mockText.generateParagraphs( 10 ),
      },
      'post0918230192309' : {
        id : 'post0918230192309',
        slug : 'post0918230192309',
        title : TestUtils.mockText.generateSentences( 1 ),
        summary : TestUtils.mockText.generateSentences( 2 ),
        content : TestUtils.mockText.generateParagraphs( 3 ),
      },
      'post17171111' : {
        id : 'post17171111',
        slug : 'post17171111',
        title : TestUtils.mockText.generateSentences( 1 ),
        summary : TestUtils.mockText.generateSentences( 2 ),
        content : TestUtils.mockText.generateParagraphs( 7 ),
      },
      'postZxlkajlkjalskjd' : {
        id : 'postZxlkajlkjalskjd',
        slug : 'postZxlkajlkjalskjd',
        title : TestUtils.mockText.generateSentences( 1 ),
        summary : TestUtils.mockText.generateSentences( 2 ),
        content : TestUtils.mockText.generateParagraphs( 4 ),
      }
    }

    dispatch( { type : Constants.FETCH_POSTS, payload : { posts : loremPosts } } )
    return Promise.resolve()
  }
}

export default {
  fetchRange,
}