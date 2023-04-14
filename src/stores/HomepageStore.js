import { defineStore } from "pinia";
import { getHomepage } from "@/services/squidexService.js";

export const useHomepageStore = defineStore("HomepageStore", {
  state: () => ({
    homepageTabTitle: "",
    banner: {},
    sectionTwo: {},
    reviews: {},
    gallery: {},

    navigation: {
      textColor: "",
      headingOne: "",
      headingTwo: "",
      headingThree: "",
      headingFour: "",
      pulseIcon: [],
      pulseIconSize: null,
    },
  }),
  actions: {
    async getHomepageData(urlPreview) {
      const response = await getHomepage(urlPreview);
      const homepageTabTitle = response.data.data.homepageTabTitle.en
       const navigationData = response.data.data.navigation.en;
      const bannerData = response.data.data.banner.iv;
      const sectionTwoCards = response.data.data.sectionTwo.en.sectionTwoCards;
      const sectionTwoParallax =
        response.data.data.sectionTwo.en.sectionTwoParallax;
      const reviewsData = response.data.data.reviews.iv;
      const galleryData = response.data.data.gallery.en;

      this.homepageTabTitle = homepageTabTitle
      this.navigation = navigationData;
      this.banner = bannerData;
      this.sectionTwo.cards = sectionTwoCards;
      this.sectionTwo.parallax = sectionTwoParallax;
      this.reviews = reviewsData;
      this.gallery = galleryData;

      return {
        homepageTabTitle: this.homepageTabTitle,
        navigationData: this.navigation,
        bannerData: this.banner,
        sectionTwoCards: this.sectionTwo.cards,
        sectionTwoParallax: this.sectionTwo.parallax,
        reviewsData: this.reviews,
        galleryData: this.gallery,
      };
    },
  },
});
