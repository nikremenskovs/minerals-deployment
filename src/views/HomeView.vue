<template>
  <main-nav />
  <HeroSection id="hero" v-bind="homepageData.bannerData" />
  <SectionTwo
    id="sectionTwo"
    :cards="homepageData.sectionTwoCards"
    :parallax="homepageData.sectionTwoParallax"
  />
  <section id="sectionThree" />
  <GallerySection id="gallery" v-bind="homepageData.galleryData" />
</template>

<script setup>
import MainNav from "@/components/navbar/MainNav.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SectionTwo from "@/components/sectionTwo/SectionTwo.vue";
import GallerySection from "@/components/gallery/GallerySection.vue";

import { useRoute } from "vue-router";

import { useHomepageStore } from "@/stores/HomepageStore.js";

const homepageStore = useHomepageStore();
const route = useRoute();
const homepageData = await homepageStore.makeRequest(route.query.preview);
</script>

<style scoped lang="scss">
#sectionThree {
  width: 100%;
  height: 100vh;
  background: orange;
}
</style>
