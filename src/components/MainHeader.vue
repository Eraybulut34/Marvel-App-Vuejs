<template>
 <div class="main-header"> <div class="main-image">
      <div class="header-texts"><h1 class="header-title">MARVEL CHARACTERS</h1>
    <h4 class="header-text">
      Get hooked on a hearty helping of heroes and villains from the humble
      House of Ideas!
    </h4></div>
  </div></div>
</template>

<script>
export default {
  data() {
    return {
      headerThumb: null,
    };
  },
  components:{},
  name: "MainHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-header{
  padding-top: 80px;
}
.main-image {
  display: flex;
  padding-top: 100px;
  background-image: url("../assets/images/characters.jpg");
  background-size: cover;
  height: 25rem;
  justify-content: center;
  align-items: center;
}
.header-texts{
    align-items: center;
    justify-content: center;
    color: #fff;
    display: inline-block;
    text-align: center;
}
.header-title{
    font: 500 26px/1 RobotoCondensed Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-family: "RobotoCondensed Bold", "Trebuchet MS", Helvetica, Arial, sans-serif;
    font-size: 44px;
    text-align: center;
}
.header-text{
    font: 400 16px/1.3 Roboto,Trebuchet MS,Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-stretch: normal;
    font-size: 16px;
    line-height: 1.3;
    font-family: Roboto, "Trebuchet MS", Helvetica, Arial, sans-serif;
}
</style>
