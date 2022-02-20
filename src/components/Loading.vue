<template>
        <div class="loading">
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"/>
    </div>
</template>

<script>
export default {
    name: "Loading",
}
</script>

<style scoped>
.loading{
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 80rem;
}
</style>