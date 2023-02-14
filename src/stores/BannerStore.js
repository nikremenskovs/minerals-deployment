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
          this.model.titleHeading = response.data.data.attributes.titleHeading;
          this.model.titleSubheading =
            response.data.data.attributes.titleSubheading;
          this.model.infoHeading = response.data.data.attributes.infoHeading;
          this.model.infoDescription =
            response.data.data.attributes.infoDescription;
          this.model.background = `http://localhost:1337${response.data.data.attributes.background.data.attributes.url}`;
          this.model.foreground = `http://localhost:1337${response.data.data.attributes.foreground.data.attributes.url}`;
          this.model.scrollCue = `http://localhost:1337${response.data.data.attributes.scrollCue.data.attributes.url}`;
        });
    },
  },
});
