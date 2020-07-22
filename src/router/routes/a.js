export default [
    {
        path:'/a1',
        name:'a1',
        component:()=>import(/* webpackChunkName:"group-foo" */ '@/pages/a/index.vue')
    }
]