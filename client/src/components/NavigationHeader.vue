<script>
  import InputButton from "./InputButton.vue";

  export default {
  components: {
    InputButton
    }
  }
</script>

<template>
  <nav>
    <img alt="Logo Astropolite" src="../assets/Logo_Texte.svg">
    <h3>Communauté</h3>
    <h3>Évènements</h3>
    <h3>Actualités</h3>
    <InputButton name="Se connecter" />
  </nav>
</template>

<style>
nav {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  height: 72px;
}

h3 {
  font-family: 'Montserrat', sans-serif;
}

</style>
