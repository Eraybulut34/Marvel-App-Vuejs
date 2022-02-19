<template>
  <div>
    <div class="navbars">
      <NavbarUpper />
      <NavbarLower />
      <PromoItem v-if="false" />
      
    </div>
    <router-view /><Footer/>
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
  margin: 0;
  padding: 0;
  border: 0;
  font-family: inherit;
}
.navbars {
  position: fixed;
  min-width: 100%;
  display: block;
  z-index: 55;
  margin-top: 0px;
}
</style>
