<template>
  <ccm-hero color="base" height="auto">
    <template #top-bar>
      <dp-topnav />
    </template>
    
      <center-l size="wide" >
        <stack-l space="var(--s2)" class="shaded-panel">
          <h2 class="dp-h2 color:white">
            Designing <br>
            your publications.<br>
            <span class="color:accent">Fast and easy.</span>
          </h2>
          <p class="color:white">Ready to make your creative visions come to life? Start your design journey with Design Pub today, and experience the transformation of ideas into impactful designs. Let's craft a compelling narrative for your brand together</p>
          <dp-button 
            size="xl"
            class="align-self:center"
            color="primary"
            href="#pricing"
          >Get Started Now!</dp-button>
          <img class="decor circle" src="images/decor-2.svg" alt="" data-visibility="desktop-only" >
          <img class="decor arrows" src="images/decor-3.svg" alt="" data-visibility="desktop-only" >
        </stack-l>
      </center-l>
  </ccm-hero>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .shaded-panel {
    background-color: hsla(var(--white-hsl), .03);
    padding: var(--s0);
    margin-inline: -1rem;
    
    position: relative;
    max-width: 100%;
    @media (min-width: 32em) { 
      padding: var(--s2) var(--s2) var(--s2) var(--s4);
      margin-inline: calc(var(--s4)*-1);
     }
  }

  p {
    font-size: var(--s1);
    font-style: normal;
    font-weight: 300;
    letter-spacing: .25px;
    max-width: 60ch;
    @media (max-width: 32em) { 
      max-width: 32ch; 
      font-size: 1.2rem;
    }
  }

  .decor { position: absolute; }
  .circle {
    bottom: 120px;
    right: -80px;
  }

  .arrows {
    top: 0;
    right: -200px;
    @media (max-width: 32em) { display: none; }
  }
</style>
