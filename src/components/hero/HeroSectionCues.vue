<template>
  <img class="cue__scroll" :src="props.cueScrollImage" />
  <div class="cue__line">
    <div class="cue__line--scroll"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  cueScrollImage: { type: String, required: false },
});

function cuesAnimation() {
  gsap.fromTo(
    ".cue__scroll",
    { opacity: 1 },
    {
      scrollTrigger: {
        trigger: ".background",
        start: "bottom+=40% bottom",
        end: "bottom+=75% bottom",
        scrub: 0.1,
        toggleActions: "restart none play reverse",
      },
      opacity: 0,
    }
  );
  gsap.fromTo(
    ".cue__line--scroll",
    { y: "-100%" },
    {
      scrollTrigger: {
        trigger: ".background",
        start: "bottom+=75% bottom",
        end: "bottom+=160% bottom",
        scrub: 0.1,
        toggleActions: "restart none play reverse",
      },
      y: "100%",
    }
  );
}

onMounted(() => {
  cuesAnimation();
});
onUnmounted(() => {
  ScrollTrigger.killAll();
});
</script>

<style scoped lang="scss">
.cue__scroll {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
}
.cue__line {
  height: 140px;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  overflow: hidden;
  &--scroll {
    height: 100%;
    width: 1px;
    background-color: white;
    opacity: 0.6;
  }
}
</style>
