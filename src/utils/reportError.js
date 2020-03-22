async function reportError( error, componentStack ) {
  // TODO post report to backend error logger svc
  return console.error( '{ error, componentStack }', error, componentStack )
}

export default reportError
