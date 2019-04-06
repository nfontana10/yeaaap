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

<style>
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
  top: 0;
  width: 100%;
}
.beer_corner img {
  height: 100px;
}
.beer_corner .right {
  float: right;
  padding-right: 20px;
}

.beer_corner .left {
  float: left;
}

</style>
