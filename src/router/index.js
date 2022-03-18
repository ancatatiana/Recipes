import { create } from 'core-js/core/object'
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/recipe/:slug',
        name: 'Recipe',
        component: () => import('../Recipes.vue')

    }

]

const router= createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router