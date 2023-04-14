<script setup>
import { onMounted } from "vue";
import { useFavicon } from '@vueuse/core'
import { useRoute, useRouter } from "vue-router";
import { useTabStore } from "@/stores/TabStore.js";

const tabStore = useTabStore();
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  let faviconUrl = null;
  try {
    faviconUrl = await tabStore.getTabData(route.query.preview);
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
