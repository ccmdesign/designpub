<template>
  <div class="grid">
    <dp-card v-for="i in cards" :card-data="i" />
    <img class="decor" src="/images/decor-1.svg" alt="" data-visibility="desktop-only" >
  </div>
</template>

<script setup>
const cards = [
  {
    image: '/images/step-1.svg',
    brow: 'Step 1',
    heading: 'Start your subscription',
    excerpt: 'After hiring our services, an expert design team will be responsible for you projects, guaranteeing high-quality designs and quick turnarounds.'
  },
  {
    image: '/images/step-2.svg',
    brow: 'Step 2',
    heading: 'Your Client Dashboard',
    excerpt: "We grant you access to our intuitive Client Dashboard, your mission control, centralizing all your projects, and allowing you to manage progress."
  },
  {
    image: '/images/step-3.svg',
    brow: 'Step 3',
    heading: "Laser Focus",
    excerpt: 'We work on one request at a time, ensuring each project receives the attention it deserves, guaranteeing quality and consistency in our work.'
  },
  {
    image: '/images/step-4.svg',
    brow: 'Step 4',
    heading: 'Unlimited Revisions',
    excerpt: 'Our unique service model allows us to offer unlimited revisions, guaranteeing upi will get it exactly right.'
  },
  {
    image: '/images/step-5.svg',
    brow: 'Step 5',
    heading: 'Rinse and repeat',
    excerpt: "Your design team is always ready to work on your next project. Our battle-tested process ensures that every project receives the attention and dedication it deserves."
  },
]
</script>

<style lang="scss" scoped>
.grid {
  --itemWidth: 280px;
  grid-gap: var(--s3);
}

.decor {
  transform: scale(1.7) translate(20%, 30%);
}

</style>
