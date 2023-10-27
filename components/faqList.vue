<template>
  <ul class="faq-list" role="list">
    <stack-l space="var(--s1)">
      <li class="faq-item" 
          v-for="(i, index) in list" 
          :key="index"
          :list-id="index" 
          :expanded="expanded == index ? true : false" 
          @click="toggleExpand(index)"
          @keydown.space.prevent="toggleExpand(index)"
          @keydown.enter.prevent="toggleExpand(index)"
          tabindex="0"
          role="button"
          :aria-expanded="expanded == index ? 'true' : 'false'"
      >
        <stack-l class="faq-item__content">
          <h4>{{ i.question }}</h4>
          <p v-show="expanded == index">{{ i.answer }}</p>
        </stack-l>
        <base-button v-if="expanded == index" icon-before="expand_less" size="l" visual="untyled"></base-button>
        <base-button v-else icon-before="expand_more" size="l" visual="untyled"></base-button>
      </li>
    </stack-l>
  </ul>

  <!-- <ul class="faq-list">
    <stack-l space="var(--s1)">
      <li class="faq-item" v-for="(i, index) in list" :list-id="index" :expanded="expanded == index ? true : false" @click="toggleExpand(index)">
        <stack-l class="faq-item__content">
          <h4>{{ i.question }}</h4>
          <p>{{ i.answer }}</p>
        </stack-l>
        <base-button v-if="expanded == index" icon-before="expand_less" size="l" visual="untyled"></base-button>
        <base-button v-else icon-before="expand_more" size="l" visual="untyled"></base-button>
      </li>
    </stack-l>
  </ul> -->
</template>

<script setup>
import { ref } from 'vue';

const expanded = ref(false);

const toggleExpand = (index) => {
  if (expanded.value === index) {
    expanded.value = false;
  } else {
    expanded.value = index;
  }
};

const list = [
  {
    question: 'What services does Design Pub offer?',
    answer: 'We offer most graphic design services, but we are specialized on Editorial Design. Essentially, things with many pages. Reports, Magazines, Publications, Presentations, etc. With this service, we also provide peripheral services such as branding and infographics, which are very intertwined with the publications we design.'
  },
  {
    question: "Who can benefit from Design Pub's services?",
    answer: 'DesignPub was created for with organizations that have a high demand for editorial design.'
  },
  {
    question: "How does Design Pub's unique service model work?",
    answer: "It works like an in-house team. You have a Board with your tasks. You can add as many as you want in there, and we will work on your tasks, one-by-one."
  },
  {
    question: "How does Design Pub's unique service model work?",
    answer: "It works like an in-house team. You have a Board with your tasks. You can add as many as you want in there, and we will work on your tasks, one-by-one."
  },
  {
    question: "What does it mean that there's 'less bureaucracy' in Design Pub's process?",
    answer: "It means there isn’t a defined scope for the contract. We have a standard contract for every client, that means we will design start this partnership where you ask us for a design task, and we will design it for you. It won’t change your monthly price."
  },
  {
    question: "Why not hire an in-house designer, or a freelancer?",
    answer: "You could do that, for sure. In fact, that’s the industry standard. Adding another staff would be closest to what we offer in terms of flexibility, but would entail on a fixed salary, benefits, no ability to pause that salary. Also, if you find a senior designer for 48k/y, let us know. We wanna hire them too. ;) A freelancer would be the closest to what we offer in terms of pricing, but then there is scoping, limited revisions, etc."
  },
  {
    question: "How is the collaboration process between Design Pub's designers and clients?",
    answer: "It works mostly through your Client Portal. Each task has a comment section, your team and the DesignPub team will exchange messages about that specific task. No meetings, no emails."
  },
  {
    question: "What is the cost of Design Pub's services?",
    answer: "The base cost is $5000 per month. If you’d like to pay quarterly or yearly there are discounts. $4500/mo and $4000/mo respectively."
  },
  {
    question: "How flexible are Design Pub's services? Can I define my own priorities?",
    answer: "Very flexible, and yes, you define your priorities. In your Client Portal, you have a section for Draft Tasks. Once your tasks are specified and ready for design, you move them to the “Ready for Design” column. That’s when our team will start working on it."
  },
  {
    question: "What happens if I need to pause the service?",
    answer: "You click on a button in your Client Portal. That’s it. That simple. Once you do that, you will not be charged on your next payment cycle, and we will compute a prorated balance of your remaining weeks under your current month, and we will stop working on your tasks. Whenever you are ready to come back, you just need to click on the same button again, to Resume your subscription, and we will get back to your tasks."
  },
  {
    question: "What happens if I need to cancel the service?",
    answer: "If you wanna cancel the services, it is as simple as pausing the service. You click on a button in your Client Portal, and we will delete your Client Portal at the end of the current payment cycle."
  },
  {
    question: "What is the turnaround time for Design Pub's design deliverables?",
    answer: "It depends a lot on the task, but usually it takes a few days for small tasks, up to a couple of weeks for longer publications."
  },
  {
    question: "How does Design Pub ensure fast turnaround times?",
    answer: "We have dedicated designers for our accounts, and constantly manage their workloads so we can keep up with the demand."
  },
  {
    question: "What types of publications, presentations, and infographics can Design Pub design?",
    answer: "We have 15+ years of experience designing digital and printed publications for clients all over the world."
  },
  {
    question: "How can I start my design journey with Design Pub?",
    answer: "Start working with us by choosing one of the pricing plans, or booking a call with our team."
  },
  // {
  //   question: "",
  //   answer: ""
  // },
]

</script>

<style lang="scss" scoped>
.faq-list {
  margin-top: var(--s3);
}
.faq-item {
  cursor: pointer;
  display: flex;
  border: 1px solid hsla(var(--white-hsl), .6);
  border-radius: 0.5rem;
  padding: 1.25rem 1.5rem 1.5rem 1.5rem;
  overflow-y: hidden;
  height: auto;
  transition: all .5s ease;
  // max-height: 1.5rem;
  // @media (max-width: 32em) {
  //   max-height: 2.5rem;
  // }
  
  p {
    display: none;
  }

  &[expanded="true"] { 
    p {display: block;}
  }
  &__content { flex: 1; }

  h4 {
    color: var(--white-color);
    font-size: 1.125rem;
    font-family: var(--text-font);
    font-weight: 400;
  }

  .button {
    margin-top: -4px;
  }
}
</style>
