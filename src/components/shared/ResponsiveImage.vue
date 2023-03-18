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
      ref="sectionTwoImage"
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
    validator: (propValue) => {
      const valid = propValue.every((obj) => {
        return (
          Object.prototype.hasOwnProperty.call(obj, "assetWidth") &&
          Object.prototype.hasOwnProperty.call(obj, "media")
        );
      });
      return valid;
    },
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
