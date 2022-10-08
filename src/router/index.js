import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import Experiences from '../pages/Experiences.vue'
import Abilities from '../pages/Abilities.vue'
import Projects from '../pages/Projects.vue'
import Contact from '../pages/Contact.vue'

const routes = [{
    path: "/",
    redirect: "/home",
    name: "Index"
}
    ,{
    path: "/Home",
    component: Home,
    name: "Home",
},{
    path: "/Experiences",
    component: Experiences,
    name: "Experiences",
},{
    path: "/Contact",
    component: Contact,
    name: "Contact",
},{
    path: "/Abilities",
    component: Abilities,
    name: "Abilities",
},{
    path: "/Projects",
    component: Projects,
    name: "Projects",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass:"active",
    scrollBehavior (to, from, savedPosition) {
        if(to.hash) {
            return{
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return{ x: 0, y: 0};
    },
    routes,
});

export default router;