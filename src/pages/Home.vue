<template>
  <div class="home">
    <h1 class="title">YEAAAAAAAAP!</h1>
    <img class="main_image" alt="zati" src="../assets/zati.jpg"/>
    
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
}
.title {
  border-bottom: 1px solid #000000;
}
</style>
