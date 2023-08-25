<template>
  <div class="movie-list">
    <MovieItem
      v-for="movie in moviesFiltered"
      :key="movie.id"
      :url="movie.posterurl"
      :name="movie.title"
      :gengre="movie.genres?.toString()"
      :year="movie.year"
    ></MovieItem>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import useMoviesStore from "../../state/useMoviesStore";
import MovieItem from "../MovieItem/MovieItem.vue";
import { mapState } from "pinia";

export default {
  name: "MovieList",
  setup: () => {
    const { fetchMovies } = useMoviesStore();

    onMounted(() => {
      fetchMovies();
    });
  },
  components: {
    MovieItem,
  },
  computed: { ...mapState(useMoviesStore, ["moviesFiltered"]) },
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
