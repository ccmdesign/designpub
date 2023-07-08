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
    heading: 'Team up with usStart your subscription',
    excerpt: 'Start your design journey with us. Once you hire our services, we dedicate an expert design team to your project. We are committed to crafting high-quality designs that encapsulate your vision and objectives.'
  },
  {
    image: '/images/step-2.svg',
    brow: 'Step 2',
    heading: 'Command Central – Your Client Dashboard',
    excerpt: "We grant you access to our intuitive Client Dashboard, a seamless platform guiding you through the briefing process, centralizing all your projects, and allowing you to manage progress. Whether it's requesting and managing revisions or viewing project status, the dashboard is your mission control."
  },
  {
    image: '/images/step-3.svg',
    brow: 'Step 3',
    heading: "Laser Focus, Exceptional Results",
    excerpt: 'We believe in quality over quantity. Our team commits to one request at a time, ensuring each project receives the attention and craftsmanship it merits. This focus on individual projects guarantees quality and consistency in our work.'
  },
  {
    image: '/images/step-4.svg',
    brow: 'Step 4',
    heading: 'Iterative Design and Revision Process',
    excerpt: 'Our usual turnaround time is one to two weeks. We spend about 10 days on the initial design, followed by 3-5 days for two rounds of revisions. Each revision typically takes about 48 hours. This iterative process ensures that the final design aligns with your expectations and needs.'
  },
  {
    image: '/images/step-5.svg',
    brow: 'Step 5',
    heading: 'A Cycle of Creativity',
    excerpt: "Upon project completion, we simply hit 'repeat.' Your dedicated design team is always ready to breathe life into your next idea. This systematic process ensures that every project is treated with the attention and dedication it deserves, culminating in high-quality, effective designs every time."
  },
]
</script>

<style lang="scss" scoped>
.grid {
  --itemWidth: 280px;
  grid-gap: var(--s3);
}

.decor {
  transform: scale(1.7) translate(20%, 40%);
}

</style>
