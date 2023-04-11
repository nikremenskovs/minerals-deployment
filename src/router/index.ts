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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/bad-call",
      component: () => import("@/components/shared/NotFound.vue"),
    },
  ],
  scrollBehavior(to, from) {
    switch(true) {
      case (to.hash === '#hero' && from.fullPath === '/'):
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

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    location.reload();
  } else {
    next();
  }
});

export default router;
