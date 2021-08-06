module.exports = {
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: 'src/index/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   subpage: 'src/subpage/main.js'
  // },
  // 关闭语法检查
  // lintOnSave: false,
  // 配置代理服务器
  // 方法一
  // devServer: {
  //   // 因为要解决跨域的问题，
  //   // 所以代理服务器的协议、主机名和端口号都必须配置得和代理服务器需要转发的端口，
  //   // 也就是真正要去哪个服务器拿数据的那个端口号(目的：告诉代理服务器具体代理哪个服务器)
  //   // 场景：http://localhost:5000向http:localhost:5001拿数据
  //   // 代理服务器应该配置为：
  //   // proxy: 'http://localhost:5001'
  //   // 因为我们要去http://localhost:5000服务器去拿数据，所以代理服务器配置如下
  //   // 总之：代理服务器的地址就是被代理服务器的地址
  //   proxy: 'http://localhost:5000'
  // },
  // 方法二
  // 这个方法能配置多个代理服务器
  // devServer: {
  //   proxy: {
  //     // 请求前缀：当请求前缀为/api的时候，就转发给target配置的服务器
  //     '/api': {
  //       // 代理的服务器地址
  //       target: 'http://localhost:5000',
  //       // 重写路径，去掉配置请求前缀带来的请求404影响
  //       pathRewrite: {
  //         "^/api": ''
  //       },
  //       // 是否支持websocket（不写默认为true）
  //       ws: true,
  //       // 用于控制请求头中的host值（不写默认为true）
  //       changeOrigin: true
  //     },
  //     'api': {
  //       target: 'http://localhost:5001',
  //       pathRewrite: {
  //         "^/api": ''
  //       },
  //     }
  //   }
  // },
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  // 请求github用户名接口
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
}