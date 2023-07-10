<template>
  <center-l size="wide">
    <div class="top-nav" >
      <a href="/"><img src="images/design-pub-logo.svg" alt=""></a>
      <nav data-visibility="desktop-only">
        <a href="#how-it-works">How it works</a>
        <a href="#pricing">Pricing</a>
        <a href="#services">Services</a>
        <a href="#faq">FAQ</a>
        <dp-button el="a" visual="primary" color="primary" size="s" href="#pricing">Get Started Now</dp-button>
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
</style>
