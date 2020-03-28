import Constants from '../../shared/Constants'

function fetchRange() {
  return async ( dispatch, getState ) => {
    // default query range, can be parameterized.
    dispatch( { type : Constants.FETCH_POSTS, payload : { posts : {} } } )
    return Promise.resolve()
  }
}

export default {
  fetchRange,
}