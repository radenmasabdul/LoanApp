import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import DetailsPages from "../pages/DetailsPages.vue";

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
        },
        {
            path: "/details/:id",
            name: "details",
            component: DetailsPages,
            meta: {
                title: "Details"
            },
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `LOAN APP || ${to.meta.title}`;
    next();
});

export default router;