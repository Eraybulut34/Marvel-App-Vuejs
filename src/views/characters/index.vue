<template>
  <div class>
    <MainHeader />
    <AdBanner />
    <div class="featured">
      <div class="featured-title">FEATURED CHARACTERS</div>
      <FeaturedCharacters />
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import AdBanner from "@/components/AdBanner.vue";
import FeaturedCharacters from "@/components/FeaturedCharacters.vue";

export default {
  name: "Characters",
  components: {
    MainHeader,
    AdBanner,
    FeaturedCharacters,
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
}
</style>