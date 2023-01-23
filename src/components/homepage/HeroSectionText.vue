<template>
    <div class="hero-title">
        <h1>Minerals</h1>
        <h2>and more</h2>
    </div>
    <div class="hero-info">
        <h2>why us?</h2>
        <p>You should buy minerals because they are beautiful, they appeal
            to
            you, each one is unique, natural, and not
            man-made. Do not buy minerals as investments - unless you have 20 years to wait for a return on your
            investment. And definitely do not believe a mineral dealer if he advises you to invest in minerals -
            the
            only person that will realize a profit is the dealer.</p>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useParallax } from '../../composables/useParallax.js'
const { windowScroll, backgroundSize } = useParallax()
const heroTitleOpacity = computed(() => 1 - windowScroll.y.value / 8)
const heroInfoOpacity = computed(() => {
    if (windowScroll.y.value < 1000) { return 0 + windowScroll.y.value / 1000 } else { return 1 - (windowScroll.y.value - 1000) * 0.00175 }
})
const heroInfoParaTransform = computed(() => {
    const value = (100 + windowScroll.y.value / 20) * -1
    if (value < -150) { return '-150px' } else { return `${value}px` }
})
</script>

<style scoped lang="scss">
.hero-title {
    text-transform: uppercase;
    text-align: center;
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: v-bind(heroTitleOpacity)
}

.hero-title h1 {
    font-size: 4rem;
    margin: 0 0 1rem 0;

}

.hero-title h2 {
    font-size: 2rem;
    margin: 0;
}

.hero-info {
    text-align: center;
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    opacity: v-bind(heroInfoOpacity);
}

.hero-info h2 {
    text-transform: capitalize;
    font-size: 3rem;
    transform: translate(-50%, -250%);
}

.hero-info p {
    transform: translate3d(-50%, #{v-bind(heroInfoParaTransform)}, 0px);
}
</style>