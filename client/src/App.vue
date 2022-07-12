<template>
  <NavigationHeader></NavigationHeader>
  <RouterView></RouterView>
  <ContactFooter></ContactFooter>
</template>

<script>
import { RouterView } from 'vue-router'
import NavigationHeader from './components/NavigationHeader.vue'
import ContactFooter from './components/ContactFooter.vue'
export default {
  name: 'App',
  components: {
    RouterView,
    NavigationHeader,
    ContactFooter
  }
}
</script>

<style>
</style>
