<template>
    <section class="hero">
        <div class="hero-sticky">
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
@mixin positioning ($position, $width, $height) {
    position: $position;
    width: $width;
    height: $height;
}

//////////////////////////////// Rendered code below

.hero {
    @include positioning(relative, 100%, 275vh);
}

.hero-sticky {
    font-family: sans-serif;
    @include positioning(sticky, 100%, 100vh);
    top: 0px;
    overflow: hidden;
}
</style>