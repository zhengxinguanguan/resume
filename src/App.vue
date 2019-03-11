<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar';
import resume from './components/resume';
export default {
  name: 'app',
  components: {
   resume,navbar
  }
}
</script>

<style>

</style>
