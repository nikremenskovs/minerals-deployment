<script setup>
import { onMounted, computed } from "vue";
import { useFavicon } from '@vueuse/core'
import { useRoute, useRouter } from "vue-router";
import { useTabStore } from "@/stores/TabStore.js";

const tabStore = useTabStore();
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  let tabData = null;
  try {
    tabData = await tabStore.getTabData(route.query.preview);
    const faviconUrl = computed(() => tabData.faviconUrl)
    useFavicon(faviconUrl, { rel: 'icon' })
  } catch {
    router.push("/bad-call");
  }
});
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style lang="scss">
body {
  margin: 0;
  background-color: black;
}
</style>
