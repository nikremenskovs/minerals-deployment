<template>
  <section class="reviews">
    <div class="reviews__layout-grid">
      <ReviewsSectionCard
        v-for="(card, index) in props.textCards"
        :key="index"
        :class="`textCard${index}`"
        :heading="card.heading"
        :subheading="card.subheading"
        @mouseenter="hoverTextCard(index)"
        @mouseleave="hoverTextCard(index)"
      >
        <div :class="`textCard${index}__hoverContainer`">
          <div :class="`textCard${index}--hover`">
            <p :class="`textCard${index}__text`">{{ card.text }}</p>
            <p :class="`textCard${index}__text`">{{ card.text }}</p>
          </div>
        </div>
      </ReviewsSectionCard>

      <ReviewsSectionCard
        v-for="(card, index) in props.imageCards"
        :key="index"
        :class="`imageCard${index}`"
        :heading="card.heading"
        :subheading="card.subheading"
        @mouseenter="hoverEnterImageCard(index)"
        @mouseleave="hoverLeaveImageCard(index)"
        @mousemove="($event) => debouncedHoverOppositeDirection($event, index)"
      >
        <img
          :class="`imageCard${index}__image`"
          :src="card.image.image"
          :alt="card.image.altText"
        />
      </ReviewsSectionCard>
    </div>
    <ReviewsSectionParallax
      :parallaxBackground="props.parallaxBackground"
      :parallaxForeground="parallaxForeground"
    />
  </section>
</template>

<script setup>
import ReviewsSectionCard from "./ReviewsSectionCard.vue";
import ReviewsSectionParallax from "./ReviewsSectionParallax.vue";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { debounce } from "lodash";
const props = defineProps({
  textCards: { type: Array, required: true },
  imageCards: { type: Array, required: true },
  parallaxBackground: { type: Object, required: true },
  parallaxForeground: { type: Object, required: true },
});

function reviewsSectionLoad() {
  const reviewSectionLoadTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#reviews",
      start: "top center",
      toggleActions: "play none none none",
    },
  });

  reviewSectionLoadTimeline
    .fromTo(
      `.imageCard0__image`,
      { x: "-100%", opacity: 0 },
      { x: "0", opacity: 1, duration: 1 }
    )
    .fromTo(
      ".imageCard0 .review-card--title",
      { y: "200%" },
      { y: 0, duration: 1 },
      "<"
    )
    .fromTo(
      ".imageCard2__image",
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "<"
    )
    .fromTo(
      ".imageCard2 .review-card--title",
      { y: "200%" },
      { y: 0, duration: 1 },
      "<"
    )
    .fromTo(".textCard1__text", { y: "200%" }, { y: 0, duration: 1 }, "<")
    .fromTo(
      ".imageCard3 .review-card--title",
      { y: "200%" },
      { y: 0, duration: 1 },
      "<"
    )
    .fromTo(
      `.imageCard1__image`,
      { y: "120%", opacity: 0 },
      { y: "20%", opacity: 1, duration: 1, delay: 0.25 },
      "<"
    )
    .fromTo(
      ".imageCard1 .review-card--title",
      { y: "200%" },
      { y: 0, duration: 1 },
      "<"
    )
    .fromTo(
      ".imageCard3__image",
      { y: "-100%" },
      { y: 0, opacity: 1, duration: 1 },
      "<"
    )
    .fromTo(
      ".textCard1 .review-card--title",
      { y: "200%" },
      { y: 0, duration: 1 },
      "<"
    )
    .fromTo(
      ".textCard0 .review-card--title",
      { y: "200%" },
      { y: 0, duration: 1, delay: 0.25 },
      "<"
    )
    .fromTo(".textCard0__text", { y: "200%" }, { y: 0, duration: 1 }, "<")
    .fromTo(
      ".textCard2 .review-card--title",
      { y: "200%" },
      { y: 0, duration: 1, delay: 0.25 },
      "<"
    )
    .fromTo(".textCard2__text", { y: "200%" }, { y: 0, duration: 1 }, "<");
}

let matchMedia = gsap.matchMedia();
const hoverTextCardTimeline = gsap.timeline({ paused: true });

function hoverTextCard(index) {
  matchMedia.add("(min-width: 768px)", () => {
    hoverTextCardTimeline[index].reversed(
      !hoverTextCardTimeline[index].reversed()
    );
  });
}

