<template>
  <main-nav />
  <hero-section class="hero" />
  <section class="sectionTwo" />
  <section class="sectionThree" />
  <section class="sectionFour" />
</template>

<script setup>
import HeroSection from "@/components/hero/HeroSection.vue";
import MainNav from "@/components/navbar/MainNav.vue";
</script>

<style scoped>
.sectionTwo {
  width: 100%;
  height: 100vh;
  background: yellow;
}
.sectionThree {
  width: 100%;
  height: 100vh;
  background: orange;
}
.sectionFour {
  width: 100%;
  height: 100vh;
  background: blue;
}
</style>
