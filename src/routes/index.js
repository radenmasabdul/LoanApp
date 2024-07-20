import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASEURL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                title: "Homepage"
            },
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `LOAN APP || ${to.meta.title}`;
    next();
});

export default router;