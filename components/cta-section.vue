<template>
  <base-section color="primary-10" class="cta-section" size="s">
    <center-l size="wide" class="cta-section__content">
      <stack-l space="var(--s2)">
        <h4>Get started</h4>
        <p class="message">Ready to see your ideas transformed into compelling visuals? <strong class="message">Start your design journey with us today and experience a process as seamless and efficient as the designs we deliver!</strong></p>
        <p><dp-button color="primary" visual="primary" size="l" el="a" target="_blank" href="https://buy.stripe.com/eVa6rp6yPcr3gCY3cf">Get Started Now!</dp-button></p>
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

h4 {
  
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
