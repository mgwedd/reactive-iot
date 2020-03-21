import { combineReducers } from 'redux'
import postReducer from './Post'

export default combineReducers({
  post : postReducer
})
