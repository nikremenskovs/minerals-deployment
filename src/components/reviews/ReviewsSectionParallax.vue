<template>
  <div class="reviewsSection-parallax">
    <img
      :src="props.parallaxBackground.image"
      :alt="props.parallaxBackground.altText"
      class="reviewsSection-parallax__background"
    />
    <img
      :src="props.parallaxForeground.image"
      :alt="props.parallaxForeground.altText"
      class="reviewsSection-parallax__foreground"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
const props = defineProps({
  parallaxBackground: { type: Object, required: true },
  parallaxForeground: { type: Object, required: true },
});
onMounted(() => {
  gsap.fromTo(
    ".reviewsSection-parallax__background",
    { scale: 0.2, y: "-50%", x: "-50%" },
    {
      scrollTrigger: {
        trigger: ".reviewsSection-parallax",
        start: "top 50%",
        end: "top top",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      scale: 0.6,
    }
  );
  gsap.fromTo(
    ".reviewsSection-parallax__foreground",
    { scale: 1 },
    {
      scrollTrigger: {
        trigger: ".reviewsSection-parallax",
        start: "top 50%",
        end: "bottom centre",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      scale: 1.2,
    }
  );
});
</script>

<style scoped lang="scss">
.reviewsSection-parallax {
  position: relative;
  color: white;
  border-top: solid 1px hsla(0, 0%, 100%, 0.2);
  position: relative;
  height: 100vh;
  overflow: hidden;
  &__background {
    width: 80%;
    scale: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1, 1);
    opacity: 0.1;
  }
  &__foreground {
    width: 100%;
    position: absolute;
    bottom: 0%;
    left: 0%;
  }
}
</style>
