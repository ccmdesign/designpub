<template>
  <div>
    <base-section id="how-it-works">
      <div class="how-it-works-bg">
        <center-l size="wide" >
          <stack-l space="var(--s3)">
            <h2 class="dp-h2 color:white ">How it <br><span>Works?</span></h2>
            <h3 class="dp-h3">A Simple, Transparent, and Seamless Process!</h3>
          </stack-l>
        </center-l>
      </div>
    </base-section>
      
    <base-section color="primary-10">
      <center-l size="wide">
        <process-grid />
      </center-l>
    </base-section>
  </div>
  
</template>

<script setup>

</script>

<style lang="scss" scoped>

#how-it-works {
  padding-block: 0;
}
.how-it-works-bg {
  background: linear-gradient(180deg, var(--base-color), 25%, var(--base-color), 25%, var(--primary-color-10));
  @media (max-width: 32em) { 
    background: linear-gradient(180deg, var(--base-color), 16%, var(--base-color), 16%, var(--primary-color-10));
  }
}

.dp-h2 span {
  color: var(--base-color);
}
</style>
