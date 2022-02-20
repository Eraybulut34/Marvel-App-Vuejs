<template>
  <div>
    <div class="character-card">
      <div class="up">
        <img :src="imageUrl" alt="img" />
        <div class="border"></div>
        <div class="down">
          <div class="down-text">{{ characterName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    imageUrl: String,
    characterName: String,
    characterPageUrl: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.character-card {
  margin: auto;
  overflow: hidden;
  @media (max-width: 767px) {
    min-width: 15rem;
    min-height: 24rem;
    margin-top: 2.5rem;
    max-width: 15rem;
  }
}
.up{
  max-width: 191.66px !important;

     @media (max-width: 767px) {
    max-width: 15rem;
    overflow: hidden;
  }
}

img {
  width: 191.66px;
  height: 210px;
      border-radius: 5px;
   @media (max-width: 767px) {
    max-width: 8rem;
    max-height: 16rem;
  }
  
}
.border {
  background-color: #e62429;
  height: 4px;
  width: 191.66px;
  margin-top: 0px;
     @media (max-width: 767px) {
    max-width: 8rem;
  }
}
.down {
  background: #151515;
  width: 191.66px;
  height: 145px;
  position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
   @media (max-width: 767px) {
    max-width: 8rem;
    max-height: 16rem;
  }
}
.down:before {
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: #fff;
  border-style: solid;
  border-top-color: transparent;
  border-width: 12px 12px 0 0;
  bottom: 0;
  content: "";
  position: absolute;
  right: 0;
  top: auto;
  z-index: 40;
}
.down:hover {
  width: 191.66px;
  height: 145px;
  background-color: rgb(216, 8, 18);
}
.down-text {
  font: 400 16px/1.1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
    sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
}
</style>
