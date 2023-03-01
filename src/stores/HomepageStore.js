import { defineStore } from "pinia";
import axios from "axios";

export const useHomepageStore = defineStore("HomepageStore", {
  state: () => ({
    banner: {
      titleHeading: "",
      titleSubheading: "",
      infoHeading: "",
      infoDescription: "",
      background: "",
      foreground: "",
      scrollCue: "",
    },
    gallery: {
      galleryHeading: "",
      gallerySubheading: "",
      galleryImages: [],
    },
  }),
  actions: {
    async getHomepageData(urlPreview) {
      const token =
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IjlTZWo3eXJYdGo1TzNDVV9JeG5EU2ciLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiJtaW5lcmFscy1zcXVpZGV4OmRlZmF1bHQiLCJvaV9wcnN0IjoibWluZXJhbHMtc3F1aWRleDpkZWZhdWx0IiwiY2xpZW50X2lkIjoibWluZXJhbHMtc3F1aWRleDpkZWZhdWx0Iiwib2lfdGtuX2lkIjoiMTUwYmIyOTctM2NkNS00NjY0LWE1NjMtNzlkN2E0ODQ0ZmYyIiwiYXVkIjoic2NwOnNxdWlkZXgtYXBpIiwic2NvcGUiOiJzcXVpZGV4LWFwaSIsImV4cCI6MTY3OTI0MjUwNywiaXNzIjoiaHR0cHM6Ly9jbG91ZC5zcXVpZGV4LmlvL2lkZW50aXR5LXNlcnZlciIsImlhdCI6MTY3NjY1MDUwN30.ZDmfOBhbx3joKLFUfhvFIbZjmmercz5zQiVV-p3N7kdOsUVNIqxvQdDwRKz8Aqt7HyU_Xx0urHd1vxc8_gB3zqC1lDWQJBS5Eo4A_hin4cQD7jWsFylKQHm4IuWIM2RAtym2NHLOSSkp0GCTwxU7Ks_Nop-3zt5rmHAgp6EYNPiFkL2whbvxgo9WEdt3NjbY2AzdWiV4SuBnvT-dedVy1wBQz21NPpZj3sMAwRlOQcNFuCJMACTp5K4BYCwd_b1GXsb195sRo9Fu06bEukeEfCtBs_uHW3VhIv57GTzdbiN6-1eBbOvrcraugrIM3x6xkSQoIU_SluVDV5wlNhEMfQ";
      const headers = {
        Authorization: `Bearer ${token}`,
        ["X-Resolve-Urls"]: "*",
      };
      if (urlPreview) {
        headers["X-Unpublished"] = 1;
      }
      const response = await axios.get(
        "https://cloud.squidex.io/api/content/minerals-squidex/homepage/bc15e44e-994d-4965-930a-dfbcf5f230ac",
        {
          headers: headers,
        }
      );
      const bannerData = response.data.data.banner.iv;
      const galleryData = response.data.data.gallery.en;
      this.banner.titleHeading = bannerData.titleHeading;
      this.banner.titleSubheading = bannerData.titleSubheading;
      this.banner.infoHeading = bannerData.infoHeading;
      this.banner.infoDescription = bannerData.infoDescription;
      this.banner.background = bannerData.background[0];
      this.banner.foreground = bannerData.foreground[0];
      this.banner.scrollCue = bannerData.scrollCue[0];
      this.gallery.galleryHeading = galleryData.galleryHeading;
      this.gallery.gallerySubheading = galleryData.gallerySubheading;
      galleryData.galleryImages.forEach((image) =>
        this.gallery.galleryImages.push(image)
      );
      return { bannerData: this.banner, galleryData: this.gallery };
    },
  },
});
