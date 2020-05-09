import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Routes from './router/Routes'

import ErrorFallback from './components/ErrorFallback'

import S from './App.module.css'

function App() {
  return (
    <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={() => console.log( 'Top-level app container error boundary caught error')}>
      <main className={S.defaults}>
        <Routes />
      </main>
    </ErrorBoundary>
  )
}

export default App
