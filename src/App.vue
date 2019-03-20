<template>
  <div id="app">
    <vue-go/>
  </div>
</template>

<script>
import VueGo from './components/vueGo.vue'
export default {
  name: 'app',
  components: {
    VueGo
  },
  methods:{
  }
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
</style>
