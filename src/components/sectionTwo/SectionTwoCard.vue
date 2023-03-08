<template>
  <router-link
    :ref="box"
    :to="props.to"
    class="section-two-card"
    @mouseenter="hoverEnter(props.index)"
    @mouseleave="hoverLeave(props.index)"
  >
    <ResponsiveImage
      :imgSrc="props.imageSrc"
      :imgAlt="props.imageAlt"
      :sectionTwoTriggerIndex="index"
      :sourcesMap="[
        { assetWidth: 'max', media: '1440px' },
        { assetWidth: '1440', media: '1024px' },
        { assetWidth: '1024', media: '768px' },
        { assetWidth: '768', media: '425px' },
        { assetWidth: '425', media: '320px' },
      ]"
    />

    <div class="section-two-card__overlay" :class="`overlay--${props.index}`" />
    <div class="text" :class="`text--${index}`">
      <h2 :class="`text__heading`">{{ props.heading }}</h2>
      <p :class="`text__subheading`">{{ props.subheading }}</p>
      <img :class="`text__arrow`" src="@/assets/images/arrowRight.png" />
    </div>
  </router-link>
</template>

<script setup>
import { gsap } from "gsap";

import { ref, onMounted } from "vue";

const box = ref();

let matchMedia = gsap.matchMedia();

function sectionTwoLoad(index) {
  gsap.fromTo(
    `.sectionTwoImage--${index}`,
    { y: `${index * 50 + 25}%`, opacity: 0 },
    {
      scrollTrigger: {
        trigger: "#sectionTwo",
        start: "top center",
        toggleActions: "play none none none",
      },
      y: "0",
      opacity: 1,
      duration: 1,
    }
  );
}

function hoverEnter(index) {
  matchMedia.add("(min-width: 768px)", () => {
    gsap.to(`.text--${index}`, { y: "0", duration: 0.25 });
    gsap.to(`.overlay--${index}`, { opacity: 0, duration: 1 });
    gsap.to(`.sectionTwoImage--${index}`, { scale: 1.2, duration: 2 });
  });
  matchMedia.add("(max-width: 767px)", () => {
    gsap.to(".text", { y: 0 });
    gsap.to(".section-two-card__overlay", { opacity: 0.5 });
    gsap.to(".responsive-position", { scale: 1 });
  });
}
function hoverLeave(index) {
  matchMedia.add("(min-width: 768px)", () => {
    gsap.to(`.text--${index}`, { y: "150%", duration: 0.25 });
    gsap.to(`.overlay--${index}`, {
      opacity: 0.5,
      duration: 1,
    });
    gsap.to(`.sectionTwoImage--${index}`, { scale: 1, duration: 2 });
  });
  matchMedia.add("(max-width: 767px)", () => {
    gsap.to(".text", { y: 0 });
    gsap.to(".section-two-card__overlay", { opacity: 0.5 });
    gsap.to(".responsive-position", { scale: 1 });
  });
}

const props = defineProps({
  index: { type: Number, required: true },
  to: { type: String, required: true },
  heading: { type: String, required: true },
  subheading: { type: String, required: true },
  imageAlt: { type: String, required: true },
  imageSrc: { type: String, required: true },
});

onMounted(() => {
  sectionTwoLoad(props.index);
});
</script>

<style scoped lang="scss">
.section-two-card {
  position: relative;
  display: block;
  height: 400px;
  width: 100%;
  overflow: hidden;
  &__overlay {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    position: absolute;
    top: 0;
  }
}
.text {
  position: absolute;
  bottom: 5%;
  left: 5%;
  transform: translateY(0%);
  font-family: sans-serif;
  color: white;
  text-transform: capitalize;
  &__heading {
    margin-bottom: 0.5rem;
  }
  &__subheading {
    margin: 0;
    display: inline-block;
    margin-right: 0.5rem;
  }
  &__arrow {
    width: 1rem;
  }
}

@media (min-width: 768px) {
  .section-two-card {
    height: 100vh;
  }
  .text {
    left: 15%;
    transform: translateY(150%);
  }
}
</style>
