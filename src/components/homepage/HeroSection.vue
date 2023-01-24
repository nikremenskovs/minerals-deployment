<template>
    <section class="hero">
        <div class="hero--sticky">
            <hero-section-bg foreground="foreground.png" background="background.jpg"></hero-section-bg>
            <hero-section-text></hero-section-text>
        </div>
    </section>
</template>

<script setup>
import HeroSectionText from './HeroSectionText.vue'
import HeroSectionBg from './HeroSectionBg.vue'
</script>

<style scoped lang="scss">
@import '../../styles/_mixins.scss';

.hero {
    @include positioning(relative, 100%, 275vh);

    &--sticky {
        font-family: sans-serif;
        @include positioning(sticky, 100%, 100vh);
        top: 0;
        overflow: hidden;
    }
}
</style>