<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <navBar msg="Bienvenidos a todos"/>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import navBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    navBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
