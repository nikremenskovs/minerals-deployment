<template>
  <picture>
    <source
      v-for="(source, index) in props.sourcesMap"
      :key="index"
      :srcset="`${props.imgSrc}?width=${source.assetWidth}`"
      :media="`(min-width: ${source.media})`"
    />
    <img
      class="responsive-position"
      :class="
        props.sectionTwoTriggerIndex !== null
          ? `sectionTwoImage--${props.sectionTwoTriggerIndex}`
          : ''
      "
      :src="props.imgSrc"
      :alt="props.imgAlt"
    />
  </picture>
</template>

<script setup>
const props = defineProps({
  sectionTwoTriggerIndex: { type: Number, required: false, default: null },
  imgSrc: { type: String, required: true },
  imgAlt: {
    type: String,
    required: true,
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
  display: block;
}
</style>
