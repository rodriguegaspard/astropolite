<script>
  import InputButton from "./InputButton.vue";

  export default {
  components: {
    InputButton
    }
  }
</script>

<template>
  <div class="gradient">
    <h2 class="bannerText bannerTitle bannerElement">Découvrir, Rencontrer,<br>Partager</h2>
    <h3 class="bannerText bannerElement">L'astronomie & l'astronautique à portée de main</h3>
    <div class="bannerElement">
      <InputButton name="Rejoignez-nous"/>
    </div>
  </div>
</template>

<style>
  @font-face {
    font-family: Pinot;
    src: url('../assets/PinotGrigioModernMedium.ttf')  format('truetype');
  }

  .gradient {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to right, white, white, gray);
    padding: 50px;
  }

  .bannerText {
    font-family: 'Montserrat' sans-serif;
    color: #14213D;
  }

  .bannerTitle {
    font-family: 'Pinot';
    font-size: 300%;
  }

  .bannerElement {
    margin: 10px 50px;
  }
</style>
