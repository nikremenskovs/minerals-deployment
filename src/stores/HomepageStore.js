import { defineStore } from "pinia";
import axios from "axios";

export const useHomepageStore = defineStore("HomepageStore", {
  state: () => ({
    token: null,
    clientId: "minerals-squidex:default",
    clientSecret: "qcnwculd9ujg9oalyygr0lyeqyxg4p9g4mehlhxyeeax",
    tokenExpiration: 2591999,
    navigation: {
      textColor: "",
      headingOne: "",
      headingTwo: "",
      headingThree: "",
      headingFour: "",
      pulseIcon: [],
      pulseIconSize: null,
    },
    banner: {
      titleHeading: "",
      titleSubheading: "",
      infoHeading: "",
      infoDescription: "",
      background: {},
      foreground: {},
      scrollCue: {},
    },
    sectionTwo: {
      cards: [],
      parallax: {
        heading: "",
        centrepiece: {},
        satellites: [],
      },
    },
    gallery: {
      galleryHeading: "",
      gallerySubheading: "",
      galleryImages: [],
    },
  }),
  getters: {
    getToken() {
      return this.token;
    },
  },
  actions: {
    async makeRequest(previewURL) {
      this.getTokenFromCache();

      let token = this.token;

      if (!token) {
        token = await this.getTokenFromSquidex();
        this.storeTokenInCache(token, this.tokenExpiration);
      }

      let response = await this.getHomepageData(previewURL);

      if (response.status === 401) {
        token = await this.getTokenFromSquidex();
        this.storeTokenInCache(token, this.tokenExpiration);

        response = await this.getHomepageData(previewURL);
      }
      return response;
    },
    getTokenFromCache() {
      const token = localStorage.getItem("token");
      const expirationDate = localStorage.getItem("expirationDate");

      if (!token || !expirationDate || new Date().getTime() > +expirationDate) {
        this.token = null;
        return null;
      }
      this.token = token;
      return token;
    },
    storeTokenInCache(token, expiresIn) {
      const expirationDate = new Date().getTime() + expiresIn * 1000;
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
    },
    async getTokenFromSquidex() {
      try {
        const response = await axios.post(
          "https://cloud.squidex.io/identity-server/connect/token",
          {
            scope: "squidex-api",
            client_secret: "qcnwculd9ujg9oalyygr0lyeqyxg4p9g4mehlhxyeeax",
            client_id: "minerals-squidex:default",
            grant_type: "client_credentials",
          },
          {
            headers: {
              ["Content-Type"]: "application/x-www-form-urlencoded",
            },
          }
        );
        this.token = response.data.access_token;
        return response.data.access_token;
      } catch (error) {
        console.log(error);
      }
    },

    async getHomepageData(urlPreview) {
      const headers = {
        Authorization: `Bearer ${this.token}`,
        ["X-Resolve-Urls"]: "*",
      };
      if (urlPreview) {
        headers["X-Unpublished"] = 1;
      }
      try {
        const response = await axios.get(
          "https://cloud.squidex.io/api/content/minerals-squidex/homepage/bc15e44e-994d-4965-930a-dfbcf5f230ac/",
          {
            headers: headers,
          }
        );
        const navigationData = response.data.data.navigation.en;
        const bannerData = response.data.data.banner.iv;
        const galleryData = response.data.data.gallery.en;
        const sectionTwoCards =
          response.data.data.sectionTwo.en.sectionTwoCards;
        const sectionTwoParallax =
          response.data.data.sectionTwo.en.sectionTwoParallax;
        this.navigation = navigationData;
        this.banner = bannerData;
        this.gallery = galleryData;
        this.sectionTwo.cards = sectionTwoCards;
        this.sectionTwo.parallax = sectionTwoParallax;
        return {
          navigationData: this.navigation,
          bannerData: this.banner,
          galleryData: this.gallery,
          sectionTwoCards: this.sectionTwo.cards,
          sectionTwoParallax: this.sectionTwo.parallax,
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
});
