<template>
  <center-l size="wide">
    <div class="top-nav" >
      <!-- For Accessibility: Add alt text for the logo image -->
      <a href="/"><img src="/images/design-pub-logo.svg" alt="Design Pub Logo"></a>
      <nav data-visibility="desktop-only">
        <!-- For SEO and Accessibility: Provide more descriptive link text -->
        <a href="#how-it-works" aria-label="Learn how our service works">How it works</a>
        <a href="#pricing" aria-label="View our pricing details">Pricing</a>
        <a href="#services" aria-label="Explore our services">Services</a>
        <a href="#faq" aria-label="Read our frequently asked questions">FAQ</a>
        <!-- For Accessibility: Add aria-label for clearer instructions -->
        <dp-button el="a" visual="primary" color="primary" size="s" href="#pricing" aria-label="Get started with our services by clicking this button.">Get Started Now</dp-button>
      </nav>
    </div>
  </center-l>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  padding-top: var(--s2);
}

nav {
  display: flex;
  gap: var(--s2);
  align-items: center;
}

nav a {
  color: var(--white-color);
  font-weight: 400;
}

img {
  width: 250px;
}
</style>
