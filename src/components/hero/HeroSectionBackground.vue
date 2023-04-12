<template>
  <ResponsiveImage 
      class="background"
      :imgSrc="props.background.image[0]"
      :imgAlt="props.background.altText"
      :sourcesMap="[
        { assetWidth: 'max', media: '1440px' },
        { assetWidth: '1440', media: '1024px' },
        { assetWidth: '1024', media: '320px' },
      ]"
    />
    <ResponsiveImage 
      class="foreground"
      :imgSrc="props.foreground.image[0]"
      :imgAlt="props.foreground.altText"
      :sourcesMap="[
        { assetWidth: 'max', media: '1440px' },
        { assetWidth: '1440', media: '1024px' },
        { assetWidth: '1024', media: '320px' },
      ]"
    />
  <div class="overlay" />
</template>

<script setup>
import { onMounted, onUnmounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  foreground: { type: Object, required: true },
  background: { type: Object, required: true },
});

function backgroundAnimation() {
  gsap.to(
    ".background",
    {
      scrollTrigger: {
        trigger: ".background",
        start: "top top",
        end: "bottom+=100% bottom",
        scrub: 0.5,
        pinSpacing: false
      },
      scale: 1.3,
    }
  );
  gsap.to(
    ".foreground",
    {
      scrollTrigger: {
        trigger: ".background",
        start: "top top",
        end: "bottom+=80% bottom",
        scrub: 0.5,
        pinSpacing: false
      },
      scale: 2,
    }
  );
  gsap.to(
    ".foreground",
    {
      scrollTrigger: {
        trigger: ".background",
        start: "bottom+=100% bottom",
        end: "bottom+=160% bottom",
        scrub: true,
        pinSpacing: false
      },
      y: -300,
    }
  ),
    gsap.to(
      ".overlay",
      {
        scrollTrigger: {
          trigger: ".overlay",
          start: "bottom+=80% bottom",
          end: "bottom+=160% bottom",
          scrub: true,
          pinSpacing: false
        },
        opacity: 1,
      }
    );
}

onMounted(() => {
  backgroundAnimation();
});
onUnmounted(() => {
  ScrollTrigger.killAll();
});
</script>

<style scoped lang="scss">
@import "../../styles/_mixins.scss";

.background {
  @include positioning(absolute, 100%, 100vh);
  object-fit: cover;
  object-position: center;
  
}

.overlay {
  @include positioning(absolute, 100%, 100vh);
  background-color: black;
  opacity: 0;
}

.foreground {
  @include positioning(absolute, 100%, 120vh);
  object-fit: cover;
  object-position: center;
}
</style>
