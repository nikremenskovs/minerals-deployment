<template>
  <div class="review-card">
    <div class="review-card__content">
      <slot></slot>
    </div>
    <div class="review-card--title">
      <h3 class="review-card__heading">{{ props.heading }}</h3>
      <p class="review-card__subheading">{{ props.subheading }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  heading: { type: String, required: true },
  subheading: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.review-card {
  color: white;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  border-top: solid 1px hsla(0, 0%, 100%, 0.2);
  border-right: solid 1px hsla(0, 0%, 100%, 0.2);
  box-sizing: border-box;
  min-height: 220px;
  overflow: hidden;
  &__content {
    height: 100%;
    display: flex;
    justify-content: center;
  }
  &__heading {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }
  &__subheading {
    margin: 0;
    font-size: 0.75rem;
  }
}

@media (min-width: 500px) {
  .review-card {
    min-height: 300px;
  }
}
</style>
