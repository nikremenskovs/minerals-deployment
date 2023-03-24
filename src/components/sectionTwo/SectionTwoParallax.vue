<template>
  <div class="sectionTwoParallax-container">
    <h2 class="sectionTwoParallax-container__heading">
      {{ props.heading }}
    </h2>
    <img :src="props.centrepiece.image" :alt="props.centrepiece.altText"
      class="sectionTwoParallax-container__centrepiece" />
    <img v-for="(satellite, index) in props.satellites" :key="index" :src="satellite.image" :alt="satellite.altText"
      :class="`sectionTwoParallax-container__satellite${index}`" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  heading: { type: String, required: true },
  centrepiece: { type: Object, required: true },
  satellites: { type: Array, required: true },
});

function sectionTwoParallaxAnimation() {
  gsap.fromTo(
    ".sectionTwoParallax-container__heading",
    { opacity: -2 },
    {
      scrollTrigger: {
        trigger: ".sectionTwoParallax-container",
        start: "top 90%",
        end: "top top",
        scrub: 0.5,
      },
      opacity: 1,
    }
  );
  gsap.fromTo(
    ".sectionTwoParallax-container__centrepiece",
    { rotate: "45deg", x: "-50%", y: "-50%" },
    {
      scrollTrigger: {
        trigger: ".sectionTwoParallax-container",
        start: "top bottom",
        end: "bottom center",
        scrub: 0.5,
      },
      rotate: "0",
    }
  );
  gsap.fromTo(
    ".sectionTwoParallax-container__satellite0",
    { y: "250%" },
    {
      scrollTrigger: {
        trigger: ".sectionTwoParallax-container",
        start: "top bottom",
        end: "bottom center",
        scrub: 0.5,
      },
      y: "-250%",
    }
  );
  gsap.fromTo(
    ".sectionTwoParallax-container__satellite1",
    { y: "-325%", opacity: 1, rotate: 0 },
    {
      scrollTrigger: {
        trigger: ".sectionTwoParallax-container",
        start: "top bottom",
        end: "bottom center",
        scrub: 0.5,
      },
      y: "0%",
      opacity: 0.2,
      rotate: "360deg",
    }
  );
  gsap.fromTo(
    ".sectionTwoParallax-container__satellite2",
    { y: "0", rotate: 0 },
    {
      scrollTrigger: {
        trigger: ".sectionTwoParallax-container",
        start: "top 80%",
        end: "bottom center",
        scrub: 0.5,
      },
      y: "380%",
      rotate: "-180deg",
    }
  );
  gsap.fromTo(
    ".sectionTwoParallax-container__satellite3",
    { y: 0, rotate: 0 },
    {
      scrollTrigger: {
        trigger: ".sectionTwoParallax-container",
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
      },
      y: "-200%",
      rotate: "360deg",
    }
  );
}
onMounted(() => {
  sectionTwoParallaxAnimation();
});
onUnmounted(() => {
  ScrollTrigger.killAll();
});
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.sectionTwoParallax-container {
  height: 70vh;

  position: relative;
  overflow: hidden;

  &__heading {
    color: white;
    font-family: sans-serif;
    font-size: 3rem;
    text-align: center;
    text-transform: capitalize;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__centrepiece {
    position: absolute;
    opacity: 0.4;
    top: 50%;
    left: 50%;
    width: 40%;
    max-width: 200px;
  }

  @for $n from 0 through 3 {
    &__satellite#{$n} {
      @include sectionTwoSatelliteImage(nth(map-get($sectionTwoSatelliteImageMap, satellite#{$n}), 1),
        nth(map-get($sectionTwoSatelliteImageMap, satellite#{$n}), 2),
        nth(map-get($sectionTwoSatelliteImageMap, satellite#{$n}), 3),
        nth(map-get($sectionTwoSatelliteImageMap, satellite#{$n}), 4),
        nth(map-get($sectionTwoSatelliteImageMap, satellite#{$n}), 5));
    }
  }
}

@media (min-width: 768px) {
  .sectionTwoParallax-container {
    height: 100vh;
  }
}
</style>
