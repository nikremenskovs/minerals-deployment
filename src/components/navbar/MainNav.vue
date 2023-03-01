<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li class="main-nav__item">
        <router-link class="main-nav__link" to="#hero">hero</router-link>
      </li>
      <li class="main-nav__item">
        <router-link class="main-nav__link" to="#sectionTwo">two</router-link>
      </li>
      <li class="main-nav__item">
        <router-link class="main-nav__link" to="#sectionThree">
          three
        </router-link>
      </li>
      <li class="main-nav__item">
        <router-link class="main-nav__link" to="#gallery">gallery</router-link>
      </li>
    </ul>
    <MainNavDot />
  </nav>
</template>

<script setup>
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
  &__item {
    width: 25%;
    display: flex;
    justify-content: center;
  }
  &__link {
    color: white;
    text-transform: capitalize;
    text-decoration: none;
  }
}
</style>
