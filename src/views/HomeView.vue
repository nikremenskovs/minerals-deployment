<template>
  <main-nav />
  <HeroSection
    id="hero"
    :foreground="homepageData.bannerData.foreground"
    :background="homepageData.bannerData.background"
    :titleHeading="homepageData.bannerData.titleHeading"
    :titleSubheading="homepageData.bannerData.titleSubheading"
    :infoHeading="homepageData.bannerData.infoHeading"
    :infoDescription="homepageData.bannerData.infoDescription"
    :scrollCue="homepageData.bannerData.scrollCue"
  />
  <section id="sectionTwo" />
  <section id="sectionThree" />
  <GallerySection
    id="gallery"
    :galleryImages="homepageData.galleryData.galleryImages"
    :galleryHeading="homepageData.galleryData.galleryHeading"
    :gallerySubheading="homepageData.galleryData.gallerySubheading"
  />
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
