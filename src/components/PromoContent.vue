<template>
  <div class="hello">
    <ul class="navbar-lower">
      <li class="desktopNav__linkWrapper">CHARACTERS</li>
      <li class="desktopNav__linkWrapper">COMICS</li>
      <li class="desktopNav__linkWrapper">EVENTS</li>
      <li class="desktopNav__linkWrapper">CREATORS</li>
      <li class="desktopNav__linkWrapper">STORIES</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavbarLower",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.promo-content{
  display: flex;
justify-content: center;
 align-items: center;
  margin: 0 auto;
  height: 38px;
  background-color: #202020;
  color: #fff;
  align-items: center;
  font: 400 12px/1 RobotoCondensed Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
}

li{
  margin: 0 18px;
}
ul {
  list-style-type: none;
}
</style>