function hoverEnterImageCard(index) {
  matchMedia.add("(min-width: 768px)", () => {
    switch (index) {
      case 0:
        gsap.to(`.imageCard0__image`, { opacity: 1, duration: 1 });
        gsap.to(`.imageCard0__image`, { scale: 2.05, duration: 2 });
        break;
      default:
        gsap.to(`.imageCard${index}__image`, { opacity: 1, duration: 1 });
        break;
    }
  });
}

function hoverLeaveImageCard(index) {
  matchMedia.add("(min-width: 768px)", () => {
    switch (index) {
      case 0:
        gsap.to(`.imageCard0__image`, { opacity: 0.3, duration: 1 });
        gsap.to(`.imageCard0__image`, { scale: (2, 2), duration: 2 });
        break;
      default:
        gsap.to(`.imageCard${index}__image`, { opacity: 0.3, duration: 1 });
        break;
    }
  });
}

function hoverOppositeDirection(event, index) {
  matchMedia.add("(min-width: 768px)", () => {
    const boundary = gsap.getProperty(".imageCard1__image", "width") * 0.5;
    const proportion = gsap.utils.normalize(0, innerWidth / 2, event.offsetX);
    switch (index) {
      case 1:
        gsap.to(".imageCard1__image", {
          duration: 0.2,
          opacity: 1,
          x: (proportion * boundary - boundary / 2) * -1,
        });
        break;
    }
  });
}

const debouncedHoverOppositeDirection = debounce(hoverOppositeDirection, 5);

onMounted(() => {
  props.textCards.forEach((card, i) => {
    hoverTextCardTimeline[i] = gsap.timeline();
    hoverTextCardTimeline[i].to(`.textCard${i}--hover`, {
      y: "50%",
      duration: 0.25,
    });
  });
  reviewsSectionLoad();
  matchMedia.add("(max-width: 767px)", () => {
    gsap.to(".imageCard1__image", { x: 0 });
  });
});
</script>

<style scoped lang="scss">
@import "@/styles/_mixins.scss";

.reviews {
  @include positioning(relative, 100%, 100%);
  background: black;
  &__layout-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, auto);
  }
}

@for $n from 0 through 2 {
  .textCard#{$n} {
    @include reviewsTextCardPosition(
      nth(map-get($reviewsTextCardPositionMobileMap, card#{$n}), 1),
      nth(map-get($reviewsTextCardPositionMobileMap, card#{$n}), 2)
    );
    @include reviewsTextCardChildren;
  }
}

.imageCard0 {
  @include reviewsImageCardPosition(1, 3 / span 2);
  &__image {
    width: 100%;
    transform: translateY(15%) scale(2, 2);
    object-fit: cover;
    opacity: 0.3;
    z-index: -1;
  }
}
.imageCard1 {
  @include reviewsImageCardPosition(2, 1 / span 2);
  &__image {
    width: 100%;
    object-fit: contain;
    opacity: 0.3;
    z-index: -1;
  }
}

.imageCard2 {
  @include reviewsImageCardPosition(2, 3 / span 2);
  &__image {
    width: 60%;
    object-fit: contain;
    opacity: 0.3;
  }
}

.imageCard3 {
  @include reviewsImageCardPosition(3, 3 / span 2);
  &__image {
    width: 90%;
    object-fit: contain;
    opacity: 0.3;
  }
}

@media (min-width: 768px) {
  .reviews {
    height: 100%;
    &__layout-grid {
      @include positioning(relative, 100%, 100vh);
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }
  @for $n from 0 through 2 {
    .textCard#{$n} {
      @include reviewsTextCardPosition(
        nth(map-get($reviewsTextCardPositionDesktopMap, card#{$n}), 1),
        nth(map-get($reviewsTextCardPositionDesktopMap, card#{$n}), 2)
      );
    }
  }

  @for $n from 0 through 3 {
    .imageCard#{$n} {
      @include reviewsImageCardPosition(
        nth(map-get($reviewsImageCardPositionDesktopMap, card#{$n}), 1),
        nth(map-get($reviewsImageCardPositionDesktopMap, card#{$n}), 2)
      );
    }
  }
}
</style>
