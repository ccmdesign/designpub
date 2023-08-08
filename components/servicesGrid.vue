<template>
  <div class="grid">
    <dp-card v-for="i in cards" :card-data="i" class="services-card" />
  </div>
</template>

<script setup>
const cards = [
  {
    image: '/images/digital-publications.svg',
    heading: "Digital Publications",
    excerpt: "If you want to provide a modern and interactive reading experience for your readers, digital publications are the ideal solution. They offer global reach and content flexibility to ensure your message comes across in an impactful way."
  },
  {
    image: '/images/presentations.svg',
    heading: "Presentations",
    excerpt: "Our presentations offer a professional and sophisticated look, with modern layouts and high-quality graphics. Each slide is carefully crafted to convey information clearly and concisely, keeping viewers' attention."
  },
  {
    image: '/images/printed-publications.svg',
    heading: "Printed Publications",
    excerpt: "Our Printed Publications are created with attention to detail and exceptional quality. From magazines and newspapers to books and brochures, each piece is carefully produced to convey a clear and impactful message."
  },
  {
    image: '/images/infographics.svg',
    heading: "Infographics",
    excerpt: "Infographics are a powerful communication tool that combine complex information with engaging visuals. Combining text, illustrations, and graphics, they simplify complex data and transform information into a visually impactful experience."
  },
  {
    image: '/images/branding.svg',
    heading: "Branding",
    excerpt: "Strategic branding is the essence that defines your brand and differentiates it from the competition. It's the way you create a unique identity, an emotional connection with your target audience, and build a solid reputation."
  },
  {
    image: '/images/more-services.svg',
    heading: "and more",
    excerpt: "Here at Design Pub we offer a wide range of products and services to boost your company's online presence and achieve significant results. With a strategic and creative approach, we are ready to meet all your digital marketing needs. Book a Call!"
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

.services-card {
  --card-image-padding: var(--s0);
  --card-image-fit: contain;
  // --card-horizontal-image-max-width: 220px;
  :deep(.base-card__img) {
    // border: 1px solid red;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-inline: auto;
  }

  :deep(img) {
    @media (max-width: 32em) {
      width: 120px;
      height: 120px;
    }
    
    width: 240px;
    height: 240px;

    
  }
}

</style>
