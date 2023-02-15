import { defineStore } from "pinia";
import axios from "axios";

export const useGalleryStore = defineStore("GalleryStore", {
  state: () => ({
    model: {
      galleryHeading: "",
      gallerySubheading: "",
      galleryImages: [],
    },
  }),
  getters: {
    galleryData(state) {
      return state.model;
    },
  },
  actions: {
    getGalleryData() {
      axios
        .get(
          "http://localhost:1337/api/homepage-gallery?fields=galleryHeading,gallerySubheading&populate=galleryImages"
        )
        .then((response) => {
          const data = response.data.data.attributes;
          this.model.galleryHeading = data.galleryHeading;
          this.model.gallerySubheading = data.gallerySubheading;
          data.galleryImages.data.forEach((image) =>
            this.model.galleryImages.push(image.attributes.url)
          );
        });
    },
  },
});
