<template>
  <div class="layout-grid" @scaleGallery="scaleGallery">
    <picture
      v-for="(image, index) in props.galleryImages"
      :key="image"
      :class="`layout-grid__${index}`"
    >
      <source
        :srcset="`${image.image}?width=max`"
        media="(min-width: 1440px)"
      />
      <source
        :srcset="`${image.image}?width=1440`"
        media="(min-width: 1024px)"
      />
      <source
        :srcset="`${image.image}?width=1024`"
        media="(min-width: 768px)"
      />
      <source :srcset="`${image.image}?width=768`" media="(min-width: 425px)" />
      <source :srcset="`${image.image}?width=425`" media="(min-width: 320px)" />
      <img class="layout-grid__image" :src="image.image" :alt="image.altText" />
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
  @for $n from 0 through 10 {
    &__#{$n} {
      @include galleryGridImage(
        nth(map-get($galleryGridImageMap, image#{$n}), 1),
        nth(map-get($galleryGridImageMap, image#{$n}), 2),
        nth(map-get($galleryGridImageMap, image#{$n}), 3),
        nth(map-get($galleryGridImageMap, image#{$n}), 4),
        nth(map-get($galleryGridImageMap, image#{$n}), 5)
      );
    }
  }
}
</style>
