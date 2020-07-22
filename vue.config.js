
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const { handlerRunConfig, initRunIcon } = require('run-success-icon')
const TerserPlugin = require('terser-webpack-plugin')
const SpritesmithPlugin = require('webpack-spritesmith');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const package = require('./package.json')
// const dllPath = package.dllPath

const webpack = require('webpack')
const path = require('path');
const { argv } = require('process');
const isProd = process.env.NODE_ENV === 'production'
let prodPlugin = []
let resolve = dir => path.join(__dirname,'',dir)
let configPlugin = [] 
let npmArgv = JSON.parse(process.env.npm_config_argv) 
let proceeArgv = process.argv
if(npmArgv.cooked.includes('analyz')){
    configPlugin.push(new BundleAnalyzerPlugin({
        analyzerMode: npmArgv.cooked.includes('--static')?'static':'server',
    }))
}
// var templateFunction = function (data) {
//     var shared = '.icon { background-image: url(I);background-size: Wpx Hpx;}'
//         .replace('I', data.sprites[0].image)
//         .replace('W', data.spritesheet.width)
//         .replace('H', data.spritesheet.height)
  
//     var perSprite = data.sprites.map(function (sprite) {
//       return '.icon-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; }'
//         .replace('N', sprite.name)
//         .replace('W', sprite.width)
//         .replace('H', sprite.height)
//         .replace('X', sprite.offset_x)
//         .replace('Y', sprite.offset_y);
//     }).join('\n');
  
//     return shared + '\n' + perSprite;
//   };
const spritePlugin = new SpritesmithPlugin({
    //设置源icons,即icon的路径，必选项
    /*
        目标小图标，这里就是你需要整合的小图片的老巢。
        现在是一个个的散兵，把他们位置找到，合成一个
    */
    src: {
        cwd: resolve( './src/assets/img/sprites'),
        glob: '*.png'
    },
  
    // 输出雪碧图文件及样式文件，这个是打包后，自动生成的雪碧图和样式，自己配置想生成
    target: {
        image: resolve( './src/assets/sprite/sprite.png'),
        css: resolve('./src/assets/sprite/sprite.css') //也可以为css, sass文件，需要先安装相关loader
    },
    // 自定义模板入口，我们需要基本的修改webapck生成的样式，上面的大函数就是我们修改的模板
    customTemplates: {
        // 'function_based_template': templateFunction,
    },
    //设置sprite.png的引用格式
    apiOptions: {
        cssImageRef: './sprite.png' //cssImageRef为必选项
    },
    //配置spritesmith选项，非必选
    spritesmithOptions: {
        algorithm: 'top-down',//设置图标的排列方式
    }
  });
  configPlugin.push(spritePlugin)
if(isProd){
   
    configPlugin.push(new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./public/vendor/vendor-manifest.json')
    }))
    // 将 dll 注入到 生成的 html 模板中
    configPlugin.push(new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: resolve('./public/vendor/*.js'),
        // dll 引用路径
        publicPath: './vendor',
        // dll最终输出的目录
        outputPath: './vendor'
    }))  
}




module.exports = {
    lintOnSave:false, 
    publicPath: resolve('./dist'),
    productionSourceMap:  process.env.NODE_ENV === 'production' ? false : true, // 关闭生产环境的sourcemap
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            sass: {
                // 向全局sass样式传入共享的全局变量
                additionalData: `@import "./src/assets/css/base.scss" ;`
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
            }),
            new HardSourceWebpackPlugin(),
			new HardSourceWebpackPlugin.ExcludeModulePlugin([
			  {
			    test: /mini-css-extract-plugin[\\/]dist[\\/]loader/
			  }
			]),
            // new webpack.optimize.ModuleConcatenationPlugin()
            
        ],
        optimization: {
            minimizer: [
                new TerserPlugin({
                    sourceMap: false,
                    terserOptions: {
                    compress: {
                        drop_console: true
                      }
                    }
                })
            ]
        },
        // externals: {
		// 	'vue': 'Vue',
		// 	"vue-router": "VueRouter",
		// 	'vuex': "Vuex",
        //     'axios': 'axios',
        //     'crypto-js':'CryptoJS',
		// }
    }
}
