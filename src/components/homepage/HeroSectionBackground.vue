<template>
  <div class="background"></div>
  <div class="foreground"></div>
  <div class="overlay"></div>
</template>

<script setup>
import { computed } from "vue";
import { useParallax } from "../../composables/useParallax.js";

const props = defineProps({
  foreground: { type: String, required: true, default: "" },
  background: { type: String, required: true, default: "" },
});
const foregroundImg = `url('src/assets/images/${props.foreground}')`;
const backgroundImg = `url('src/assets/images/${props.background}')`;

const { windowScroll, backgroundSize } = useParallax();
const backgroundScale = computed(
  () => (100 + backgroundSize.value * 0.4) / 100
);
const foregroundScale = computed(() => {
  if (windowScroll.y.value < 1000) {
    return (100 + backgroundSize.value) / 100;
  } else {
    return 1.71357;
  }
});
const foregroundTranslate = computed(() => {
  if (windowScroll.y.value > 1000) {
    return `${(0 + (windowScroll.y.value - 1000) / 4) * -1}px`;
  } else {
    return "0px";
  }
});
const overlayOpacity = computed(() => {
  if (windowScroll.y.value < 1000) {
    return 0;
  } else {
    return (0 + windowScroll.y.value - 1000) / 800;
  }
});
</script>

<style scoped lang="scss">
@import "../../styles/_mixins.scss";

.background {
  @include positioning(absolute, 100%, 100vh);
  background-image: v-bind(backgroundImg);
  background-size: cover;
  background-position: center;
  transform: scale3d(#{v-bind(backgroundScale)}, #{v-bind(backgroundScale)}, 1);
}

.overlay {
  @include positioning(absolute, 100%, 100vh);
  background-color: black;
  opacity: v-bind(overlayOpacity);
}

.foreground {
  @include positioning(absolute, 100%, 150vh);
  background-image: v-bind(foregroundImg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: scale3d(#{v-bind(foregroundScale)}, #{v-bind(foregroundScale)}, 1)
    translate3d(0px, #{v-bind(foregroundTranslate)}, 0px);
}
</style>
