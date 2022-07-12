<script>
  import InputButton from "./InputButton.vue";
  import { RouterLink } from "vue-router";
  export default {
  components: {
    InputButton,
    RouterLink
    }
  }

</script>

<template>
  <nav class="navigation">
    <RouterLink to="/"><img alt="Logo Astropolite" src="../assets/Logo_Texte.svg"></RouterLink>
    <h3 class="navigationLinks">Communauté</h3>
    <h3 class="navigationLinks">Évènements</h3>
    <RouterLink to="/news"><h3 class="navigationLinks">Actualités</h3></RouterLink>
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
