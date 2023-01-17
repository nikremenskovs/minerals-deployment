<template>
    <div class="img-container">
        <div class="background" :style="{ transform: backgroundTransform }"></div>
        <div class="overlay" :style="{ opacity: overlayOpacity }"></div>
        <div class="foreground" :style="{ transform: foregroundTransform }"></div>
    </div>
    <div class="hero-title" :style="{ opacity: heroTitleOpacity }">
        <h1>minerals</h1>
        <h2>and more</h2>
    </div>
    <div class="hero-info" :style="{ opacity: heroInfoOpacity }">
        <h2>why us?</h2>
        <p :style="{ transform: heroInfoParaTransform }">You should buy minerals because they are beautiful, they appeal
            to
            you, each one is unique, natural, and not
            man-made. Do not buy minerals as investments - unless you have 20 years to wait for a return on your
            investment. And definitely do not believe a mineral dealer if he advises you to invest in minerals - the
            only person that will realize a profit is the dealer.</p>
    </div>
</template>

<script>
import { useScroll } from '@vueuse/core'
export default {
    setup() {
        const windowScroll = useScroll(window)

        return {
            scrY: windowScroll.y,
            maxBackgroundSize: 114,
        }
    },
    computed: {
        backgroundSize() {
            return this.scrY / (this.maxBackgroundSize - 100)
        },
        backgroundTransform() {
            return `scale3d(${(100 + this.backgroundSize * 0.4) / 100}, ${(100 + this.backgroundSize * 0.4) / 100}, 1)`
        },
        foregroundTransform() {
            return `scale3d(${(100 + this.backgroundSize) / 100}, ${(100 + this.backgroundSize) / 100}, 1)`
        },
        heroTitleOpacity() {
            return `${1 - this.scrY / 10}`
        },
        heroInfoOpacity() {
            return `${0 + this.scrY / 1000}`
        },
        overlayOpacity() {
            return `${0 + this.scrY / 2500}`
        },
        heroInfoParaTransform() {
            return `translate3d(-50%, -${100 + this.scrY / 20}px, 0px)`
        }
    }
}
</script>

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
}

.hero-info {
    opacity: 0;
    position: fixed;
    left: 50%;
    top: 50%;
    text-align: center;
    color: white;
}

.hero-info h2 {
    text-transform: capitalize;
    font-size: 3rem;
    transform: translate(-50%, -250%);
}

.hero-info p {
    font-size: 1rem;
    padding: 0 0.1rem;
}

.overlay {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0;
}
</style>