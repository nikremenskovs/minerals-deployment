<template>
  <div class="control-gallery">
    <div class="view-gallery" @click="viewGallery">
      <h2 class="view-gallery__heading">{{ props.galleryHeading }}</h2>
      <div class="view-gallery__subheading">{{ props.gallerySubheading }}</div>
    </div>
    <div
      class="close-gallery"
      @click="closeGallery"
      @mouseenter="hoverClose"
      @mouseleave="hoverClose"
    >
      <div class="close-gallery--hover">
        <img src="@/assets/images/close.png" class="close-gallery__one" />
        <img src="@/assets/images/close.png" class="close-gallery__two" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  galleryHeading: { type: String, required: true },
  gallerySubheading: { type: String, required: true },
});

const galleryTimeline = gsap.timeline({ paused: true });
const controlsTimeline = gsap.timeline({ paused: true });
const backgroundTimeline = gsap.timeline({ paused: true });
const hoverCloseTimeline = gsap.timeline({ paused: true });

function viewGallery() {
  galleryTimeline.play();
  controlsTimeline.play();
  backgroundTimeline.play();
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
  backgroundTimeline.to(
    ".background-grid__quarter",
    { height: "0%", duration: 0.5, ease: "circ" },
    0
  );
  controlsTimeline
    .to(".view-gallery", { opacity: 0, display: "none", ease: "circ" }, 0)
    .to(".close-gallery", { scale: 1, ease: "expo" })
    .to(".close-gallery", { y: "35vh", delay: 0.25 })
    .reverse();

  galleryTimeline
    .to(".layout-grid__1", { scale: 1, ease: "none" }, 0)
    .to(".layout-grid__2", { scale: 1, x: 0, ease: "none" }, 0)
    .to(".layout-grid__3", { y: 0, ease: "none" }, 0)
    .to(".layout-grid__4", { scale: 1, x: 0, y: 0, ease: "none" }, 0)
    .to(".layout-grid__5", { scale: 1, y: 0, ease: "none" }, 0)
    .to(".layout-grid__6", { scale: 1, x: 0, ease: "none" }, 0)
    .to(".layout-grid__7", { scale: 1, ease: "none" }, 0)
    .to(".layout-grid__8", { scale: 1, ease: "none" }, 0)
    .to(".layout-grid__9", { scale: 1, ease: "none" }, 0)
    .to(".layout-grid__10", { y: 0, ease: "none" }, 0)
    .to(".layout-grid__11", { scale: 1, ease: "none" }, 0)
    .reverse();

  hoverCloseTimeline
    .to(".close-gallery--hover", { y: "-75%", duration: 0.25 })
    .reverse();
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
  font-family: sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-transform: capitalize;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.view-gallery {
  cursor: pointer;
  &__heading {
    font-size: 2rem;
    margin: 0 0 0.5rem 0;
  }
  &__subheading {
    padding: 5px 10px;
    background-color: black;
  }
}
.close-gallery {
  @include positioning(absolute, 40px, 40px);
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
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
