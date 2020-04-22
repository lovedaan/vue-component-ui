const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir);
}

module.exports = {
  pages:{
    index:{
      // 修改项目入口文件
      entry:'examples/main.js',
      template:'public/index.html',
      filename:'index.html'
    }
  },
  productionSourceMap: false,
  // 扩展webpack配置,使webpages加入编译

  chainWebpack: config => {
    config.resolve.alias
    .set('@',resolve('./examples'))
    .set('_c',resolve('./examples/components'))

    config.module
    .rule('js')
    .include.add(path.resolve(__dirname,'packages')).end()
    .include.add(path.resolve(__dirname,'examples')).end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
      return options
    })
  }
}