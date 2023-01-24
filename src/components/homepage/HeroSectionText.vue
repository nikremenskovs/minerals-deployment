<template>
  <div class="title">
    <h1 class="title__heading">Minerals</h1>
    <h2 class="title__subheading">and more</h2>
  </div>
  <div class="info">
    <h2 class="info__heading">why us?</h2>
    <p class="info__description">
      You should buy minerals because they are beautiful, they appeal to you,
      each one is unique, natural, and not man-made. Do not buy minerals as
      investments - unless you have 20 years to wait for a return on your
      investment. And definitely do not believe a mineral dealer if he advises
      you to invest in minerals - the only person that will realize a profit is
      the dealer.
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useParallax } from "../../composables/useParallax.js";
const { windowScroll } = useParallax();
const heroTitleOpacity = computed(() => 1 - windowScroll.y.value / 8);
const heroInfoOpacity = computed(() => {
  if (windowScroll.y.value < 1000) {
    return 0 + windowScroll.y.value / 1000;
  } else {
    return 1 - (windowScroll.y.value - 1000) * 0.00175;
  }
});
const heroInfoParaTransform = computed(() => {
  const value = (100 + windowScroll.y.value / 20) * -1;
  if (value < -150) {
    return "-150px";
  } else {
    return `${value}px`;
  }
});
</script>

<style scoped lang="scss">
.title {
  text-transform: uppercase;
  text-align: center;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: v-bind(heroTitleOpacity);

  &__heading {
    font-size: 4rem;
    margin: 0 0 1rem 0;
  }

  &__subheading {
    font-size: 2rem;
    margin: 0;
  }
}

.info {
  text-align: center;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: v-bind(heroInfoOpacity);

  &__heading {
    text-transform: capitalize;
    font-size: 3rem;
    transform: translate(-50%, -250%);
  }

  &__description {
    transform: translate3d(-50%, #{v-bind(heroInfoParaTransform)}, 0px);
  }
}
</style>
