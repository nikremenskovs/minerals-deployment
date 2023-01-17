<template>
    <div class="img-container" ref="imgContainer">
        <div class="background" ref="background" :style="{ transform: backgroundTransform }"></div>
        <div class="foreground" ref="foreground" :style="{ transform: foregroundTransform }"></div>
    </div>
</template>

<script>
import { useScroll } from '@vueuse/core'
export default {
    setup() {
        const scroll = useScroll(window)

        return {
            scrY: scroll.y,
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
        }
    }
}
</script>

<style scoped>
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
</style>