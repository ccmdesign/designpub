<template>
  <base-section color="base" id="pricing" size="l">
    <center-l size="wide">
      <stack-l>
        <h2 class="dp-h2 | color:white" >Pricing</h2>
        <h3 class="dp-tagline | color:white" >Simple pricing. No surprise fees.</h3>
        <pricing-table class="pricing-table" />
        <dp-button size="l" icon-before="phone" class="align-self:center margin-top:s2">Book a call</dp-button>
      </stack-l>
    </center-l>
  </base-section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.pricing-table {
  margin-top: var(--s3);
}
</style>
