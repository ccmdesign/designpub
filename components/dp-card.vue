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
    --card-frame-d: 1;
    --card-frame-n: 1;
    pointer-events: none;
    @media (max-width: 32em) { --card-padding: 0; }

    :deep(.base-card__img) {
      width: 250px;
      height: 250px;
      @media (max-width: 32em) { display: none; }
    }

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
      @media (max-width: 32em) { 
        font-size: 2rem; 
      }
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
