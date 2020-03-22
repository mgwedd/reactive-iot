import { createSelector } from 'reselect'

const posts = state => state.post.list


const getPosts = createSelector( [ posts ], ( posts ) => posts || {} )

export default {}