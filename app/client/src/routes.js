import Index from "/@/views/Index.vue"
import Login from "/@/views/Login.vue"
import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/",
        name: "index",
        component: Index,
    },

    {
        path: "/login",
        name: "login",
        component: Login,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
