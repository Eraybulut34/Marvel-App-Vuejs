<template>
  <div class="home">
<EventsHeader/>
<NewsList/>
  </div>
</template>

<script>
import EventsHeader from '@/components/EventsHeader.vue'
import NewsList from '@/components/NewsList.vue'
export default {
  name: "Events",
  components: {
EventsHeader,
NewsList
  },
};
</script>

<style scoped>

</style>