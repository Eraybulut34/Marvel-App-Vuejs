<template>
  <div class="footer">
    <router-link to="/" class="logo"><Logo /></router-link>
    <div class="column2">ABOUT MARVEL <br><br>
HELP/FAQS <br><br>
CAREERS <br><br>
INTERNSHIPS</div>
    <div class="column3">ADVERTISING <br><br>
DISNEY+ <br><br>
MARVELHQ.COM <br><br>
REDEEM DIGITAL COMICS</div>
    <div class="col4"></div>
    <div class="col5"></div>
  </div>
</template>

<script>
import Logo from "@/icons/logo.svg";
export default {
  name: "NavbarUpper",
  components: {
    Logo,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  margin-top: 2rem;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15rem;
  background-color: #202020;
  color: #fff;
  align-items: center;
  font: 400 12px/1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
    sans-serif;
  border-bottom: 1px solid #393939;
}
.column2{
  padding-bottom: 5px;
}
li {
  margin: 0 18px;
}
ul {
  list-style-type: none;
}
</style>
