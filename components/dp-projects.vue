<template>
  <base-section color="base" size="l">
    <center-l size="wide">
      <h2 class="dp-h3 | color:white padding-bottom:s1">Recent Work</h2>
      <h3 class="dp-tagline | color:accent margin-bottom:s2">DesignPub is an initiative by <a href="https://www.ccmdesign.ca" target="_blank">CCM Design</a>. We've been working with research institutions for 17 years, and from this experience and knowledge of the space we decided to launch this service offering.</h3>
    </center-l>
    <reel-l reelHeight="400px" space="0" itemWidth="400px" class="portfolio">
      <li v-for="i in portfolio">
        <a :href="i.url" v-if="i.url"><img :src="i.img" alt=""></a>
        <img v-else :src="i.img" alt="">
      </li>
    </reel-l>
  </base-section>
</template>

<script setup>
const portfolio = [
  {
    url: '#',
    img: 'images/portfolio/harvard-tech-spotlight.jpg'
  },
  {
    url: '#',
    img: 'images/portfolio/bfna-cross-cutting-currents.jpg'
  },
  {
    url: '#',
    img: 'images/portfolio/aspen-tech-annual-report.jpg'
  },
  {
    url: '#',
    img: 'images/portfolio/bfna-federalism-in-crisis.jpg'
  },
  {
    url: '#',
    img: 'images/portfolio/idrc-ai4d.jpg'
  },
  {
    url: '#',
    img: 'images/portfolio/idrc-feminist-open-government.jpg'
  },
  {
    url: '#',
    img: 'images/portfolio/meta-policy-annual-report.jpg'
  },
]
</script>

<style lang="scss" scoped>


li {
  list-style: none;
}

.portfolio a {
  display: block;
  height: 100%;
}

img {
  object-fit: cover;
  height: 100%;
}
</style>
