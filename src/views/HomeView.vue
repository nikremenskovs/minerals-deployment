<template>
  <main-nav />
  <HeroSection id="hero" />
  <section id="sectionTwo" />
  <section id="sectionThree" />
  <GallerySection id="gallery" />
</template>

<script setup>
import MainNav from "@/components/navbar/MainNav.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import GallerySection from "@/components/gallery/GallerySection.vue";
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
