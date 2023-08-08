<template>
  <div class="pricing-table" role="region" aria-label="Pricing Table">
    <!-- Mobile View -->
    <div class="pricing-mobile" data-visibility="mobile-only">
      <div role="list">
        <!-- First Price Card -->
        <div class="prices highlight" role="listitem">
          <h4 id="plan1">Monthly</h4>
          <h3>$5,000 <span>/mo</span></h3>
          <dp-button el="a" visual="primary" size="s" color="accent" href="https://buy.stripe.com/eVa6rp6yPcr3gCY3cf" target="_blank" aria-labelledby="plan1">Get Started</dp-button>
          <ul class="features" role="list">
            <li>Unlimited requests</li>
            <li>Unlimited users</li>
            <li>Unlimited stock or ai photos</li>
            <li>Pause or cancel anytime</li>
          </ul>
        </div>
        <!-- Second Price Card -->
        <div class="prices" role="listitem">
          <h4 id="plan2">Quarterly</h4>
          <h3>$4,500 <span>/mo</span></h3>
          <dp-button visual="primary" size="s" color="accent" el="a" target="_blank" href="https://buy.stripe.com/bIY7vt3mDdv786seUY" aria-labelledby="plan2">Get Started</dp-button>
          <ul class="features" role="list">
            <li>Unlimited requests</li>
            <li>Unlimited users</li>
            <li>Unlimited stock or ai photos</li>
            <li><s>Pause or cancel anytime</s></li>
          </ul>
        </div>
        <!-- Third Price Card -->
        <div class="prices" role="listitem">
          <h4 id="plan3">Yearly</h4>
          <h3>$4,000 <span>/mo</span></h3>
          <dp-button visual="primary" size="s" color="accent" el="a" target="_blank" href="https://buy.stripe.com/14k7vt4qH8aNfyUeUZ" aria-labelledby="plan3">Get Started</dp-button>
          <ul class="features" role="list">
            <li>Unlimited requests</li>
            <li>Unlimited users</li>
            <li>Unlimited stock or ai photos</li>
            <li><s>Pause or cancel anytime</s></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Desktop View -->
    <table class="pricing-desktop" data-visibility="desktop-only" role="table" aria-label="Desktop Pricing Table">
      <tr>
        <td>&nbsp;</td>
        <td class="prices highlight">
          <h4 id="plan4">Monthly</h4>
          <h3>$5,000 <span>/mo</span></h3>
          <base-button el="a" target="_blank" href="https://calendar.app.google/Q9xoTE8GwDMAuans9" size="s" visual="unstyled" aria-labelledby="plan4">Book a Call</base-button>
        </td>
        <td class="prices">
          <h4 id="plan5">Quarterly</h4>
          <h3>$4,500 <span>/mo</span></h3>
          <base-button el="a" target="_blank" href="https://calendar.app.google/Q9xoTE8GwDMAuans9" size="s" visual="unstyled" aria-labelledby="plan5">Book a Call</base-button>
        </td>
        <td class="prices">
          <h4 id="plan6">Yearly</h4>
          <h3>$4,000 <span>/mo</span></h3>
          <base-button el="a" target="_blank" href="https://calendar.app.google/Q9xoTE8GwDMAuans9" size="s" visual="unstyled" aria-labelledby="plan6">Book a Call</base-button> 
        </td>
      </tr>
      <tr>
        <td>Unlimited requests</td>
        <td class="highlight"><span class="icon">check</span></td>
        <td><span class="icon">check</span></td>
        <td><span class="icon">check</span></td>
      </tr>
      <tr>
        <td>Unlimited users</td>
        <td class="highlight"><span class="icon">check</span></td>
        <td><span class="icon">check</span></td>
        <td><span class="icon">check</span></td>
      </tr>
      <tr>
        <td>Unlimited stock or ai photos</td>
        <td class="highlight"><span class="icon">check</span></td>
        <td><span class="icon">check</span></td>
        <td><span class="icon">check</span></td>
      </tr>
      <tr>
        <td>Pause or cancel anytime</td>
        <td class="highlight"><span class="icon">check</span></td>
        <td><span class="empty">&nbsp;</span></td>
        <td><span class="empty">&nbsp;</span></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td class="highlight"><dp-button el="a" visual="primary" size="l" color="accent" href="https://buy.stripe.com/eVa6rp6yPcr3gCY3cf" target="_blank" aria-labelledby="plan4">Get Started</dp-button></td>
        <td><dp-button visual="primary" size="l" color="accent" el="a" target="_blank" href="https://buy.stripe.com/bIY7vt3mDdv786seUY" aria-labelledby="plan5">Get Started</dp-button></td>
        <td><dp-button visual="primary" size="l" color="accent" el="a" target="_blank" href="https://buy.stripe.com/14k7vt4qH8aNfyUeUZ" aria-labelledby="plan6">Get Started</dp-button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>



.pricing-desktop {
  border-collapse: collapse;

  td { 
    padding: var(--s0) var(--s1);
    border-bottom: 1px solid hsla(var(--white-hsl), .1);
  }

  td:first-child {
    text-align: right;
  }

  td .button[visual='unstyled'] {
    margin-left: calc(var(--s0) * -1);
  }
}

.prices {
  h4 {
    font-size: 1rem;
    font-family: var(--text-font);
    font-weight: 400;
  }
  h3 { 
    font-size: 2.5rem;
    font-weight: 600;
  }
  h3 span {
    font-size: 1.5rem;
    font-weight: 400;
  }
}

.prices > * + * { margin-top: var(--s-2); }

.icon {
  color: var(--accent-color) !important;
  font-size: 2rem;
}

.highlight {
  background-color: hsla(274, 72%, 27%, 1);
  color: var(--white-color);

  * { color: var(--white-color); }
  h4 { color: var(--accent-color); }
  h3 > span { opacity: .6; }
  a.button {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }
}

.pricing-mobile {
  .prices { 
    padding: var(--s0); 
    border-bottom: 1px solid var(--primary-color);
  }
}

.features {
  li {
    display: flex;
  }
  li:before {
    content: 'check';
    font-family: var(--icon-font);
    margin-right: var(--s-2);
    color: var(--accent-color);
    font-size: 1.25rem;
    
    
  }
}

</style>
