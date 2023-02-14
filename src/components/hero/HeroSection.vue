<template>
  <section class="hero">
    <div class="hero--sticky">
      <HeroSectionBackground
        :foreground="bannerData.foreground"
        :background="bannerData.background"
      />
      <HeroSectionText
        :titleHeading="bannerData.titleHeading"
        :titleSubheading="bannerData.titleSubheading"
        :infoHeading="bannerData.infoHeading"
        :infoDescription="bannerData.infoDescription"
      />
      <HeroSectionCues :cueScrollImage="bannerData.scrollCue" />
    </div>
  </section>
</template>

<script setup>
import HeroSectionBackground from "./HeroSectionBackground.vue";
import HeroSectionText from "./HeroSectionText.vue";
import HeroSectionCues from "./HeroSectionCues.vue";

import { onMounted } from "vue";
import { useBannerStore } from "@/stores/BannerStore.js";
import { storeToRefs } from "pinia";

const bannerStore = useBannerStore();
const { bannerData } = storeToRefs(bannerStore);

onMounted(() => {
  bannerStore.getBannerData();
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
