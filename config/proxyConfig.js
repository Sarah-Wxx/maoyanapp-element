module.exports = {
  proxy: {
    // 跨域配置
    // '/api': {} 就是要告诉node，我的接口只要是 '/api' 开头的才用代理
    // 最后代理的路径就是 http://xxx.xx.com/api/xx/xx.
    '/api': {     
      target: 'http://127.0.0.1:3002',  //后台接口域名
      // ws: true,        //如果要代理 websockets，配置这个参数
      // secure: false,  // 如果是https接口，需要配置这个参数
      changeOrigin: true,  //是否跨域
      // 重写路径  用 '^/api': '' 将 /api 去掉
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}