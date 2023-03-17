import { defineStore } from "pinia";
import { getHomepage } from "@/services/squidexService.js";

export const useHomepageStore = defineStore("HomepageStore", {
  state: () => ({
    banner: {},
    sectionTwo: {},
    reviews: {},
    gallery: {},
  }),
  actions: {
    async getHomepageData(urlPreview) {
      const response = await getHomepage(urlPreview);
      const bannerData = response.data.data.banner.iv;
      const sectionTwoCards = response.data.data.sectionTwo.en.sectionTwoCards;
      const sectionTwoParallax =
        response.data.data.sectionTwo.en.sectionTwoParallax;
      const reviewsData = response.data.data.reviews.iv;
      const galleryData = response.data.data.gallery.en;

      this.banner = bannerData;
      this.sectionTwo.cards = sectionTwoCards;
      this.sectionTwo.parallax = sectionTwoParallax;
      this.reviews = reviewsData;
      this.gallery = galleryData;

      return {
        bannerData: this.banner,
        sectionTwoCards: this.sectionTwo.cards,
        sectionTwoParallax: this.sectionTwo.parallax,
        reviewsData: this.reviews,
        galleryData: this.gallery,
      };
    },
  },
});
