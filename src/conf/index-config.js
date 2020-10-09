let confConfig = {
  proxyTable: {
    '/kadrn/': {
      target: 'http://localhost:8761',
      changeOrigin: true,
      pathRewrite: {
        '^/kadrn': ''
      }
    }
  }
}
module.exports = confConfig;
