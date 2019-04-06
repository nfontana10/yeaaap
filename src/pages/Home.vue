<template>
  <div class="home">
    <h1 class="title">YEAAAAAAAAP!</h1>
    <div class="crazy_images">
      <img class="main_image" alt="zati" src="../assets/zati.jpg"/>
      <img class="nick" alt="zati" src="../assets/nick.jpg"/>
      <img class="levi" alt="zati" src="../assets/levi.jpg"/>
      <img class="henry" alt="zati" src="../assets/henry.jpg"/>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main_image {
  max-width: 100%;
  width: 500px;
  border: 2px solid black;
}
.title {
  border-bottom: 1px solid #000000;
  font-size: 36px;
}
.nick,
.levi,
.henry {
  border: 3px solid #000000;
  width: 100px;
}
</style>
