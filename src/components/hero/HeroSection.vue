<template>
  <section class="hero">
    <div class="hero--sticky">
      <hero-section-background
        foreground="foreground.png"
        background="background.jpg"
      />
      <hero-section-text />
    </div>
  </section>
</template>

<script setup>
import HeroSectionBackground from "./HeroSectionBackground.vue";
import HeroSectionText from "./HeroSectionText.vue";
</script>

<style scoped lang="scss">
@import "../../styles/_mixins.scss";

.hero {
  @include positioning(relative, 100%, 260vh);

  &--sticky {
    font-family: sans-serif;
    @include positioning(sticky, 100%, 100vh);
    top: 0;
    overflow: hidden;
  }
}
</style>
