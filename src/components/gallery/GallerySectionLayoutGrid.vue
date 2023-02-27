<template>
  <div class="layout-grid">
    <div v-for="n in 11" :key="n" :class="`layout-grid__${n}`"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  galleryImages: { type: Array, required: true },
});

const image1 = computed(() => `url(${props.galleryImages[0]})`);
const image2 = computed(() => `url(${props.galleryImages[1]})`);
const image3 = computed(() => `url(${props.galleryImages[2]})`);
const image4 = computed(() => `url(${props.galleryImages[3]})`);
const image5 = computed(() => `url(${props.galleryImages[4]})`);
const image6 = computed(() => `url(${props.galleryImages[5]})`);
const image7 = computed(() => `url(${props.galleryImages[6]})`);
const image8 = computed(() => `url(${props.galleryImages[7]})`);
const image9 = computed(() => `url(${props.galleryImages[8]})`);
const image10 = computed(() => `url(${props.galleryImages[9]})`);
const image11 = computed(() => `url(${props.galleryImages[10]})`);
function opacityGallery() {
  gsap.fromTo(
    ".view-gallery",
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".gallery",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 3,
      delay: 0.5,
    }
  );
  for (let n = 1; n <= 11; n++) {
    gsap.to(`.layout-grid__${n}`, {
      scrollTrigger: {
        trigger: ".gallery",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none none none",
      },
      opacity: 1,
      delay: n / 100 + Math.random(),
      duration: n / 100 + Math.random() + 3,
    });
  }
}

onMounted(() => {
  opacityGallery();
});

onUnmounted(() => {
  ScrollTrigger.killAll();
});
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";
.layout-grid {
  @include positioning(absolute, 100%, 100%);
  display: grid;
  top: 0;
  grid-gap: 0.25rem;
  grid-template: repeat(7, 1fr) repeat(8, 1fr);

  &__1 {
    @include galleryGridImage(1 / span 2, 1 / span 3, 0.2, _, _);
    background-image: v-bind(image1);
  }
  &__2 {
    @include galleryGridImage(1 / span 2, 4 / span 1, 0.4, -400%, 0);
    background-image: v-bind(image2);
  }
  &__3 {
    @include galleryGridImage(1 / span 1, 5 / span 1, 1, 0, 100%);
    background-image: v-bind(image3);
  }
  &__4 {
    @include galleryGridImage(2 / span 1, 5 / span 1, 0.8, -75%, -50%);
    background-image: v-bind(image4);
  }
  &__5 {
    @include galleryGridImage(1 / span 2, 6 / span 3, 0.7, 0, 75%);
    background-image: v-bind(image5);
  }
  &__6 {
    @include galleryGridImage(3 / span 2, 1 / span 2, 0.6, 150%, 0);
    background-image: v-bind(image6);
  }
  &__7 {
    @include galleryGridImage(3 / span 5, 3 / span 3, 0.5, _, _);
    background-image: v-bind(image7);
  }
  &__8 {
    @include galleryGridImage(3 / span 4, 6 / span 3, 0.4, _, _);
    background-image: v-bind(image8);
  }
  &__9 {
    @include galleryGridImage(5 / span 3, 1 / span 2, 0.2, _, _);
    background-image: v-bind(image9);
  }
  &__10 {
    @include galleryGridImage(7 / span 1, 6 / span 1, 1, 0, -75%);
    background-image: v-bind(image10);
  }
  &__11 {
    @include galleryGridImage(7 / span 1, 7 / span 2, 0.6, _, _);
    background-image: v-bind(image11);
  }
}
</style>
