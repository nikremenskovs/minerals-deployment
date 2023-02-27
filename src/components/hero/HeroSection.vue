<template>
  <section class="hero">
    <div class="hero--sticky">
      <HeroSectionBackground
        :foreground="props.bannerData.foreground"
        :background="props.bannerData.background"
      />
      <HeroSectionText
        :titleHeading="props.bannerData.titleHeading"
        :titleSubheading="props.bannerData.titleSubheading"
        :infoHeading="props.bannerData.infoHeading"
        :infoDescription="props.bannerData.infoDescription"
      />
      <HeroSectionCues :cueScrollImage="bannerData.scrollCue" />
    </div>
  </section>
</template>

<script setup>
import HeroSectionBackground from "./HeroSectionBackground.vue";
import HeroSectionText from "./HeroSectionText.vue";
import HeroSectionCues from "./HeroSectionCues.vue";

const props = defineProps({
  bannerData: { type: Object, required: true },
});
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

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
