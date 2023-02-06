<template>
  <section class="hero">
    <div class="hero--sticky">
      <hero-section-background
        foreground="foreground.png"
        background="background.jpg"
      />
      <hero-section-text />
      <hero-section-cues
        cueScrollImage="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d00043816a6c695bcf1581a_scroll.gif"
      />
    </div>
  </section>
</template>

<script setup>
import HeroSectionBackground from "./HeroSectionBackground.vue";
import HeroSectionText from "./HeroSectionText.vue";
import HeroSectionCues from "./HeroSectionCues.vue";
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
