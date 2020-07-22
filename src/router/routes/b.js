export default [
    {
        path:'/b1',
        name:'b1',
        component:()=>import(/* webpackChunkName:"group-b" */ '@/pages/b/index.vue')
    }
]