<template>
  <div>
    <div class="comic-card">
      <div class="up">
        <img :src="imageUrl" alt="img" />
        <div class="down">
          {{ comicName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComicCard",
  props: {
    imageUrl: String,
    comicName: String,
    comicPageUrl: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comic-card {
  margin: auto;
}

.up {
  max-width: 191.66px;
}

img {
  width: 224px;
  height: 336px;
}
.down {
  position: relative;
  color: black;
  cursor: none;
  text-align: center;
}
</style>
