<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <NavBar/>
  <content-main/>
  <footer-main/>

</template>

<script>
import ContentMain from './components/ContentMain.vue'
import FooterMain from './components/FooterMain.vue'
import NavBar from './components/NavBar.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavBar,
    ContentMain,
    FooterMain,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
