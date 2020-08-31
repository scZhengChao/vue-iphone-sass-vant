# vue-vant-sass-iphone

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### issues
polyfill 不会编译node_modules 下的依赖包  按照配置 并没有生效 例如 vue-touch-events


#### has done
基于 cli4  webpack4  本身工具就是高版本的； 
图片： svg  base64  sprites  png（可以尝试webp）
js： 路由懒加载  组件懒加载  cdn dll加速构建减小vender包 Scope Hoisting 取出console  gzip压缩（如何需要的话）
架构：vue + vue-router  + vuex + axios + crypto-js  分模块 自动化配置加载（方便多模块开发）
ui： vant + flixelb + vw  rem 布局
良好的编码习惯 编码风格 最大的利用vue的优势特性
