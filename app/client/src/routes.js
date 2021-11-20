import auth from '/@/middleware/auth.js'
import Index from "/@/views/Index.vue"
import Login from "/@/views/Login.vue"
import Scores from "/@/views/Scores.vue"
import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/",
        name: "index",
        component: Index,
        meta: {
            middleware: [ auth ],
        },
    },

    {
        path: "/login",
        name: "login",
        component: Login,
    },

    {
        path: "/scores",
        name: "scores",
        component: Scores,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

/**
 * Route Middleware
 */
function nextFactory(context, middleware, index)
{
    const subsequentMiddleware = middleware[index]

    if (!subsequentMiddleware) return context.next

    return (...parameters) => {
        context.next(...parameters)
        const nextMiddleware = nextFactory(context, middleware, index + 1)
        subsequentMiddleware({ ...context, next: nextMiddleware })
    }
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware)
    {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware]

        const context = { from, next, router, to }
        const nextMiddleware = nextFactory(context, middleware, 1)

        return middleware[0]({ ...context, next: nextMiddleware })
    }

    return next();
})

export default router
