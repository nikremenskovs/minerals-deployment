<template>
  <div class="background" />
  <div class="foreground" />
  <div class="overlay" />
</template>

<script setup>
import { onMounted, onUnmounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  foreground: { type: String, required: true },
  background: { type: String, required: true },
});
const foregroundImg = computed(
  () =>
    `url('https://cloud.squidex.io/api/assets/minerals-squidex/${props.foreground}')`
);
const backgroundImg = computed(
  () =>
    `url('https://cloud.squidex.io/api/assets/minerals-squidex/${props.background}')`
);

function backgroundAnimation() {
  gsap.fromTo(
    ".background",
    { scale: 1 },
    {
      scrollTrigger: {
        trigger: ".background",
        start: "top top",
        end: "bottom+=100% bottom",
        scrub: 0.5,
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
        trigger: ".background",
        start: "top top",
        end: "bottom+=80% bottom",
        scrub: 0.5,
        toggleActions: "restart none none reverse",
      },
      scale: 2,
    }
  );
  gsap.fromTo(
    ".foreground",
    { y: 0 },
    {
      scrollTrigger: {
        trigger: ".background",
        start: "bottom+=100% bottom",
        end: "bottom+=160% bottom",
        scrub: true,
        toggleActions: "restart none none reverse",
      },
      y: -300,
    }
  ),
    gsap.fromTo(
      ".overlay",
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".overlay",
          start: "bottom+=80% bottom",
          end: "bottom+=160% bottom",
          scrub: true,
          toggleActions: "restart none none reverse",
        },
        opacity: 1,
      }
    );
}

onMounted(() => {
  backgroundAnimation();
});
onUnmounted(() => {
  ScrollTrigger.killAll();
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
  @include positioning(absolute, 100%, 120vh);
  background-image: v-bind(foregroundImg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
