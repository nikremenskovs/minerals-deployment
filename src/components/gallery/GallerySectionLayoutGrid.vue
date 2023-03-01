<template>
  <div class="layout-grid">
    <div v-for="n in 11" :key="n" :class="`layout-grid__${n}`"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

  @for $n from 1 through 11 {
    &__#{$n} {
      background-image: url("./src/assets/images/gallery#{$n}.jpeg");
    }
  }
  &__1 {
    @include galleryGridImage(1 / span 2, 1 / span 3, 0.2, _, _);
  }
  &__2 {
    @include galleryGridImage(1 / span 2, 4 / span 1, 0.4, -400%, 0);
  }
  &__3 {
    @include galleryGridImage(1 / span 1, 5 / span 1, 1, 0, 100%);
  }
  &__4 {
    @include galleryGridImage(2 / span 1, 5 / span 1, 0.8, -75%, -50%);
  }
  &__5 {
    @include galleryGridImage(1 / span 2, 6 / span 3, 0.7, 0, 75%);
  }
  &__6 {
    @include galleryGridImage(3 / span 2, 1 / span 2, 0.6, 150%, 0);
  }
  &__7 {
    @include galleryGridImage(3 / span 5, 3 / span 3, 0.5, _, _);
  }
  &__8 {
    @include galleryGridImage(3 / span 4, 6 / span 3, 0.4, _, _);
  }
  &__9 {
    @include galleryGridImage(5 / span 3, 1 / span 2, 0.2, _, _);
  }
  &__10 {
    @include galleryGridImage(7 / span 1, 6 / span 1, 1, 0, -75%);
  }
  &__11 {
    @include galleryGridImage(7 / span 1, 7 / span 2, 0.6, _, _);
  }
}
</style>
