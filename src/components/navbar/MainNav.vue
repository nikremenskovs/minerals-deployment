<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <main-nav-item to=".hero">hero</main-nav-item>
      <main-nav-item to=".sectionTwo">two</main-nav-item>
      <main-nav-item to=".sectionThree">three</main-nav-item>
      <main-nav-item to=".sectionFour">four</main-nav-item>
    </ul>
    <main-nav-dot />
  </nav>
</template>

<script setup>
import MainNavItem from "@/components/navbar/MainNavItem.vue";
import MainNavDot from "@/components/navbar/MainNavDot.vue";
</script>

<style scoped lang="scss">
.main-nav {
  width: 100%;
  position: fixed;
  z-index: 1;
  font-family: sans-serif;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6),
    hsla(0, 0%, 100%, 0)
  );

  &__list {
    display: flex;
    padding: 3rem 0 0 0;
    margin: 0 0 0.5rem 0;
  }
}
</style>
