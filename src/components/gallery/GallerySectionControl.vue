<template>
  <div class="control-gallery">
    <button class="view-gallery" @click="viewGallery">
      <p class="view-gallery__heading">{{ props.galleryHeading }}</p>
      <p class="view-gallery__subheading">{{ props.gallerySubheading }}</p>
    </button>
    <button
      class="close-gallery"
      @click="closeGallery"
      @mouseenter="hoverClose"
      @mouseleave="hoverClose"
    >
      <div class="close-gallery--hover">
        <img src="@/assets/images/close.png" class="close-gallery__one" />
        <img src="@/assets/images/close.png" class="close-gallery__two" />
      </div>
    </button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  galleryHeading: { type: String, required: true },
  gallerySubheading: { type: String, required: true },
  galleryImages: { type: Array, required: true },
});
let matchMediaHoverClose = gsap.matchMedia();
const galleryTimeline = gsap.timeline();
const controlsTimeline = gsap.timeline();
const backgroundTimeline = gsap.timeline();
const hoverCloseTimeline = gsap.timeline();

function viewGallery() {
  props.galleryImages.forEach((image, i) => {
    galleryTimeline
      .to(
        `.gallery-layout-grid__${i}`,
        { scale: 1, x: 0, y: 0, ease: "none" },
        0
      )
      .play();
  });

  backgroundTimeline
    .to(
      ".background-grid__quarter",
      { height: "0%", duration: 0.5, ease: "circ" },
      0
    )
    .play();
  controlsTimeline
    .to(".view-gallery", { opacity: 0, display: "none", ease: "circ" }, 0)
    .to(".close-gallery", { scale: 1, ease: "expo" }, 1)
    .to(".close-gallery", { y: "35vh", delay: 0.25 }, 1)
    .play();
}


function closeGallery() {
  galleryTimeline.reverse();
  controlsTimeline.reverse();
  backgroundTimeline.reverse();
}

function hoverClose() {
  hoverCloseTimeline.reversed(!hoverCloseTimeline.reversed());
}

onMounted(() => {
  matchMediaHoverClose.add("(min-width: 768px)", () => {
    hoverCloseTimeline.to(".close-gallery--hover", {
      y: "-75%",
      duration: 0.25,
    });
  });
});

onUnmounted(() => {
  galleryTimeline.kill();
  controlsTimeline.kill();
  backgroundTimeline.kill();
  hoverCloseTimeline.kill();
});
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";
.control-gallery {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.view-gallery {
  font-family: sans-serif;
  color: white;
  text-transform: capitalize;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &__heading {
    font-size: 2rem;
    margin: 0 0 0.5rem 0;
  }
  &__subheading {
    padding: 5px 10px;
    background-color: black;
    margin: 0;
    font-size: 1rem;
  }
}
.close-gallery {
  @include positioning(absolute, 40px, 40px);
  background-color: black;
  border: none;
  padding: 0;
  border-radius: 50%;
  scale: 0;
  cursor: pointer;
  overflow: hidden;
  &--hover {
    width: 100%;
    height: 100%;
  }
  &__one,
  &__two {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &__one {
    transform: translate(-50%, -50%);
  }

  &__two {
    transform: translate(-50%, 100%);
  }
}
</style>
