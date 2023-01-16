<template>
  <div class="img-container">
    <img class="background" ref="background" src="./assets/images/background.jpg" />
    <img class="foreground" ref="foreground" src="./assets/images/foreground.png" />
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      const scrollY = window.scrollY
      const maxBackgroundSize = 115
      const backgroundSize = scrollY / (maxBackgroundSize - 100)
      this.$refs.background.style.transform =
        'scale(' + (100 + backgroundSize * 0.4) / 100 + ')'
      this.$refs.foreground.style.transform =
        'scale(' + (100 + backgroundSize) / 100 + ')'
      console.log(scrollY)
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

<style>
* {
  margin: 0;
}

.img-container {
  position: relative;
  overflow: hidden;
  height: 5000px;
}

.background {
  position: fixed;
  display: block;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.foreground {
  display: block;
  scale: 1.6;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 240px;
  left: 0;
}
</style>