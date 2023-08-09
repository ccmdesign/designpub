<template>
  <ccm-hero color="base" height="auto" class="dp-hero">
    <template #top-bar>
      <dp-topnav />
    </template>
    
    <center-l size="wide" >
      <stack-l space="var(--s2)" class="shaded-panel">
        <!-- For SEO: Use a h1 tag for important content and add a keyword -->
        <h2 class="dp-h2 color:white">
          Designing <br>
          your publications.<br>
          <span class="color:accent">Fast and easy.</span>
        </h2>
        <!-- For Accessibility: Use a clearer, more descriptive class -->
        <p class="hero-description color:white">We are a design studio with 15+ years of experience, designing Publications, Presentations, Infographics and more. Our unique service model, revolutionizes the collaboration process between designers and clients. Less bureaucracy, more design.</p>
        <!-- For Accessibility: Add aria-label for clearer instructions -->
        <cluster-l class="dp-hero__actions">
          <dp-button 
            size="xl"
            class="align-self:center"
            color="primary"
            href="#pricing"
            aria-label="Get started with our services by clicking this button."
          >Subscribe</dp-button>
          <base-button el="a" target="_blank" href="https://calendar.app.google/Q9xoTE8GwDMAuans9" visual="unstyled" size="l" color="white" class="align-self:center">Book a Call</base-button>
        </cluster-l>
        <!-- For Accessibility: Add alt texts for images or presentational role if they're decorative -->
        <img class="decor circle" src="/images/decor-2.svg" alt="Decorative Circle" data-visibility="desktop-only" role="presentation">
        <img class="decor arrows" src="/images/decor-3.svg" alt="Decorative Arrows" data-visibility="desktop-only" role="presentation">
      </stack-l>
    </center-l>
  </ccm-hero>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .dp-hero {
    
  }

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

  .dp-hero__actions {
    justify-content: center !important;
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
