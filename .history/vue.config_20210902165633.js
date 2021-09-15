const proxyObj = {}
proxyObj['/'] = {
  ws: false,
  target: 'http://localhost:8091',
  changeOrigin: true,
  pathRewrite: {
    '`/': ''
  }
}

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8090,
    proxy: proxyObj
  }
}
