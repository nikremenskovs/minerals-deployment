<template>
  <div class="title">
    <h1 class="title__heading">{{ props.titleHeading }}</h1>
    <h2 class="title__subheading">{{ props.titleSubheading }}</h2>
  </div>
  <div class="info">
    <h2 class="info__heading">{{ props.infoHeading }}</h2>
    <p class="info__description">
      {{ props.infoDescription }}
    </p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  titleHeading: { type: String, required: true },
  titleSubheading: { type: String, required: true },
  infoHeading: { type: String, required: true },
  infoDescription: { type: String, required: true },
});

function textAnimation() {
  gsap.fromTo(
    ".title",
    { opacity: 1 },
    {
      scrollTrigger: {
        trigger: ".background",
        start: "top top",
        end: "bottom+=40% bottom",
        scrub: 0.5,
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
    }
  );
  gsap.set(".info", { opacity: 0 });
  gsap.fromTo(
    ".info",
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".background",
        start: "bottom+=40% bottom",
        end: "bottom+=80% bottom",
        scrub: 0.5,
        toggleActions: "restart none none reverse",
      },
      opacity: 1,
    }
  );
  gsap.fromTo(
    ".info",
    { opacity: 1 },
    {
      scrollTrigger: {
        trigger: ".background",
        start: "bottom+=100% bottom",
        end: "bottom+=160% bottom",
        scrub: 0.5,
        toggleActions: "restart none none reverse",
      },
      opacity: 0,
    }
  );
  gsap.set(".info", { opacity: 0 });

  gsap.fromTo(
    ".info__description",
    { y: 200 },
    {
      scrollTrigger: {
        trigger: ".background",
        start: "bottom+=40% bottom",
        end: "bottom+=80% bottom",
        scrub: 0.5,
        toggleActions: "restart none none reverse",
      },
      y: -20,
    }
  );
}

onMounted(() => {
  textAnimation();
});
onUnmounted(() => {
  ScrollTrigger.killAll();
});
</script>

<style scoped lang="scss">
.title {
  text-transform: uppercase;
  text-align: center;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &__heading {
    font-size: 3.5rem;
    margin: 0 0 1rem 0;
  }

  &__subheading {
    font-size: 2rem;
    margin: 0;
  }
}

.info {
  text-align: center;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  max-width: 700px;

  &__heading {
    text-transform: capitalize;
    font-size: 3rem;
  }
}
</style>
