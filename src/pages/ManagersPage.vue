<template>
  <div class="main">
    <about-yakovlev class="m"></about-yakovlev>
    <about-khesin class="m"></about-khesin>
    <about-roginski class="m"></about-roginski>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import AboutKhesin from "@/components/about-khesin";
import AboutYakovlev from "@/components/about-yakovlev";
import AboutRoginski from "@/components/about-roginski";

export default {
  name: 'Home',
  components: {
    AboutRoginski,
    AboutYakovlev,
    AboutKhesin,
    HelloWorld
  }
}
</script>

<style scoped>
.m{
  margin-top: 50px;
}

</style>
