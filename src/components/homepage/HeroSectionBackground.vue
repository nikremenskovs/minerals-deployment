<template>
  <div class="background" />
  <div class="foreground" />
  <div class="overlay" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  foreground: { type: String, required: true, default: "" },
  background: { type: String, required: true, default: "" },
});
const foregroundImg = `url('src/assets/images/${props.foreground}')`;
const backgroundImg = `url('src/assets/images/${props.background}')`;

const windowHeight = ref(window.innerHeight);

function backgroundAnimation() {
  gsap.fromTo(
    ".background",
    { scale: 1 },
    {
      scrollTrigger: {
        trigger: ".background",
        start: 0,
        end: windowHeight.value * (110 / 100),
        scrub: true,
        toggleActions: "restart none play reverse",
      },
      scale: 1.3,
    }
  );
  gsap.fromTo(
    ".foreground",
    { scale: 1 },
    {
      scrollTrigger: {
        trigger: ".foreground",
        start: 0,
        end: windowHeight.value * (80 / 100),
        scrub: true,
        toggleActions: "restart none none reverse",
      },
      scale: 1.7,
    }
  );
  gsap.fromTo(
    ".foreground",
    { y: 0 },
    {
      scrollTrigger: {
        trigger: ".foreground",
        start: windowHeight.value * (110 / 100),
        end: windowHeight.value * (180 / 100),
        scrub: true,
        toggleActions: "restart none none reverse",
      },
      y: -350,
    }
  ),
    gsap.fromTo(
      ".overlay",
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".overlay",
          start: windowHeight.value * (80 / 100),
          end: windowHeight.value * (160 / 100),
          scrub: true,
          toggleActions: "restart none none reverse",
        },
        alpha: 1,
      }
    );
}
function handleResize() {
  gsap.killTweensOf(".background");
  gsap.killTweensOf(".foreground");
  gsap.killTweensOf(".overlay");
  windowHeight.value = window.innerHeight;
  backgroundAnimation();
}

onMounted(() => {
  backgroundAnimation();
  window.addEventListener("resize", () => handleResize());
});
onUnmounted(() => {
  ScrollTrigger.killAll();
  window.removeEventListener("resize", () => handleResize());
});
</script>

<style scoped lang="scss">
@import "../../styles/_mixins.scss";

.background {
  @include positioning(absolute, 100%, 100vh);
  background-image: v-bind(backgroundImg);
  background-size: cover;
  background-position: center;
}

.overlay {
  @include positioning(absolute, 100%, 100vh);
  background-color: black;
}

.foreground {
  @include positioning(absolute, 100%, 150vh);
  background-image: v-bind(foregroundImg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
