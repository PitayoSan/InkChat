<template>
  <div class="has-text-centered">
    <Canvas width="800" height="500"></Canvas>
  </div>
</template>


<script>
import Canvas from './Canvas';

export default {
  name: 'HelloWorld',
  components: {
    Canvas
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
</style>
