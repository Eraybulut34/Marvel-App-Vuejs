<template>
  <div class="hero-header">
<img :src="imageUrl" alt="">
<div class="hero-text">
<h1>{{characterName}}</h1>
<h5>{{characterDescription}}</h5>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
   props: {
    imageUrl: String,
    characterName: String,
    characterPageUrl: String,
    characterDescription: String,
  },
  components:{},
  name: "HeroHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img{
    margin: auto;
    height: 420px;
    size: cover;
}
.hero-header{
    display: flex;
    height: 420px;
    background-color: #151515;
    background-size: cover;
    grid-template-rows: repeat(2);
        @media screen and (max-width: 767px) {
      display:inline-block;
      
    }
    

}
.hero-header:before {
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: rgb(255, 255, 255);
  border-style: solid;
  border-top-color: transparent;
  border-width: 50px 1380px 0 0;
  content: "";
  position: absolute;
  right: 0;
  top: 370px;
  z-index: 40;

  @media screen and (max-width: 767px) {
    display:none;
  }

}

.hero-text{
    display: inline-block;
    color: #fff;
    text-align: center;
    margin: auto;
        background-color: #151515;


}
</style>
