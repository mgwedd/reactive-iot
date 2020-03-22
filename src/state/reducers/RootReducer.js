import { combineReducers } from 'redux'
import postsReducer from './Posts'

export default combineReducers( {
  post : postsReducer
} )
