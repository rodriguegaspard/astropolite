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
      <p class="articleText">
        <slot />
      </p>
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
    flex-direction: row-reverse;
  }

  .articleItem:nth-child(odd) > .articleDiv {
    align-items: flex-end;
  }

  .articleItem:nth-child(even){
    flex-direction: row;
  }

  .articleDiv {
    display: flex;
    flex-direction: column;
  }

  .articleDiv > * {
    margin: 20px 0px;
    align-items: flex-start;
  }

  .articleTitle {
    font-family: 'Pinot';
    font-size: 200%;
  }

  .articleText {
    font-family: 'Montserrat' sans-serif;
  }

  .articlePicture {
    border-radius: 25px;
    border-style: none;
    width: 400px;
    height: 400px;
    object-fit: cover;
    margin: 20px;
  }

</style>
