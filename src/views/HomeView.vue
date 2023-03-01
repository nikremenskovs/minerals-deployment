<template>
  <main-nav />
  <HeroSection id="hero" :bannerData="homepageData.bannerData" />
  <section id="sectionTwo" />
  <section id="sectionThree" />
  <GallerySection id="gallery" :galleryData="homepageData.galleryData" />
</template>

<script setup>
import MainNav from "@/components/navbar/MainNav.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import GallerySection from "@/components/gallery/GallerySection.vue";

import { useRoute } from "vue-router";

import { useHomepageStore } from "@/stores/HomepageStore.js";

const homepageStore = useHomepageStore();

const route = useRoute();
const homepageData = await homepageStore.getHomepageData(route.query.preview);
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
