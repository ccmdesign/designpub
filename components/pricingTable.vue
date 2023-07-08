<template>
  <div class="pricing-table">
    <table>
      <tr>
        <td>&nbsp;</td>
        <td class="prices highlight">
          <h4>Monthly</h4>
          <h3>$5,000 <span>/mo</span></h3>
          <base-button size="s" visual="unstyled">Book a Call</base-button>
        </td>
        <td class="prices">
          <h4>Monthly</h4>
          <h3>$4,500 <span>/mo</span></h3>
          <base-button size="s" visual="unstyled">Book a Call</base-button>
        </td>
        <td class="prices">
          <h4>Monthly</h4>
          <h3>$4,000 <span>/mo</span></h3>
          <base-button size="s" visual="unstyled">Book a Call</base-button> 
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
        <td>Unlimited stock photos</td>
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
        <td class="highlight"><dp-button visual="primary" size="l" color="accent">Get Started</dp-button></td>
        <td><dp-button visual="primary" size="l" color="accent">Get Started</dp-button></td>
        <td><dp-button visual="primary" size="l" color="accent">Get Started</dp-button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
}

td { 
  padding: var(--s0) var(--s1);
}

td:first-child {
  text-align: right;
}

td .button[visual='unstyled'] {
  margin-left: calc(var(--s0) * -1);
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

.prices > * + * {
  margin-top: var(--s-2);
}

.icon {
  color: var(--accent-color) !important;
  font-size: 2rem;
}

// .col { 
//   flex: 1; 
//   border-radius: 4px;
// } 

// .col > * {
//   flex: 1;
//   align-items: bottom;
//   justify-content: start;
// }

// .col > * {
//   flex: 1;
// }

// .legend { 
//   align-self: center; 
//   display: flex;
//   text-align: right;
// }

// // .legend > * > * {
// //   border: 1px solid #000;
// // }

.highlight {
  // background-color: hsla(var(--primary-hsl), .75);
  background-color: hsla(274, 72%, 27%, 1);
  color: var(--white-color);

  * { color: var(--white-color); }
  h4 { color: var(--accent-color); }
  h3 > span { opacity: .6; }
}

</style>
