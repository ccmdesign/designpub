<template>
  <base-section color="primary-10" class="cta-section" size="s">
    <center-l size="wide" class="cta-section__content">
      <stack-l space="var(--s2)">
        <!-- For SEO: Use a higher header tag for important content and add a keyword -->
        <h2 id="get-started">Get started with our design services</h2>
        <!-- For Accessibility: Use a clearer, more descriptive class -->
        <p class="cta-message">Ready to see your content transformed into ready-to-launch publications? <strong class="highlighted-message">Subscribe to our servcies and experience fast turnarounds and a seamless collaboration process.</strong></p>
        <p>
          <!-- For Accessibility: Add aria-label for clearer instructions -->
          <dp-button color="primary" visual="primary" size="l" el="a" target="_blank" href="https://buy.stripe.com/eVa6rp6yPcr3gCY3cf" aria-label="Subscribe our services by clicking this button.">Subscribe Now!</dp-button>
        </p>
      </stack-l>
    </center-l>
</base-section>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.cta-section {
  text-align: center;
}

.cta-section__content {
  border-top: 1px solid var(--accent-color);
  padding-block: var(--s4);
}

h2 {
  
  color: var(--primary-color);
  text-align: center;
  font-size: var(--s0);
  font-family: var(--text-font);
  font-weight: 600;
  line-height: 120%;
  letter-spacing: .75px;
  text-transform: uppercase;

  
}

p {
  color: hsla(var(--base-hsl), .85);
  text-align: center;
  font-size: 1.2rem;
  font-family: var(--text-font);
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  @media (min-width: 32em) { 
    font-size: 2.1rem;
  }
}

p strong {
  font-weight: 400;
}
</style>
