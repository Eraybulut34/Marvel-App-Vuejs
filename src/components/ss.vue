 <div class="character-main-image" v-for="char in character" :key="char.id">
<img :src="char.thumbnail.path+'.jpg'" alt="Image">
  </div>