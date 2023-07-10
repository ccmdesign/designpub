<template>
  <base-section color="primary">
    <center-l>
      <stack-l space="var(--s1)">
        <h4 class="color:accent">Leave your best contact</h4>
        <p>Start your design journey with us today and experience a process as seamless and efficient as the designs we deliver!</p>
        <p><base-button size="l" color="accent" visual="primary" el="a" href="mailto:claudio@designpub.co">Contact Now</base-button></p>
        <!-- <control-group class="contact-form" data-visibility="desktop-only"> -->
        <!-- <control-group class="contact-form">
          <base-input
            placeholder="Your email"
          />
          <base-button size="l" color="accent" visual="primary" el="a" href="mailto:claudio@designpub.co">Contact Now</base-button>
        </control-group> -->
        <!-- <div class="contact-form" data-visibility="mobile-only">
          <base-input />
          <base-button>Contact Now</base-button>
        </div> -->
      </stack-l>
    </center-l>
  </base-section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
h4 {
  text-align: center;
  font-size: 1.5rem;
  font-family: var(--display-font);
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.0875rem;
  text-transform: uppercase;
}

p {
  color: var(--white, #FEF2FF);
  text-align: center;
  font-size: 1.15rem;
  font-family: var(--text-font);
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
}

.contact-form {
  gap: var(--s0);
  * { border-radius: var(--base-border-radius) !important }

  @media (max-width: 32em) {
    display: flex;
    flex-direction: column;

    * + * { margin-top: var(--s-1); }
    .button { width: 100%; }
  }
}

</style>
