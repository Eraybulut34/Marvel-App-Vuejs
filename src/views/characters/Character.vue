<template>
  <div class="character-page">
    <div v-for="char in character" :key="char.id">
      <HeroHeader
        :imageUrl="char.thumbnail.path + '.jpg'"
        :characterName="char.name"
        :characterDescription="char.description"
      />
      <div class="nav">
        <nav class="navbar-lower">
          <router-link :to="characterComics" class="route-item">
            COMICS
          </router-link>
          <router-link :to="characterEvents" class="route-item">
            EVENTS
          </router-link>
          <router-link :to="characterSeries" class="route-item">
            SERIES
          </router-link>
          <router-link :to="characterStories" class="route-item">
            STORIES
          </router-link>
        </nav>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>

import HeroHeader from "@/components/HeroHeader.vue";
import axios from "axios";
export default {
  components: {
    HeroHeader,
  },
  name: "Character",
  data() {
    return {
      characterId: this.$route.params.id,
      character: null,
      url: null,
      characterComics: "/characters/" + this.$route.params.id + "/comics",
      characterEvents: "/characters/" + this.$route.params.id + "/events",
      characterSeries: "/characters/" + this.$route.params.id + "/series",
      characterStories: "/characters/" + this.$route.params.id + "/stories",
    };
  },
  mounted() {
    this.getCharacter();
  },
  methods: {
    getCharacter: function () {
      axios
        .get(
          "https://gateway.marvel.com/v1/public/characters/" +
            this.characterId +
            "?ts=100&apikey=9ba68562b5c70ba6442264f6c5add1c2&hash=cdf3beb7b14c2e38b26b3f2fdef6a2ee"
        )
        .then((response) => {
          this.character = response.data.data.results;
        });
    },
  },
};
</script>

<style scoped>
/* .character-page{
  display: flex;
  margin: 0 auto;
  background-size: cover;
  height: 25rem;

} */

.character-thumbnail {
  display: flex;
  margin: 0 auto;
  size: cover;
  height: 25rem;
}
.navbar-lower {

  display: flex;
  justify-content: center;
  height: 66px;
  background-color: #202020;
  color: #fff;
  width: 520px;
  align-items: center;
  margin-top: -40px;
  z-index: 90;
  position: absolute;
  margin-left: 35px;
}
.route-item {
  padding: 30px 20px;
  width: 130px;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
  height: 100%;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "RobotoCondensed Bold", "Trebuchet MS", Helvetica, Arial,
    sans-serif;
  font-size: 12px;
  font-style: inherit;
  border-right: 1px solid #393939;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: rgb(57, 57, 57);
  text-align: center;
}
</style>