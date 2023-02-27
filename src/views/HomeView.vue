<template>
  <main-nav />
  <HeroSection id="hero" :bannerData="homepageStore.banner" />
  <section id="sectionTwo" />
  <section id="sectionThree" />
  <GallerySection id="gallery" :galleryData="homepageStore.gallery" />
</template>

<script setup>
import MainNav from "@/components/navbar/MainNav.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import GallerySection from "@/components/gallery/GallerySection.vue";

import { onMounted } from "vue";
import { useRoute } from "vue-router";

import { useHomepageStore } from "@/stores/HomepageStore.js";

const homepageStore = useHomepageStore();

onMounted(() => {
  const route = useRoute();
  homepageStore.getHomepageData(route.query.preview);
});
</script>

<style scoped>
#sectionTwo {
  width: 100%;
  height: 100vh;
  background: yellow;
}
#sectionThree {
  width: 100%;
  height: 100vh;
  background: orange;
}
</style>
