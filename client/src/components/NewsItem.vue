<script>
export default {
  props: {
      src: String,
      alt: String,
      title: String,
      newsDate: String,
      description: String,
      href: String
    },
}

</script>

<template>
  <div class="newsItem">
    <div>
      <img class="newsPicture" :alt="this.alt" :src="this.src"/>
    </div>
    <div class="newsDiv">
      <a :href="this.href"><h2 class="newsTitle">{{ title }}</h2></a>
      <i class="newsText">{{ newsDate }}</i>
      <p class="newsText">{{ description }}</p>
    </div>
  </div>
</template>

<style>

  .newsItem{
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    border-style: solid;
    border-color: #14213D;
    border-width: 2px;
    margin: 50px 200px;
    align-items: center;
  }

  .newsDiv {
    display: flex;
    flex-direction: column;
  }

  .newsDiv > * {
    margin: 10px;
  }

  .newsTitle {
    font-family: 'PinotGrigio' sans-serif;
    font-size: 100%;
    color: #14213D;
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
