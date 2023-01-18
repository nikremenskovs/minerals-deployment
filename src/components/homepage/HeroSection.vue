<template>
    <div class="img-container">
        <div class="background"></div>
        <div class="overlay"></div>
        <div class="foreground"></div>
    </div>
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
            investment. And definitely do not believe a mineral dealer if he advises you to invest in minerals - the
            only person that will realize a profit is the dealer.</p>
    </div>
</template>

<script setup>
import { useScroll } from '@vueuse/core'
import { computed } from 'vue'

const windowScroll = useScroll(window)
const maxBackgroundSize = 114
const backgroundSize = computed(() => { return windowScroll.y.value / (maxBackgroundSize - 100) })
const backgroundTransform = computed(() => { return `scale3d(${(100 + backgroundSize.value * 0.4) / 100}, ${(100 + backgroundSize.value * 0.4) / 100}, 1)` })
const foregroundTransform = computed(() => { return `scale3d(${(100 + backgroundSize.value) / 100}, ${(100 + backgroundSize.value) / 100}, 1)` })
const heroTitleOpacity = computed(() => { return `${1 - windowScroll.y.value / 10}` })
const heroInfoOpacity = computed(() => { return `${0 + windowScroll.y.value / 1000}` })
const overlayOpacity = computed(() => { return `${0 + windowScroll.y.value / 2500}` })
const heroInfoParaTransform = computed(() => { return `translate3d(-50%, -${100 + windowScroll.y.value / 20}px, 0px)` })
</script >

<style scoped>
* {
    font-family: sans-serif;
}

.img-container {
    height: 2000px;
}

.background {
    background-image: url('../../assets/images/background.jpg');
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    transform: v-bind(backgroundTransform);
}

.overlay {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: v-bind(overlayOpacity);
}

.foreground {
    background-image: url('../../assets/images/foreground.png');
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 25%;
    width: 100%;
    height: 100vh;
    scale: 1.5;
    transform: v-bind(foregroundTransform);
}

.hero-title {
    position: relative;
    text-transform: uppercase;
    text-align: center;
    color: white;
    font-size: 2rem;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    line-height: 75%;
    opacity: v-bind(heroTitleOpacity)
}

.hero-info {
    position: fixed;
    left: 50%;
    top: 50%;
    text-align: center;
    color: white;
    opacity: v-bind(heroInfoOpacity);
}

.hero-info h2 {
    text-transform: capitalize;
    font-size: 3rem;
    transform: translate(-50%, -250%);
}

.hero-info p {
    font-size: 1rem;
    padding: 0 0.1rem;
    transform: v-bind(heroInfoParaTransform)
}
</style>