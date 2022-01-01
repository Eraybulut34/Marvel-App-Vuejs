<template>
  <div>
    <div class="news-card">
      <div class="up">
        <img :src="imageUrl" alt="img" />
        <div class="down">
          {{ newTitle }}
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
    newTitle: String,
    newsPageUrl: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
  width: 394px;
  height: 222px;
padding: 30px;
}
.down {
  position: relative;
  color: black;
  cursor: none;
  text-align: center;
}
</style>
