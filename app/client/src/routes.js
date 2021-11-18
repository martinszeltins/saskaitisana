import Index from "/@/views/Index.vue"
import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/",
        name: "index",
        component: Index,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
