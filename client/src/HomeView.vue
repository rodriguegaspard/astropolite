<script>
import NavigationHeader from './components/NavigationHeader.vue'
import ContactFooter from './components/ContactFooter.vue'
import HomeBanner from './components/HomeBanner.vue'
import ArticleItem from './components/ArticleItem.vue'
import ArticleList from './components/ArticleList.vue'
import NewsList from './components/NewsList.vue'

export default {
  components: {
    NavigationHeader,
    ContactFooter,
    HomeBanner,
    ArticleList,
    ArticleItem,
    NewsList
  }
}

</script>

<template>
  <NavigationHeader />
  <HomeBanner />
  <ArticleList>
    <ArticleItem title="Une communauté de passionnés" button-name="Rejoignez la communauté" alt="Homme qui regarde le ciel" :src="require('@/assets/Telescope.png')">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, augue sed ullamcorper sagittis, sem nibh tincidunt enim, nec tempor nisl velit vel ligula. Proin a nibh non arcu sollicitudin laoreet eu eu dolor. Vivamus gravida magna vel volutpat aliquet. Donec porta malesuada orci quis volutpat. Curabitur id augue at mauris tristique semper. Pellentesque a metus sit amet sapien consectetur suscipit tristique sit amet leo. Nam non elit turpis. Vivamus cursus ornare metus. Nunc vel venenatis justo. Nam enim libero, facilisis finibus nibh vel, venenatis dapibus lectus. Nulla tempus blandit mollis.
        </ArticleItem>

    <ArticleItem title="Des évènements près de vous" button-name="En savoir +" alt="Lancement SpaceX" :src="require('@/assets/RocketLaunch.jpg')">
        Praesent imperdiet in dui ut interdum. Etiam rhoncus orci posuere, mattis nunc sit amet, imperdiet dolor. Sed pulvinar odio nec mauris auctor, in pellentesque orci congue. Donec turpis elit, auctor id orci non, luctus scelerisque dui. Praesent luctus turpis sit amet urna malesuada viverra. Nullam tortor ipsum, facilisis id egestas quis, laoreet eget nulla. Aenean nec massa a est varius efficitur vitae vitae purus. Nulla quis ultricies tellus. Vestibulum vitae metus sollicitudin, cursus tortor quis, maximus quam. Etiam sodales finibus nisl, in aliquam ex dapibus placerat. Duis sit amet est laoreet, volutpat neque vel, pharetra justo.
    </ArticleItem>
  </ArticleList>
  <NewsList />
  <ContactFooter />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  body {
    margin: 0px;
    font-family: 'Montserrat', sans-serif;
  }

  h2 {
    color: #14213D;
  }

  p, i{
   color: #14213D;
  }

</style>
