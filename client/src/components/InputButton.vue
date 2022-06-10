<script>
export default {
  props: {
    name: String
  }
}
</script>

<template>
  <input class="inputButton" type="button" :value="this.name" />
</template>

<style>
  .inputButton {
    background-color: #FCA311;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    border-radius: 25px;
    border-style: none;
    display: inline-block;
    text-align: center;
    padding: 0px 30px;
    height: 50px;
  }
</style>
