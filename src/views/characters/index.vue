<template>
  <div class>
    <MainHeader />
    <AdBanner />
<div class="container">    <div class="featured">
      <div class="featured-title">FEATURED CHARACTERS</div>
      <FeaturedCharacters />
    </div>
    <Search/>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue"
import MainHeader from "@/components/MainHeader.vue";
import AdBanner from "@/components/AdBanner.vue";
import FeaturedCharacters from "@/components/FeaturedCharacters.vue";

export default {
  name: "Characters",
  components: {
    MainHeader,
    AdBanner,
    FeaturedCharacters,
    Search,
  },
};
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
}
.featured-title {
  font: 800 26px/1 RobotoCondensed, Trebuchet MS, Helvetica, Arial, sans-serif;
  padding-top: 10px;
  padding-left: 25px;
}
.featured {
  align-items: center;
  justify-content: center;
  max-width: 1200px;
}
</style>