<template>
  <div id="app">
    <div class="container">
      <NavBar/>
      <Content/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  props: {
    brewery: {}
  },
  components: {
    NavBar,
    Footer,
    Content
  }
}
</script>

<style>

</style>
