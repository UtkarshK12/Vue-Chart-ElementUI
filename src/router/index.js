import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path:'/',
        name:"Home",
        component:()=>import('../components/Homepage.vue'),
        props: true,
       

    },

    {
        path:'/classErrorPage/:errorClassId',
        name:"classErrorPage",
        component:()=>import('../components/ClassErrorPage.vue'),
        props: true,
    },

    {
        path:'/errorLog/:errorDetails',
        name:"errorLog",
        component:()=>import('../components/ErrorDetailPage.vue'),
        props: true
    },
   
   
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router