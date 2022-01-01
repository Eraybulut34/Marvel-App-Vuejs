<template>
 <div class="events-header"> <div class="events-image">
      <div class="header-texts"><h1 class="header-title">MARVEL EVENTS</h1>
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
  name: "EventsHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.events-header{
  padding-top: 80px;
}
.events-image {
  display: flex;
  background-image: url("../assets/images/events.jpg");
  background-size: cover;
  height: 25rem;
  justify-content: center;
  align-items: center;
}
.events-image:before {
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: rgb(255, 255, 255);
  border-style: solid;
  border-top-color: transparent;
  border-width: 30px 1380px 0 0;
  content: "";
  position: absolute;
  right: 0;
  top: 450px;
  z-index: 40;
}
.header-texts{
    align-items: center;
    justify-content: center;
    color: #fff;
    display: inline-block;
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
