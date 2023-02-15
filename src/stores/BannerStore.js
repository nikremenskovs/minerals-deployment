import { defineStore } from "pinia";
import axios from "axios";

export const useBannerStore = defineStore("BannerStore", {
  state: () => ({
    model: {
      titleHeading: "",
      titleSubheading: "",
      infoHeading: "",
      infoDescription: "",
      background: "",
      foreground: "",
      scrollCue: "",
    },
  }),
  getters: {
    bannerData(state) {
      return state.model;
    },
  },
  actions: {
    getBannerData() {
      axios
        .get(
          "http://localhost:1337/api/homepage-banner?fields=titleHeading,titleSubheading,infoHeading,infoDescription&populate=background,foreground,scrollCue"
        )
        .then((response) => {
          const data = response.data.data.attributes;
          this.model.titleHeading = data.titleHeading;
          this.model.titleSubheading = data.titleSubheading;
          this.model.infoHeading = data.infoHeading;
          this.model.infoDescription = data.infoDescription;
          this.model.background = data.background.data.attributes.url;
          this.model.foreground = data.foreground.data.attributes.url;
          this.model.scrollCue = data.scrollCue.data.attributes.url;
        });
    },
  },
});
