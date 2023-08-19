<template>
  <div class="movie-list">
    <MovieItem v-for="n in 8">
    </MovieItem>
  </div>
</template>
  
<script lang="ts">
  import MovieItem from '../MovieItem/MovieItem.vue';

  export default {
    name: 'MovieList',
    components: {
      MovieItem
    },
  }
</script>
  
<style>
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: 80px;
  }
</style>
  