<template>
  <div class="hello">

      <nav class="navbar-lower">

        <router-link to="/characters" class="route-item current-route" v-if="this.$route.name =='Characters'">
          CHARACTERS
        </router-link>
        <router-link to="/characters" class="route-item " v-else>
          CHARACTERS
        </router-link>

        <router-link to="/comics" class="route-item  current-route" v-if="this.$route.name =='Comics'">
          COMICS
        </router-link>
        <router-link to="/comics" class="route-item" v-else>
          COMICS</router-link>

        <router-link to="/events" class="route-item  current-route" v-if="this.$route.name =='Events'">
          EVENTS
        </router-link>
        <router-link to="/events" class="route-item" v-else>
          EVENTS
        </router-link>
      </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarLower",
};
</script>

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
    font-weight: bold;
    padding: 0px 10px;
}
.route-item:hover{
  background-color: rgb(219, 34, 34);
  border-radius: 10px;
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
.current-route{
  border-bottom: 4px solid #e62429;
}
</style>
