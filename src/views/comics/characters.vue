<template>
  <div>
    <div class="featured-comics">
      <div v-for="comic in comics" :key="comic.id">
      <router-link :to="{ name: 'character', params: {id:comic.id} }">
      <ComicCard
        :comicPageUrl="'characters/'+comic.id"
        :key="comic.id"
        :image-url="comic.thumbnail.path + '.jpg'"
        :comicName="comic.name"
      /></router-link>
    </div>
    </div>
  </div>
</template>

<script>
import ComicCard from "@/components/ComicCard.vue";
import axios from "axios";
export default {
  components: {
    ComicCard,
  },
  name: "ComicCharacters",
  mounted() {
    this.getComics();
  },

  data() {
    return {
      comics: null,
      characterID: this.$route.params.id
    };
  },
  methods: {
    getComics() {
      axios
        .get(
          "https://gateway.marvel.com/v1/public/comics/"+this.characterID+"/characters?ts=100&apikey=9ba68562b5c70ba6442264f6c5add1c2&hash=cdf3beb7b14c2e38b26b3f2fdef6a2ee"
        )
        .then((response) => {
          this.comics = response.data.data.results;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.featured-comics {
display: flex;
flex-wrap: wrap;
justify-content: center;

@media (--t) {
display:flex;
flex-wrap:wrap;
justify-content:space-around;


}
}
</style>
