<script> 
</script>

<template>
  <footer>
    <div class="socialMedia">
      <div>
        <h2 class="footerText footerTitle">Rejoignez-nous sur nos réseaux sociaux</h2>
        <div class="socialMediaLinks">
          <img alt="LinkedIn" src="../assets/LinkedIn.svg">
          <img alt="Twitter" src="../assets/Twitter.svg">
          <img alt="Discord" src="../assets/Discord.svg">
        </div>
      </div>
    </div>
    <div class="legalMentions">
      <p class="footerText">Mentions légales</p>
      <img alt="Logo Visuel" src="../assets/Logo_Visuel.svg">
      <p class="footerText">Politique de confidentialité</p>
    </div>
  </footer>
</template>

<style>

  @font-face {
   font-family: 'Pinot' ;
   src: url('../assets/PinotGrigioModernMedium.ttf') format('truetype');
  } 

  .footerText {
    color: white;
    font-family: 'Pinot';
    font-size: 200%;
  }

  .footerTitle {
    font-size: 250%;
    font-family: 'Pinot';
  }

  .socialMediaLinks {
    display: flex;
    justify-content: space-around;
  }

  .socialMedia {
    display: flex;
    background-color: #FCA311;
    flex-direction: row;
    justify-content: center;
    padding: 30px 0px;
  }

  .legalMentions {
    display: flex;
    background-color: #14213D;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0px;
    margin: 0px 0px;
  }

  .legalMentions > * {
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
  }

  .legalMentions > img {
    height: 150px;
  }

</style>
