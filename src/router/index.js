import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
let routes = []
let context = require.context('./routes', false, /.(js|ts)$/)
let keys = context.keys().forEach(path=>{
    const defaultRoutes = context(path)
    routes = [...routes,...defaultRoutes.default]
})
let router = new Router({
    base:process.env.BASE_URL,
    routes:[
        ...routes,
        {
            path:'*',
            name:'error',
            meta:{
                title:'404'
            },
            component:()=>import('@/pages/errors/404.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
    },
})

export default router