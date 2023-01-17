<template>
    <div class="img-container">
        <div class="background" ref="background"></div>
        <div class="foreground" ref="foreground"></div>
    </div>
</template>

<script>
export default {
    methods: {
        handleScroll() {
            const maxBackgroundSize = 114
            const backgroundSize = scrollY / (maxBackgroundSize - 100)
            this.$refs.background.style.transform =
                `scale3d(${(100 + backgroundSize * 0.4) / 100}, ${(100 + backgroundSize * 0.4) / 100}, 1)`
            this.$refs.foreground.style.transform =
                `scale3d(${(100 + backgroundSize) / 100}, ${(100 + backgroundSize) / 100}, 1)`
            console.log(this.$refs.background.style.transform)
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll)
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