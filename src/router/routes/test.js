export default [
    {
        path: '/',
        name: 'Home',
        component: ()=>import('@/components/Home.vue')
    },
    {
        path: '/marqueen',
        name: 'Marqueen',
        component: ()=>import('@/components/Marqueen')
    },
    {
        path: '/input',
        name: 'input',
        component: ()=>import('@/components/input')
    },
    {
        path: '/list',
        name: 'list',
        component: ()=>import('@/components/list')
    },
    {
        path: '/preview',
        name: 'preview',
        component: ()=>import('@/components/previewImg')
    },
    {
        path: '/encrypt',
        name: 'encrypt',
        component: ()=>import('@/components/encrypt')
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