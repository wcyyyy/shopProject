let path = require('path');
const px2rem = require('postcss-px2rem') // postcss的一个插件

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
          })
        ]
      }
    }
  },
  configureWebpack: {// 当前配置需要写入该选项中  
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js', 
        '@': resolve('src'), // 设置文件查找路径，可简写文件查找路径
        'components': resolve('src/components'),
      }
    },
    devServer:{
      proxy:{
        '/api': {
          target: 'http://localhost:4000', // 转发的目标地址
          pathRewrite: {
            '^/api' : ''  // 转发请求时去除路径前面的/api
          },
        },
        '/gh':{
          target:'https://api/github.com',//转发的目标地址
          pathRewrite:{
            '^/gh':"" // 转发请求时去除路径前面的/api
          },
          changeOrigin:true //支持跨域
        }
      }
    }
    
  }
}