module.exports = (config, env) => {
  const imageTypes = ['jpg', 'png', 'gif', 'svg']
  imageTypes.forEach((type) => {
    config.removeLoader(type)

    /* eslint no-param-reassign:0, max-len:0 */
    config.loader(type, (cfg) => {
      cfg.test = /\.(jpe?g|png|gif|svg)$/i
      cfg.loader = 'file?hash=sha512&digest=hex&name=[hash].[ext]!image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'

      return cfg
    })
  })

  return config
}
