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
    getBannerData(urlPreview) {
      const token =
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IjlTZWo3eXJYdGo1TzNDVV9JeG5EU2ciLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiJtaW5lcmFscy1zcXVpZGV4OmRlZmF1bHQiLCJvaV9wcnN0IjoibWluZXJhbHMtc3F1aWRleDpkZWZhdWx0IiwiY2xpZW50X2lkIjoibWluZXJhbHMtc3F1aWRleDpkZWZhdWx0Iiwib2lfdGtuX2lkIjoiMTUwYmIyOTctM2NkNS00NjY0LWE1NjMtNzlkN2E0ODQ0ZmYyIiwiYXVkIjoic2NwOnNxdWlkZXgtYXBpIiwic2NvcGUiOiJzcXVpZGV4LWFwaSIsImV4cCI6MTY3OTI0MjUwNywiaXNzIjoiaHR0cHM6Ly9jbG91ZC5zcXVpZGV4LmlvL2lkZW50aXR5LXNlcnZlciIsImlhdCI6MTY3NjY1MDUwN30.ZDmfOBhbx3joKLFUfhvFIbZjmmercz5zQiVV-p3N7kdOsUVNIqxvQdDwRKz8Aqt7HyU_Xx0urHd1vxc8_gB3zqC1lDWQJBS5Eo4A_hin4cQD7jWsFylKQHm4IuWIM2RAtym2NHLOSSkp0GCTwxU7Ks_Nop-3zt5rmHAgp6EYNPiFkL2whbvxgo9WEdt3NjbY2AzdWiV4SuBnvT-dedVy1wBQz21NPpZj3sMAwRlOQcNFuCJMACTp5K4BYCwd_b1GXsb195sRo9Fu06bEukeEfCtBs_uHW3VhIv57GTzdbiN6-1eBbOvrcraugrIM3x6xkSQoIU_SluVDV5wlNhEMfQ";
      const headers = { Authorization: `Bearer ${token}` };
      if (urlPreview) {
        headers["X-Unpublished"] = 1;
      }
      axios
        .get(
          "https://cloud.squidex.io/api/content/minerals-squidex/homepage/bc15e44e-994d-4965-930a-dfbcf5f230ac",
          {
            headers: headers,
          }
        )
        .then((response) => {
          const data = response.data.data.banner.iv;
          this.model.titleHeading = data.titleHeading;
          this.model.titleSubheading = data.titleSubheading;
          this.model.infoHeading = data.infoHeading;
          this.model.infoDescription = data.infoDescription;
          this.model.background = data.background[0];
          this.model.foreground = data.foreground[0];
          this.model.scrollCue = data.scrollCue[0];
        });
    },
  },
});
