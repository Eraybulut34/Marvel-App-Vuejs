<template>
  <div>
    <div class="featured-news">
      <div v-for="n in news" :key="n.id">
      <router-link :to="{ name: 'event', params: {id:n.id} }">
      <newsCard
        :newsPageUrl="'events/'+n.id"
        :key="n.id"
        :image-url="n.thumbnail.path + '.jpg'"
        :newTitle="n.title"
      /></router-link>
    </div>
    </div>
  </div>
</template>

<script>
import newsCard from "@/components/NewsCard.vue";
import axios from "axios";
export default {
  components: {
    newsCard,
  },
  name: "NewsList",
  mounted() {
    this.getNews();
  },

  data() {
    return {
      news: null,
    };
  },
  methods: {
    getNews() {
      axios
        .get(
          "https://gateway.marvel.com/v1/public/events?limit=30&ts=100&apikey=9ba68562b5c70ba6442264f6c5add1c2&hash=cdf3beb7b14c2e38b26b3f2fdef6a2ee"
        )
        .then((response) => {
          this.news = response.data.data.results;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.featured-news {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(31%,1fr));;
  align-items: center;
  justify-content: center;
  padding: 1.3rem;
  grid-gap: 30px;
  grid-template-rows: 6;
  min-width: 191px;
}
</style>
