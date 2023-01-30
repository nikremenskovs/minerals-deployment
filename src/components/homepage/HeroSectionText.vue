<template>
  <div class="title">
    <h1 class="title__heading">Minerals</h1>
    <h2 class="title__subheading">and more</h2>
  </div>
  <div class="info">
    <h2 class="info__heading">why us?</h2>
    <p class="info__description">
      You should buy minerals because they are beautiful, they appeal to you,
      each one is unique, natural, and not man-made. Do not buy minerals as
      investments - unless you have 20 years to wait for a return on your
      investment. And definitely do not believe a mineral dealer if he advises
      you to invest in minerals - the only person that will realize a profit is
      the dealer.
    </p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const windowHeight = ref(window.innerHeight);
function textAnimation() {
  gsap.fromTo(
    ".title",
    { opacity: 1 },
    {
      scrollTrigger: {
        trigger: ".title",
        start: 0,
        end: windowHeight.value * (40 / 100),
        scrub: 0.1,
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
    }
  );
  gsap.set(".info", { opacity: 0 });
  gsap.fromTo(
    ".info",
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".info",
        start: windowHeight.value * (45 / 100),
        end: windowHeight.value * (80 / 100),
        scrub: 0.1,
        toggleActions: "restart none none reverse",
      },
      opacity: 1,
    }
  );
  gsap.fromTo(
    ".info",
    { opacity: 1 },
    {
      scrollTrigger: {
        trigger: ".info",
        start: windowHeight.value * (110 / 100),
        end: windowHeight.value * (160 / 100),
        scrub: 0.1,
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
    }
  );
  gsap.set(".info", { opacity: 0 });

  gsap.fromTo(
    ".info__description",
    { y: 50, x: "-50%" },
    {
      scrollTrigger: {
        trigger: ".info__description",
        start: windowHeight.value * (45 / 100),
        end: windowHeight.value * (80 / 100),
        scrub: 0.5,
        toggleActions: "restart none none reverse",
      },
      y: -150,
    }
  );
}
function handleResize() {
  gsap.killTweensOf(".info");
  gsap.killTweensOf(".title");
  gsap.killTweensOf(".info__description");
  windowHeight.value = window.innerHeight;
  textAnimation();
}

onMounted(() => {
  textAnimation();
  window.addEventListener("resize", () => handleResize());
});
onUnmounted(() => {
  ScrollTrigger.killAll();
  window.removeEventListener("resize", () => handleResize());
});
</script>

<style scoped lang="scss">
.title {
  text-transform: uppercase;
  text-align: center;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &__heading {
    font-size: 4rem;
    margin: 0 0 1rem 0;
  }

  &__subheading {
    font-size: 2rem;
    margin: 0;
  }
}

.info {
  text-align: center;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;

  &__heading {
    text-transform: capitalize;
    font-size: 3rem;
    transform: translate(-50%, -250%);
  }
}

.visible {
  visibility: visible;
}
</style>
