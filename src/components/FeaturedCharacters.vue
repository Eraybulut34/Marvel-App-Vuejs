<template>
  <div>
   <Loading v-if="!characters"/>
    <div class="featured-characters">
      <div v-for="character in characters" :key="character.id">
        <router-link
          :to="{ name: 'CharacterComics', params: { id: character.id } }"
        >
          <CharacterCard
            :characterPageUrl="'characters/' + character.id"
            :key="character.id"
            :image-url="character.thumbnail.path + '.jpg'"
            :characterName="character.name"
        /></router-link>
      </div>

    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import CharacterCard from "@/components/CharacterCard.vue";
import axios from "axios";
export default {
  components: {
    CharacterCard,
    Loading,
  },
  name: "FeaturedCharacters",
  mounted() {
    this.getCharacters();
  },

  data() {
    return {
      characters: null,
    };
  },
  methods: {
    getCharacters() {
      axios
        .get(
          "https://gateway.marvel.com/v1/public/characters?limit=30&ts=100&apikey=9ba68562b5c70ba6442264f6c5add1c2&hash=cdf3beb7b14c2e38b26b3f2fdef6a2ee"
        )
        .then((response) => {
          this.characters = response.data.data.results;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.featured-characters {
  margin-left: 1rem;
  max-width: 65rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33.5%, 1fr));
  max-width: 100%;
align-items: center;
  @media (--t) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15.82%, 1fr));
    align-items: center;
    justify-content: center;
    padding: 1.3rem;
    grid-gap: 30px;
    grid-template-rows: 6;
    min-width: 191px;
  }
}

</style>
