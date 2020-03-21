const baseConfig = {
  VERSION : 'v0.1.0',
}

const devConfig = {
  ...baseConfig,
  ROUTER_URL : 'https://prod-blog-router.michaelwedd.com',
}

const productionConfig = {
  ...baseConfig,
  ROUTER_URL : 'https://dev-blog-router.michaelwedd.com',
}

let currentConfig = { ...productionConfig }

const getConfig = () => {
  return currentConfig
}

const changeConfig = ( env ) => {
  if ( env === 'development' ) {
    currentConfig = {
      ...devConfig,
      env,
      VERSION : `${baseConfig.VERSION}-dev`
    }
  } else {
    currentConfig = {
      ...productionConfig,
      env : 'production'
    }
  }
}

const saveConfig = ( env ) => {
  return new Error( 'Not Implemented')
}

const loadConfig = async () => {
  return new Error( 'Not Implemented')
}

module.exports = {
  loadConfig,
  saveConfig,
  getConfig,
  changeConfig,
}

export default getConfig
