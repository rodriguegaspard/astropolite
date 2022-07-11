<script>
export default {
  props: {
      title: String,
      newsDate: String,
      description: String,
      src: String,
      alt: String,
    },
}

</script>

<template>
<a :href="this.href">
  <div class="newsItem">
    <div>
      <img class="newsPicture" :alt="this.alt" :src="this.src"/>
    </div>
    <div class="newsDiv">
      <h2 class="newsTitle">{{ title }}</h2>
      <p class="newsText">{{ newsDate }}</p>
      <p class="newsText">{{ description }}</p>
    </div>
  </div>
</a>
</template>

<style>

  .newsItem{
    display: flex;
    border-radius: 25px;
    border-style: solid;
    border-color: black;
    border-width: 2px;
    margin: 50px 200px;
    align-items: center;
  }

  .newsDiv {
    display: flex;
    flex-direction: column;
  }

  .newsDiv > * {
    margin: 20px 0px
  }

  .newsTitle {
    font-family: 'PinotGrigio' sans-serif;
    font-size: 100%;
  }

  .newsText {
    font-family: 'Montserrat' sans-serif;
  }

  .newsPicture {
    border-radius: 25px;
    border-style: none;
    object-fit: contain;
  }

</style>
