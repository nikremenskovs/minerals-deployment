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
      meta: {
        title: 'Minerals - Home'
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: 'Minerals - About'
      }
    },
    {
      path: "/bad-call",
      component: () => import("@/components/shared/NotFound.vue"),
      meta: {
        title: 'Minerals - 404'
      }
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
  document.title = `${to.meta.title}`;
  next();
})

export default router;
