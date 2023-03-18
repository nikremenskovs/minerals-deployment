<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li class="main-nav__item">
        <router-link class="main-nav__link" to="#hero">
          {{ props.headingOne }}
        </router-link>
      </li>
      <li class="main-nav__item">
        <router-link class="main-nav__link" to="#sectionTwo">
          {{ props.headingTwo }}
        </router-link>
      </li>
      <li class="main-nav__item">

        <router-link class="main-nav__link" to="#reviews">  {{ props.headingThree }} </router-link>

      </li>
      <li class="main-nav__item">
        <router-link class="main-nav__link" to="#gallery">
          {{ props.headingFour }}
        </router-link>
      </li>
    </ul>
    <MainNavDot
      :pulseIcon="props.pulseIcon"
      :pulseIconSize="props.pulseIconSize"
    />
  </nav>
</template>

<script setup>
import MainNavDot from "@/components/navbar/MainNavDot.vue";
import { computed } from "vue";

const props = defineProps({
  headingOne: { type: String, required: true },
  headingTwo: { type: String, required: true },
  headingThree: { type: String, required: true },
  headingFour: { type: String, required: true },
  textColor: { type: String, required: true },
  pulseIcon: { type: Array, required: true },
  pulseIconSize: { type: Number, required: true },
});

const textColor = computed(() => props.textColor);
</script>

<style scoped lang="scss">
.main-nav {
  width: 100%;
  position: fixed;
  z-index: 2;
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
    color: v-bind(textColor);
    text-transform: capitalize;
    text-decoration: none;
  }
}
</style>
