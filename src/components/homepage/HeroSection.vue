<template>
    <div class="img-container">
        <div class="background"></div>
        <div class="foreground"></div>
    </div>
</template>

<script setup>
import { useScroll } from '@vueuse/core'
import { computed } from 'vue'

const windowScroll = useScroll(window)
const maxBackgroundSize = 114
const backgroundSize = computed(() => windowScroll.y.value / (maxBackgroundSize - 100))
const backgroundTransform = computed(() => (100 + backgroundSize.value * 0.4) / 100)
const foregroundTransform = computed(() => (100 + backgroundSize.value) / 100)

</script>

<style scoped lang="scss">
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
    transform: scale3d(#{v-bind(backgroundTransform)}, #{v-bind(backgroundTransform)}, 1);
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
    transform: scale3d(#{v-bind(foregroundTransform)}, #{v-bind(foregroundTransform)}, 1);
}
</style>