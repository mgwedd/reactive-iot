import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

/* Screens */
import PostScreen from '../screens/PostScreen'
import BlogScreen from '../screens/BlogScreen'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/:slug"
        component={PostScreen}
      />
      <Route
        exact
        path="/"
        component={BlogScreen}
      />
    </BrowserRouter>
  )
}
