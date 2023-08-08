<template>
  <dp-hero />

  <dp-clients />
  <dp-projects />
  <how-it-works-section />
  
  <cta-section />
  
  <pricing-section />

  <base-section color="primary-10" size="l" id="services">
    <center-l size="wide">
      <stack-l>
        <h2 class="dp-h2 | color:base">Services</h2>
        <h3 class="dp-tagline">Breathe Life Into Your Story with High-End Publication Design</h3>
        <services-grid />
        <dp-button el="a" target="_blank" href="https://calendar.app.google/Q9xoTE8GwDMAuans9" size="l" color="primary" visual="primary" icon-before="phone" class="margin-top:s3 align-self:center">Wanna know more,<br class="mobile-only"> book a call</dp-button>
      </stack-l>
    </center-l>
  </base-section>

  <base-section color="base" id="faq">
    <center-l size="wide">
      <stack-l>
        <h2 class="dp-h2">FAQ</h2>
        <faq-list />
      </stack-l>
    </center-l>
  </base-section>

  <contact-section />

  <footer-section />
</template>

<script setup>

</script>

<style scoped lang="scss">

</style>
