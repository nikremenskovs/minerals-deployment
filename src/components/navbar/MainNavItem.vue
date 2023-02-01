<template>
  <li class="main-nav__item">
    <a class="main-nav__link" @click="scrollTo(props.to)">
      <slot></slot>
    </a>
  </li>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const props = defineProps({
  to: { type: String, required: true, default: "" },
});

function scrollTo(section) {
  gsap.to(window, {
    duration: 4,
    delay: 0.5,
    scrollTo: section,
    ease: "power1",
  });
}
</script>

<style scoped lang="scss">
.main-nav__item {
  width: 25%;
  display: flex;
  justify-content: center;
}
.main-nav__link {
  color: white;
  text-transform: capitalize;
  cursor: pointer;
}
</style>
