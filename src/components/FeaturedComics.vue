<template>
  <div>
    <Loading v-if="!comics"/>
      <div class="featured-comics" v-else>
      <div v-for="comic in comics" :key="comic.id">
        <router-link
          :to="{ name: 'ComicCharacters', params: { id: comic.id } }"
          class="featured-comics-card"
        >
          <ComicCard
            :comicPageUrl="'comics/' + comic.id"
            :key="comic.id"
            :image-url="comic.thumbnail.path + '.jpg'"
            :comicName="comic.title"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import ComicCard from "@/components/ComicCard.vue";
import axios from "axios";
export default {
  components: {
    ComicCard,
    Loading,
  },
  name: "FeaturedComics",
  mounted() {
    this.getComics();
  },

  data() {
    return {
      comics: null,
    };
  },
  methods: {
    getComics() {
      axios
        .get(
          "https://gateway.marvel.com/v1/public/comics?limit=30&ts=100&apikey=9ba68562b5c70ba6442264f6c5add1c2&hash=cdf3beb7b14c2e38b26b3f2fdef6a2ee"
        )
        .then((response) => {
          this.comics = response.data.data.results;
        });
    },
  },
};
</script>


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
