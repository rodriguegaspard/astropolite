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
   font-family: 'PinotGrigio' ;
   src: url('../assets/PinotGrigioModernMedium.ttf') format('truetype');
  } 

  body {
    margin: 0;
  }

  h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }

  .footerText {
    color: white;
    font-family: 'PinotGrigio' sans-serif;
    font-size: 200%;
  }

  .footerTitle {
    font-size: 250%;
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
    width: 100vw;
  }

  .legalMentions {
    display: flex;
    background-color: #14213D;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    padding: 30px 0px;
    margin: 0px 0px;
    width: 100vw;
  }
</style>
