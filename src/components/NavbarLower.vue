<template>
  <div class="hello">
   <!-- ----- aşa -->
      <nav class="navbar-lower">
        <router-link to="/characters" class="route-item">
          CHARACTERS
        </router-link>
        <router-link to="/comics" class="route-item">
        COMICS
        </router-link>
        <router-link to="/events" class="route-item">
        EVENTS
        </router-link>
        <!-- <router-link to="/creators" class="route-item">
CREATORS
          </router-link>
        <router-link to="/stories" class="route-item">STORIES</router-link> -->
      </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarLower",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-lower{
  display: flex;
justify-content: center;
  height: 40px;
  background-color: #202020;
  color: #fff;
  
}
.route-item{
    margin: 0 18px;
      display: flex;
    align-items: center;
    color: #fff;
    height: 100%;
    box-sizing: border-box;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    font-family: "RobotoCondensed Bold", "Trebuchet MS", Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-style: inherit;
}
li{
  margin: 0 18px;
      display: flex;
    align-items: center;
    color: #fff;
    height: 100%;
    box-sizing: border-box;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    font-family: "RobotoCondensed Bold", "Trebuchet MS", Helvetica, Arial, sans-serif;
    font-size: 12px;
}
ul {
  list-style-type: none;
}
</style>
