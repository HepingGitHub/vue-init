const name = null;
const prot = null;
module.exports = {
  publicPath: '/', // 部署应用的基本url
  outputDir: 'dist', // 打包文件名
  assetsDir: 'assets', // 静态文件
  lintOnSave: false, // eslint检查
  productionSourceMap: false, // 不需要生产环境的source map，设置false加快生产环境构建
  //跨域配置
  devServer: {

    prot: prot, // 服务端口号
    host: host, // 服务的地址
    hot: true, // 热加载
    open: true, // 是否自动打开浏览器
    https: false, // 是否开启https
    proxy: {
      '/api': {
        target: 'http:xx', // 服务器地址
        ws: true, // 是否开启webscokit
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  // 路径配置
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  // webpack配置

  chainWebpack: config => {
    // js代码切割  提高效率
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: 'all'
    })
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/css/common.scss";
            @import "@/assets/css/mixin.scss";
            @import "@/assets/css/reset.scss";
            @import "@/assets/css/variable.scss"
              `
      }
    }
  }
}