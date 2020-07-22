const webpack = require('webpack')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
module.exports = {
    plugins: [
        // 开启 Scope Hoisting 功能
        new webpack.optimize.ModuleConcatenationPlugin(),
        // 告诉webpack使用了哪些第三方库代码
        // new DllReferencePlugin({
        //     // jquery 映射到json文件上去
        //     manifest: require('./dist/jquery.manifest.json')
        // }),
        // new DllReferencePlugin({
        //     // echarts 映射到json文件上去
        //     manifest: require('./dist/echarts.manifest.json')
        // })
         // 告诉webpack使用了哪些第三方库代码
        new DllReferencePlugin({
            // jquery 映射到json文件上去
            manifest: require(path.resolve(__dirname, 'dist', 'vendor.manifest.json'))
        })
    ],
    resolve: {
        // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
        mainFields: ['jsnext:main', 'browser', 'main']
    },
  } 