<template>
  <div class="ad-banner">
    <div class="banner-inner">
      <img src="../assets/images/adbanner.jpg" alt="img" /> <br />
      Advertise
    </div>
  </div>
</template>

<script>
export default {
  name: "AdBanner",
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ad-banner {
 
  height: 165px;
  background-color: #202020;
}
.banner-inner {
   display: block;
  margin: auto;
  width: 50%;
  height: 50%;
}
</style>
