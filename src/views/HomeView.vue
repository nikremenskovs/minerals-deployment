<template>
  <div v-if="homepageData">
    <MainNav v-bind="homepageData.navigationData" />
    <HeroSection
      id="hero"
      v-bind="homepageData.bannerData"
    />
    <SectionTwo
      id="sectionTwo"
      :cards="homepageData.sectionTwoCards"
      :parallax="homepageData.sectionTwoParallax"
    />
    <ReviewsSection
      id="reviews"
      :textCards="homepageData.reviewsData.reviewsTextCards"
      :imageCards="homepageData.reviewsData.reviewsImageCards"
      :parallaxBackground="homepageData.reviewsData.parallaxBackground"
      :parallaxForeground="homepageData.reviewsData.parallaxForeground"
    />
    <GallerySection id="gallery" v-bind="homepageData.galleryData" />
  </div>
</template>

<script setup>
import MainNav from "@/components/navbar/MainNav.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SectionTwo from "@/components/sectionTwo/SectionTwo.vue";
import ReviewsSection from "@/components/reviews/ReviewsSection.vue";
import GallerySection from "@/components/gallery/GallerySection.vue";

import { useRoute, useRouter } from "vue-router";
import { useHomepageStore } from "@/stores/HomepageStore.js";

const homepageStore = useHomepageStore();
const route = useRoute();
const router = useRouter();
let homepageData = null;
try {
  homepageData = await homepageStore.getHomepageData(route.query.preview);
} catch {
  router.push("/bad-call");
}
</script>
