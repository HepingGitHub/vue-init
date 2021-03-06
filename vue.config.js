const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = "后台管理系统";
const port = 9527;
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const compress = new CompressionWebpackPlugin({
  filename: info => {
    return `${info.path}.gz${info.query}`
  },
  algorithm: 'gzip',
  threshold: 10240,
  test: new RegExp(
    '\\.(' + ['js'].join('|') +
    ')$'
  ),
  minRatio: 0.8,
  deleteOriginalAssets: false
})


module.exports = {
  publicPath: '/', // 部署应用的基本url
  outputDir: 'dist', // 打包文件名
  assetsDir: 'assets', // 静态文件
  lintOnSave: false, // eslint检查
  productionSourceMap: false, // 不需要生产环境的source map，设置false加快生产环境构建
  //跨域配置
  devServer: {
    port: port, // 服务端口号
    /*   host: '192.168.1.7', // 服务的地址 */
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
    },
    before(app, server) {
      app.get(/.*.(js)$/, (req, res, next) => {
        req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        next();
      })
    }
  },

  // 路径配置
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [compress]
  },
  // webpack配置

  chainWebpack(config) {
    // 压缩js代码  提高效率
    config.optimization.minimize(true);
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    });
     // set svg-sprite-loader
     config.module
     .rule('svg')
     .exclude.add(resolve('src/icons'))
     .end()
   config.module
     .rule('icons')
     .test(/\.svg$/)
     .include.add(resolve('src/icons'))
     .end()
     .use('svg-sprite-loader')
     .loader('svg-sprite-loader')
     .options({
       symbolId: 'icon-[name]'
     })
     .end()
    // 用cdn方式引入
    /*  config.externals({
       'vue': 'Vue',

     }) */
  },

  /* css: {
    loaderOptions: {
      sass: {
        data: `
             @import "@/assets/css/common.scss";
             @import "@/assets/css/mixin.scss";
             @import "@/assets/css/reset.scss";
             @import "@/assets/css/variable.scss"
             @import "@/assets/css/transtion.scss"
             @import "@/assets/css/index.scss"
             
               `
      }
    },
    extract: true,
  } */
}