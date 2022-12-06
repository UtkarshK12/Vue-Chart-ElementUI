import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path:'/',
        name:"Home",
        component:()=>import('../components/Homepage.vue')
    },
    {
        path:'/project_1',
        name:"Project_1",
        component:()=>import('../components/Homepage.vue')
    },

    {
        path:'/classErrorList/',
        name:"classErrorList",
        component:()=>import('../components/ClassErrorPage.vue')
    },

    // {
    //     path:'/errorLog/',
    //     name:"errorLog",
    //     component:()=>import('../components/ErrorDetailPage.vue')
    // },
   
   
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router