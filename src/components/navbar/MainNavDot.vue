<template>
  <div class="pulse-container">
    <img :src="props.pulseIcon" class="pulse-container__dot">
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  pulseIcon: { type: Array, required: true },
  pulseIconSize: { type: Number, required: true },
});

const pulseIconSize = computed(() => `${props.pulseIconSize}px`);

function dotAnimation() {
  gsap.fromTo(
    ".pulse-container__dot",
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".background",
        start: "top top",
        end: "bottom+=80% bottom",
        scrub: 0.5,
      },
      opacity: 1,
    }
  );
  gsap.fromTo(
    ".pulse-container",
    { x: "12.5%" },
    {
      scrollTrigger: {
        trigger: "#sectionTwo",
        start: "top 75%",
        end: "top top",
        scrub: 0.5,
      },
      x: "37.5%",
    }
  );
  gsap.fromTo(
    ".pulse-container",
    { x: "37.5%" },
    {
      scrollTrigger: {
        trigger: "#reviews",
        start: "top 75%",
        end: "top top",
        scrub: 0.5,
      },
      x: "62.5%",
    }
  );
  gsap.fromTo(
    ".pulse-container",
    { x: "62.5%" },
    {
      scrollTrigger: {
        trigger: "#gallery",
        start: "top 75%",
        end: "top top",
        scrub: 0.5,
      },
      x: "87.5%",
    }
  );
  gsap.set(".pulse-container", { x: "12.5%" });
}
onMounted(() => {
  dotAnimation();
});

onUnmounted(() => {
  ScrollTrigger.killAll();
});
</script>

<style scoped lang="scss">
.pulse-container__dot {
  transform: translateX(-50%);
  width: v-bind(pulseIconSize);
  height: v-bind(pulseIconSize);
  margin-bottom: 0.5rem;
}
</style>
