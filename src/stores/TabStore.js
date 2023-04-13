import { defineStore } from "pinia";
import { getTab } from "@/services/squidexService.js";

export const useTabStore = defineStore("TabStore", {
  state: () => ({
    faviconUrl: ""
  }),
  actions: {
    async getTabData(urlPreview) {
      const response = await getTab(urlPreview);
      const favicon = response.data.data.favicon.iv[0]
    
      this.faviconUrl = favicon;

      return {
        faviconUrl: this.faviconUrl
      };
    },
  },
});
