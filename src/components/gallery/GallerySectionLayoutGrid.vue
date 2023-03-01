<template>
  <div class="layout-grid" @scaleGallery="scaleGallery">
    <picture
      v-for="(image, index) in props.galleryImages"
      :key="index"
      :class="`layout-grid__${index}`"
    >
      <source :srcset="image + '?width=max'" media="(min-width: 1440px)" />
      <source :srcset="image + '?width=1440'" media="(min-width: 1024px)" />
      <source :srcset="image + '?width=1024'" media="(min-width: 768px)" />
      <source :srcset="image + '?width=768'" media="(min-width: 425px)" />
      <source :srcset="image + '?width=425'" media="(min-width: 320px)" />
      <img
        class="layout-grid__image"
        :src="image"
        :alt="`gallery image ${index}`"
      />
    </picture>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  galleryImages: { type: Array, required: true },
});

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
  props.galleryImages.forEach((image, index) => {
    gsap.to(`.layout-grid__${index}`, {
      scrollTrigger: {
        trigger: ".gallery",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none none none",
      },
      opacity: 1,
      delay: index / 100 + Math.random(),
      duration: index / 100 + Math.random() + 3,
    });
  });
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
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 1fr);
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
  &__0 {
    @include galleryGridImage(1 / span 2, 1 / span 3, 0.2, _, _);
  }
  &__1 {
    @include galleryGridImage(1 / span 2, 4 / span 1, 0.4, -200%, 0);
  }
  &__2 {
    @include galleryGridImage(1 / span 1, 5 / span 1, 1, 0, 100%);
  }
  &__3 {
    @include galleryGridImage(2 / span 1, 5 / span 1, 0.8, -75%, -50%);
  }
  &__4 {
    @include galleryGridImage(1 / span 2, 6 / span 3, 0.7, 0, 75%);
  }
  &__5 {
    @include galleryGridImage(3 / span 2, 1 / span 2, 0.6, 75%, 0);
  }
  &__6 {
    @include galleryGridImage(3 / span 5, 3 / span 3, 0.5, _, _);
  }
  &__7 {
    @include galleryGridImage(3 / span 4, 6 / span 3, 0.4, _, _);
  }
  &__8 {
    @include galleryGridImage(5 / span 3, 1 / span 2, 0.2, _, _);
  }
  &__9 {
    @include galleryGridImage(7 / span 1, 6 / span 1, 1, 0, -75%);
  }
  &__10 {
    @include galleryGridImage(7 / span 1, 7 / span 2, 0.6, _, _);
  }
}
</style>
