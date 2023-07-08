<template>
  <base-card class="dp-card" :card-data="cardData" :imageUrl="cardData.image" >
    <h3>{{ cardData.brow }}</h3>
    <h2>{{ cardData.heading }}</h2>
    <p>{{ cardData.excerpt }}</p>
  </base-card>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  cardData: {
    type: Object,
    default: {}
  },
});

const { cardData } = toRefs(props)
</script>

<style lang="scss" scoped>
  .dp-card {
    --card-border: 0;
    --card-bg-hsl: transparent;

    h3 {
      color:var(--accent-color);
      font-size: 1rem;
      font-family: var(--text-font);
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    h2 {
      color: var(--primary-color);
      font-size: 2.5rem;
      font-weight: 400;
      line-height: 110%;
    }

    p {
      color: hsla(var(--base-hsl), .85);
      font-family: var(--text-font);
      font-weight: 300;
    }
  }

  

  
</style>
