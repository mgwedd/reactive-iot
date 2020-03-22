import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import TopErrorBoundary from 'react-error-boundary'
import configureStore from './state/configureStore'
import reportError from './utils/reportError'
// import config from './config'
import App from './App'

const store = configureStore()

const renderApp = () => render(
  <TopErrorBoundary onError={reportError}>
    <Provider store={store}>
      <App />
    </Provider>
  </TopErrorBoundary>,
  document.getElementById( 'root' ),
)

if ( process.env.NODE_ENV !== 'production' && module.hot ) {
  module.hot.accept( './App', renderApp )
}

renderApp()
