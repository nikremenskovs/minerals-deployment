<template>
  <section class="gallery">
    <div class="background-grid">
      <div v-for="n in 4" :key="n" class="background-grid__quarter" />
    </div>
    <GallerySectionLayoutGrid :galleryImages="galleryData.galleryImages" />
    <GallerySectionControl
      :galleryHeading="galleryData.galleryHeading"
      :gallerySubheading="galleryData.gallerySubheading"
    />
  </section>
</template>

<script setup>
import GallerySectionControl from "./GallerySectionControl.vue";
import GallerySectionLayoutGrid from "./GallerySectionLayoutGrid.vue";

import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useGalleryStore } from "@/stores/GalleryStore.js";
import { storeToRefs } from "pinia";

const galleryStore = useGalleryStore();
const { galleryData } = storeToRefs(galleryStore);

onMounted(() => {
  const route = useRoute();
  galleryStore.getGalleryData(route.query.preview);
});
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.gallery {
  @include positioning(relative, 100%, 100vh);
  background: black;
}
.background-grid {
  width: 100%;
  height: 100%;
  display: flex;
  border: solid 1px hsla(0, 0%, 100%, 0.2);
  box-sizing: border-box;
  &__quarter {
    height: 100%;
    width: 25%;
    border-right: solid 1px hsla(0, 0%, 100%, 0.2);
  }
}
</style>
