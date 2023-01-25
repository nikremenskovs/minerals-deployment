<template>
    <div class="img-container">
        <div class="background"></div>
        <div class="foreground"></div>
    </div>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { computed } from 'vue'

const props = defineProps({
    foreground: { type: String, required: true, default: '' },
    background: { type: String, required: true, default: '' },
})

const foregroundImg = `url('src/assets/images/${props.foreground}')`
const backgroundImg = `url('src/assets/images/${props.background}')`

const windowScroll = useScroll(window)
const maxBackgroundSize = 114
const backgroundSize = computed<number>(() => windowScroll.y.value / (maxBackgroundSize - 100))
const backgroundTransform = computed<number>(() => (100 + backgroundSize.value * 0.4) / 100)
const foregroundTransform = computed<number>(() => (100 + backgroundSize.value) / 100)
</script>

<style scoped lang="scss">
.img-container {
    height: 2000px;
}

.background {
    background-image: v-bind(backgroundImg);
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    transform: scale3d(#{v-bind(backgroundTransform)}, #{v-bind(backgroundTransform)}, 1);
}

.foreground {
    background-image: v-bind(foregroundImg);
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