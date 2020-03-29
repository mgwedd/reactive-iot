import Constants from '../../shared/Constants'

const initialState = {
  list : {},
  loading : false,
}

function Post( state = initialState, action ) {

  switch( action.type ) {

    case Constants.FETCH_POSTS: {
      const { posts } = action.payload

      return {
        ...state,
        list : posts,
      }
    }

    case Constants.POST_LOADING: {
      return {
        ...state,
        loading : false,
      }
    }

    case Constants.POST_ERROR: {
      const { message } = action.payload
      return {
        ...state,
        loading : false,
        error : message,
      }
    }

    default: {
      return state
    }

  }

}

export default Post
