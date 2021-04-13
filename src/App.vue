<template>
  <div id="app">
    <Home />
    <!-- <FriendsModal/> -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import FriendsModal from './components/Friends.vue'
import Home from './views/Home';

export default {
  name: 'App',
  components: {
    Home
    //FriendsModal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
