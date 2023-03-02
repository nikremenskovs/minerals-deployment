<template>
  <picture>
    <source
      v-for="(source, index) in props.sourcesMap"
      :key="index"
      :srcset="`${props.imgSrc}?width=${source.assetWidth}`"
      :media="`(min-width: ${source.media})`"
    />
    <img class="responsive-position" :src="props.imgSrc" :alt="props.imgAlt" />
  </picture>
</template>

<script setup>
const props = defineProps({
  imgSrc: { type: String, required: true },
  imgAlt: {
    type: String,
    required: false,
    default: "alternative text for the image",
  },
  sourcesMap: {
    type: Array,
    required: false,
  },
});
</script>

<style scoped lang="scss">
.responsive-position {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
</style>
