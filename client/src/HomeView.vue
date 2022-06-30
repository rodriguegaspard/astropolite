<script>
import NavigationHeader from './components/NavigationHeader.vue'
import ContactFooter from './components/ContactFooter.vue'
import HomeBanner from './components/HomeBanner.vue'

export default {
  components: {
    NavigationHeader,
    ContactFooter,
    HomeBanner
  }
}
</script>

<template>
  <NavigationHeader />
  <HomeBanner />
  <ContactFooter />
</template>

<style>
</style>
