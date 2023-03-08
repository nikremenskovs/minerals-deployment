<template>
  <section class="sectionTwo">
    <div class="card-container">
      <SectionTwoCard
        v-for="(card, index) in props.cards"
        :key="index"
        :to="card.route"
        :heading="card.heading"
        :subheading="card.subheading"
        :imageAlt="card.image.altText"
        :imageSrc="card.image.image[0]"
        :index="index"
      />
    </div>
    <SectionTwoParallax
      :heading="props.parallax.heading"
      :centrepiece="props.parallax.centrepiece"
      :satellites="props.parallax.satellites"
    />
  </section>
</template>

<script setup>
import SectionTwoCard from "@/components/sectionTwo/SectionTwoCard.vue";
import SectionTwoParallax from "@/components/sectionTwo/SectionTwoParallax.vue";

const props = defineProps({
  cards: { type: Array, required: true },
  parallax: { type: Object, required: true },
});
</script>

<style scoped lang="scss">
.sectionTwo {
  background-color: black;
}
.card-container {
  @media (min-width: 768px) {
    display: flex;
  }
}
</style>
