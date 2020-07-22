export default [
    {
        path: '/',
        name: 'Home',
        component: ()=>import(/* webpackChunkName:"group-a" */ '@/components/Home.vue')
    },
    {
        path: '/marqueen',
        name: 'Marqueen',
        component: ()=>import(/* webpackChunkName:"group-m" */ '@/components/Marqueen')
    },
    {
        path: '/input',
        name: 'input',
        component: ()=>import(/* webpackChunkName:"group-i" */ '@/components/input')
    },
    {
        path: '/list',
        name: 'list',
        component: ()=>import(/* webpackChunkName:"group-l" */ '@/components/list')
    },
    {
        path: '/preview',
        name: 'preview',
        component: ()=>import(/* webpackChunkName:"group-pre" */ '@/components/previewImg')
    },
    {
        path: '/encrypt',
        name: 'encrypt',
        component: ()=>import(/* webpackChunkName:"group-e" */ '@/components/encrypt')
    },
    {
        path: '/map',
        name: 'map',
        component: ()=>import('@/components/map')
    },
    {
        path: '/sprite',
        name: 'sprite',
        component: ()=>import('@/components/sprites')
    }
]