<template>
  <div class="pulse-container">
    <div class="pulse-container__dot" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function dotAnimation() {
  gsap.fromTo(
    ".pulse-container__dot",
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".background",
        start: "top top",
        end: "bottom+=80% bottom",
        scrub: true,
        toggleActions: "restart none none reverse",
      },
      opacity: 1,
    }
  );
  gsap.fromTo(
    ".pulse-container",
    { x: "12.5%" },
    {
      scrollTrigger: {
        trigger: ".sectionTwo",
        start: "top 75%",
        end: "top top",
        scrub: 0.1,
        toggleActions: "restart none none reverse",
      },
      x: "37.5%",
    }
  );
  gsap.fromTo(
    ".pulse-container",
    { x: "37.5%" },
    {
      scrollTrigger: {
        trigger: ".sectionThree",
        start: "top 75%",
        end: "top top",
        scrub: 0.1,
        toggleActions: "restart none none reverse",
      },
      x: "62.5%",
    }
  );
  gsap.fromTo(
    ".pulse-container",
    { x: "62.5%" },
    {
      scrollTrigger: {
        trigger: ".sectionFour",
        start: "top 75%",
        end: "top top",
        scrub: 0.1,
        toggleActions: "restart none none reverse",
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
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background-color: white;
  margin-bottom: 0.5rem;
}
</style>
