<template>
  <div class="movie-list">
    <MovieItem
      v-for="movie in moviesFiltered"
      :key="movie.name"
      :url="movie.url"
      :name="movie.name"
      :gengre="movie.gengre"
      :year="movie.year"
    ></MovieItem>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { useMovies } from "../../state/useMovies";
import MovieItem from "../MovieItem/MovieItem.vue";

export default {
  name: "MovieList",
  components: {
    MovieItem,
  },
  setup() {
    const { moviesFiltered, fetchMovies } = useMovies();

    onMounted(() => {
      fetchMovies();
    });

    return { moviesFiltered };
  },
};
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
