<template>
  <base-section id="footer" color="base" :menu-data="menuData">
    <h2 class="center:all margin-bottom:s1"><a href="/"><img src="/images/design-pub-logo.svg" alt=""></a></h2>
    <center-l size="wide">

      <div class="footer-columns">
        <div class="col" data-visibility="desktop-only">
          <nav class="footer-menu">
            <stack-l space="var(--s-1)">
              <a href="#benefits">Benefits</a>
              <a href="#how-it-works">How it works</a>
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="mailto:claudio@designpub.co">Contact</a>
            </stack-l>
          </nav>
        </div>
        <div class="col2" data-visibility="desktop-only">
          <p>Design Pub is an initiave by <a href="https://ccmdesign.ca" target="_blank">CCM Design</a>, specialized in Publications, Presentations, and Infographics. With our unique service model, we reinvent the collaboration process between designers and clients. <br><strong>Less bureaucracy, more design.</strong></p>
        </div>
        <div class="col">
          <stack-l space="var(--s-2)">
            <!-- <div class="social-media">
              <h4 class="dp-h4">Follow Us</h4>
              <a href=""><img src="/images/twitter.svg" alt=""></a>
              <a href=""><img src="/images/linkedin.svg" alt=""></a>
            </div> -->
            <dp-button class="call-btn" icon-before="phone" el="a" href="https://calendar.app.google/Q9xoTE8GwDMAuans9" target="_blank">Book a call</dp-button>
          </stack-l>
        </div>
      </div>
    </center-l>
  </base-section>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  menuData: {
    type: Array,
    default: []
  },
});

const { menuData } = toRefs(props)
</script>

<style lang="scss" scoped>

h2 {
}

.footer-menu {
  a {
    display: block;
  }
}

.footer-columns {
  display: flex;
  gap: var(--s2);
}

.col { flex: 1; }
.col2 { flex: 2; }

.social-media {
  display: flex;
  align-items: center;
  // justify-content: space-around;

  h4 { flex-basis: 100px; }

  * {
    flex: 0;
    flex-basis: 32px;
  }
}

.call-btn {
  @media (max-width: 32em) {
    align-self: center;
  }
}
</style>
