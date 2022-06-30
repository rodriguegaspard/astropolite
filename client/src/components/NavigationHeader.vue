<script>
  import InputButton from "./InputButton.vue";

  export default {
  components: {
    InputButton
    }
  }
</script>

<template>
  <nav class="navigation">
    <img alt="Logo Astropolite" src="../assets/Logo_Texte.svg">
    <h3 class="navigationLinks">Communauté</h3>
    <h3 class="navigationLinks">Évènements</h3>
    <h3 class="navigationLinks">Actualités</h3>
    <InputButton name="Se connecter" />
  </nav>
</template>

<style>
.navigation {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  height: 72px;
}

.navigationLinks{
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  color: #14213D;
}

</style>
