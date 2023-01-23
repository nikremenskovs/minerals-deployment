<template>
    <section class="home">
        <div class="home-sticky">
            <div class="background"></div>
            <div class="foreground"></div>
            <div class="overlay"></div>
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
        </div>
    </section>

    <section class="sectionTwo"></section>
</template>

<script setup>
import { computed } from 'vue'
import { useScroll } from '@vueuse/core'

const windowScroll = useScroll(window)
const maxBackgroundSize = 114
const backgroundSize = computed(() => windowScroll.y.value / (maxBackgroundSize - 100))
const backgroundTransform = computed(() => (100 + backgroundSize.value * 0.4) / 100)
const foregroundScale = computed(() => {
    if (windowScroll.y.value < 1000) { return (100 + backgroundSize.value) / 100 } else { return 1.71357 }
})
const foregroundTranslate = computed(() => {
    if (windowScroll.y.value > 1000) { return `${(0 + (windowScroll.y.value - 1000) / 4) * -1}px` } else { return '0px' }
})
const heroTitleOpacity = computed(() => 1 - windowScroll.y.value / 8)
const heroInfoOpacity = computed(() => {
    if (windowScroll.y.value < 1000) { return 0 + windowScroll.y.value / 1000 } else { return 1 - (windowScroll.y.value - 1000) * 0.00175 }
})
const overlayOpacity = computed(() => {
    if (windowScroll.y.value < 1000) { return 0 } else {
        return (0 + windowScroll.y.value - 1000) / 800
    }
})
const heroInfoParaTransform = computed(() => {
    const value = (100 + windowScroll.y.value / 20) * -1
    if (value < -150) { return '-150px' } else { return `${value}px` }
})
</script>

<style scoped lang="scss">
@mixin positioning ($position, $width, $height) {
    position: $position;
    width: $width;
    height: $height;
}

//////////////////////////////// Rendered code below

.home-sticky {
    font-family: sans-serif;
}

.sectionTwo {
    width: 100%;
    height: 5000px;
    background: red;
}

.home {
    @include positioning(relative, 100%, 275vh);
}

.home-sticky {
    @include positioning(sticky, 100%, 100vh);
    top: 0px;
    overflow: hidden;
}

.background {
    @include positioning(absolute, 100%, 100vh);
    background-image: url('../../assets/images/background.jpg');
    background-size: cover;
    background-position: center;
    transform: scale3d(#{v-bind(backgroundTransform)}, #{v-bind(backgroundTransform)}, 1);
}

.overlay {
    @include positioning(absolute, 100%, 100vh);
    background-color: black;
    opacity: v-bind(overlayOpacity);
}

.foreground {
    @include positioning(absolute, 100%, 150vh);
    background-image: url('../../assets/images/foreground.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform: scale3d(#{v-bind(foregroundScale)}, #{v-bind(foregroundScale)}, 1) translate3d(0px, #{v-bind(foregroundTranslate)}, 0px);
}

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