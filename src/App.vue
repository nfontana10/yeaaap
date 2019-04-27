<template>
  <div id="app">
    <div class="beer_corner">
      <img class="left" alt="leffe" src="./assets/leffe.png"/>
      <img class="right" alt="changadang" src="./assets/chang.png"/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app' 
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.beer_corner {
  position: absolute;
  top: 10px;
  width: 100%;
  z-index: -10;

  @media screen and (max-width: 500px) {
    opacity: 0.25;
  }

  img {
    height: 90px;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
    padding-right: 20px;
  }
}
</style>
