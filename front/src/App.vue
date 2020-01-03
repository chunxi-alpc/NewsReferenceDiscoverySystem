<template>
  <div id="app">
    <nodeStudy />
  </div>
</template>

<script>
import nodeStudy from './components/node'

export default {
  name: 'app',
  components: {
    nodeStudy
  },
  data () {
    return {
      tableData: []
    }
  },

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
