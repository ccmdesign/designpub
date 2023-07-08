<template>
  <base-button el="a" visual="primary">
    <slot></slot>  
  </base-button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
* {
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 130%; 
}

[size='l'] {
  --button-padding-block: var(--s0);
}

[size='xl'] {
  --button-padding-block: var(--s1);
}

[size='s'] {
  --button-padding-block: var(--s-1);
  --button-padding-inline: var(--s1);
  font-size: 80%;
}
</style>
