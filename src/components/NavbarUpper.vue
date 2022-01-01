<template>
  <div class="hello">
    <router-link to="/" class="navbar-upper"><Logo/></router-link>
  </div>
</template>

<script>
import Logo from '@/icons/logo.svg'
export default {
  name: "NavbarUpper",
  components: {
      Logo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-upper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 51px;
  background-color: #202020;
  color: #fff;
  align-items: center;
  font: 400 12px/1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
    sans-serif;
  border-bottom: 1px solid #393939;
}

li {
  margin: 0 18px;
}
ul {
  list-style-type: none;
}
</style>
