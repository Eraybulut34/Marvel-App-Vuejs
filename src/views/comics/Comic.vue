<template>
  <div class="character-page">
    <div v-for="char in character" :key="char.id">
      <HeroHeader
        :imageUrl="char.thumbnail.path + '.jpg'"
        :characterName="char.title"
        :characterDescription="char.description"
      />
      <div class="nav">
        <nav class="character-bar">
          <router-link :to="comicCharacters" class="route-item">
            CHARACTERS
          </router-link>
          <router-link :to="comicCreators" class="route-item">
            CREATORS
          </router-link>
          <router-link :to="comicEvents" class="route-item">
            EVENTS
          </router-link>
          <router-link :to="comicStories" class="route-item">
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
  name: "Comic",
  data() {
    return {
      characterId: this.$route.params.id,
      character: null,
      url: null,
      comicCharacters: "/comics/" + this.$route.params.id + "/characters",
      comicCreators: "/comics/" + this.$route.params.id + "/creators",
      comicEvents: "/comics/" + this.$route.params.id + "/events",
      comicStories: "/comics/" + this.$route.params.id + "/stories",
    };
  },
  mounted() {
    this.getCharacter();
  },
  methods: {
    getCharacter: function () {
      axios
        .get(
          "https://gateway.marvel.com/v1/public/comics/" +
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

.character-thumbnail {
  display: flex;
  margin: 0 auto;
  size: cover;
  height: 25rem;
}

.character-bar{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #202020;
  border-top: 1px solid #e5e5e5;
@media(--t){
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