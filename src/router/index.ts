import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/bad-call",
      component: () => import("@/components/shared/NotFound.vue"),
    },
  ],
  scrollBehavior(to, from) {
    switch(true) {
      case (to.hash === '#hero' && (from.fullPath === '/' || from.hash === '#hero') ):
        break;
        case Boolean(to.hash):
        gsap.to(window, {
          duration: 4,
          delay: 0.5,
          scrollTo: to.hash,
          ease: "power1",
        });
        break;
    }
  },
});

export default router;
