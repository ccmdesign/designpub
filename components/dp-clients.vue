<template>
  <base-section color="base" size="s">
      <cluster-l class="clients" space="var(--s3)">
        <li>
          <h3>Trusted by</h3>
        </li>
        <li :id="i.client" v-for="i in clients">
          <a :href="i.url" v-if="i.url"><img :src="i.img" alt=""></a>
          <img v-else :src="i.img" alt="">
        </li>
      </cluster-l>
  </base-section>
</template>

<script setup>
const clients = [
  {
    client: 'harvard',
    img: 'images/clients/harvard-logo.svg'
  },
  {
    client: 'meta',
    img: 'images/clients/meta-logo.svg'
  },
  {
    client: 'bfna',
    img: 'images/clients/bfna-logo.svg'
  },
  {
    client: 'aspen-institute',
    img: 'images/clients/aspen-institute-logo.svg'
  },
  {
    client: 'idrc',
    img: 'images/clients/idrc-logo.svg'
  },
  {
    client: 'berkeley',
    img: 'images/clients/berkeley-logo.svg'
  }
]
</script>

<style lang="scss" scoped>

h3 {
  font-weight: 100;
  opacity: .3;
}

li {
  list-style: none;
  max-width: 180px;
}

.clients {
  justify-content: center;
}

.clients a {
  display: block;
  // height: 100%;
}

img {
  object-fit: cover;
  // height: 100%;
  opacity: .2;
}

#bfna { max-width: 135px; }
#berkeley { max-width: 135px; }
#aspen-institute { max-width: 135px; }


</style>
