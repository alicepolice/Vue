const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080, //前端服务启动的端口号
    host: 'localhost', //前端服务启动后的访问ip，默认为localhost, host和port组成了前端服务启动后的访问入口。
    https: false,
    open: true,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
        '/api': {
            target: 'http://localhost:1314/',//这里后台的地址模拟的;应该填写你们真实的后台接口
            ws: true,
            changOrigin: true,//允许跨域
            pathRewrite: {
                '^/api': ''//请求的时候使用这个api就可以
            }
        }
    }
  }
})
