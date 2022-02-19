<template>
  <div class="comics">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="MARVEL"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://wallpaperaccess.com/full/45790.jpg"
      ></b-carousel-slide>

      <b-carousel-slide img-src="https://wallpaperaccess.com/full/14358.jpg">
        <h1>MARVEL CHARACTERS</h1>
      </b-carousel-slide>

      <b-carousel-slide
        caption="HULK"
        img-src="https://wallpaperaccess.com/full/45798.jpg"
      ></b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://wallpaperaccess.com/full/45799.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <FeaturedComics/>
  </div>
</template>

<script>
import FeaturedComics from '@/components/FeaturedComics.vue'
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  name: "Comics",
  components: {FeaturedComics},
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
b-carousel-slide {
  height: 650px;
}
</style>