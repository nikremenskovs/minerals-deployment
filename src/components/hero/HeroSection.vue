<template>
  <section class="hero">
    <div class="hero--sticky">
      <HeroSectionBackground :foreground="props.foreground" :background="props.background" />
      <HeroSectionText :titleHeading="props.titleHeading" :titleSubheading="props.titleSubheading"
        :infoHeading="props.infoHeading" :infoDescription="props.infoDescription" />
      <HeroSectionCues :scrollCue="props.scrollCue" />
    </div>
  </section>
</template>

<script setup>
import HeroSectionBackground from "./HeroSectionBackground.vue";
import HeroSectionText from "./HeroSectionText.vue";
import HeroSectionCues from "./HeroSectionCues.vue";
import { ref, onMounted } from 'vue'

const props = defineProps({
  foreground: { type: Object, required: true },
  background: { type: Object, required: true },
  titleHeading: { type: String, required: true },
  titleSubheading: { type: String, required: true },
  infoHeading: { type: String, required: true },
  infoDescription: { type: String, required: true },
  scrollCue: { type: Object, required: true },
});



onMounted(() => {
  console.log('Component mounted')
})
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
