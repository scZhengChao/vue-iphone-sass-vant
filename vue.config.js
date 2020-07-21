
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { handlerRunConfig, initRunIcon } = require('run-success-icon')
const path = require('path');
const { argv } = require('process');
const isProd = process.env.NODE_ENV === 'production'
let resolve = dir => path.join(__dirname,'',dir)
let configPlugin = [] 
let npmArgv = JSON.parse(process.env.npm_config_argv) 
let proceeArgv = process.argv
if(npmArgv.cooked.includes('analyz')){
    configPlugin.push(new BundleAnalyzerPlugin({
        analyzerMode: npmArgv.cooked.includes('--static')?'static':'server',
    }))
}

module.exports = {
    lintOnSave:false, 
    productionSourceMap:  process.env.NODE_ENV === 'production' ? false : true, // 关闭生产环境的sourcemap
    css: {
        requireModuleExtension: true,
        loaderOptions: {
         sass: {
          // 向全局sass样式传入共享的全局变量
          additionalData: `@import "./src/assets/css/base.scss";`
         }
        }
    },
    devServer:{
        port:'9000',
        https: false, 
        open: true, 
        overlay: {
            warnings: false,
            errors: true
          }
        // proxy: {  // 配置多个代理,
            // '/api': {
            //     target: 'http://192.168.0.222:8080/api',
            //     ws: true,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/api': '/'
            //     }
            // }
        // } 
    },
    chainWebpack:config=>{
        config.module.rules.delete("svg")
        config.module.rule('svg-sprite-loader')
        .test(/\.svg$/).include.add(resolve('src/assets/icons')) //处理svg目录
        .end().use('svg-sprite-loader').loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        })
        const fileRule = config.module.rule('file')
        fileRule.uses.clear()
        fileRule
        .test(/\.svg$/)
        .exclude.add(resolve('/src/assets/icons'))
        .end()
        .use('file-loader')
        .loader('file-loader')
        config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('api', resolve('src/api'))
        .set('views', resolve('src/pages'))
        .set('components', resolve('src/components'))
        config.optimization.splitChunks({
            chunks: 'all',
            minSize: 30000,   
            minChunks: 1,           
            maxAsyncRequests: 5,    
            maxInitialRequests: 3,  
            automaticNameDelimiter: '~', 
            name: true,                 
            cacheGroups: {
              commons: {
                name: 'chunk-commons',
                test: resolve('src/components'),
                minChunks: 2, 
                priority: 5, 
                reuseExistingChunk: true
              },
              node_vendors: {
                name: 'chunk-libs',
                chunks: 'initial', // 只打包初始时依赖的第三方
                test: /[\\/]node_modules[\\/]/,
                priority: 10
              },
              vantUI: {
                name: 'chunk-vantUI',
                priority: 20, 
                test: /[\\/]node_modules[\\/]_?vant(.*)/
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
              }
            }
        })
        config.optimization.runtimeChunk('single')
    },
    configureWebpack: {
        plugins: [
            ...configPlugin,
            new FriendlyErrorsWebpackPlugin({
                 compilationSuccessInfo:{
                     messages:[initRunIcon()],
                 },
              })
            
        ],
        externals: {
			'vue': 'Vue',
			"vue-router": "VueRouter",
			'vuex': "Vuex",
            'axios': 'axios',
            'crypto-js':'CryptoJS',
            'vant':'vant'
		}
    }
}