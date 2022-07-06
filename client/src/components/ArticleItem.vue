<script>
  import InputButton from "./InputButton.vue";

  export default {
  props: {
    title: String,
    buttonName: String,
    src: String,
    alt: String
  },

  components: {
    InputButton
    }
  }
</script>

<template>
  <div class="articleItem">
    <div>
      <img class="articlePicture" :alt="this.alt" :src="this.src"/>
    </div>
    <div class="articleDiv">
      <h2 class="articleTitle">{{ title }}</h2>
      <slot class="articleText" />
      <InputButton :name="this.buttonName" />
    </div>
  </div>
</template>

<style>

  .articleItem{
    display: flex;
    margin: 50px 200px;
    align-items: center;
  }

  .articleItem:nth-child(odd){
    flex-direction: row;
    justify-content: flex-start;
  }

  .articleItem:nth-child(even){
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .articleDiv {
    display: flex;
    flex-direction: column;
  }

  .articleDiv > * {
    margin: 20px 0px
  }

  .articleTitle {
    font-family: 'PinotGrigio' sans-serif;
    font-size: 200%;

  }

  .articleText {
    font-family: 'Montserrat' sans-serif;
  }

  .articlePicture {
    border-radius: 25px;
    border-style: none;
    object-fit: contain;
  }

</style>
