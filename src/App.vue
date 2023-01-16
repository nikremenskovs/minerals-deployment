<template>
  <div class="img-container">
    <img class="background" ref="background" src="./assets/images/background.jpg" />
    <img class="foreground" ref="foreground" src="./assets/images/foreground.png" />
  </div>

</template>

<style>
* {
  margin: 0;
}

.img-container {
  position: relative;
  overflow-y: hidden;
}

.background,
.foreground {
  width: 100%;
  display: block;
}

.foreground {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-5%);
}
</style>