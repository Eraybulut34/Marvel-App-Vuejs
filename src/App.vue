<template>
  <div>
    <div class="navbars">
      <NavbarUpper />
      <NavbarLower />
      <PromoItem v-if="false" />
      
    </div>
    <router-view />
    <div class="footer"><Footer/></div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import NavbarUpper from "@/components/NavbarUpper";
import NavbarLower from "@/components/NavbarLower";
import PromoItem from "@/components/PromoItem";

export default {
  name: "App",
  components: {
    NavbarUpper,
    NavbarLower,
    PromoItem,
    Footer
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-family: inherit;
  font-size: 100%;
  margin-bottom: 0px;
}
.footer{
}
.navbars {
  position: fixed;
  min-width: 100%;
  display: block;
  z-index: 55;
  margin-top: 0px;
}
</style>
