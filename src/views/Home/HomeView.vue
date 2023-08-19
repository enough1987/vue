<template>
  <Header></Header>
  <Search></Search>
  <Filters></Filters>
  <MovieList></MovieList>
</template>

<script lang="ts">
import Header from "/src/components/Header/Header.vue";
import Search from "/src/components/Search/Search.vue";
import Filters from "/src/components/Filters/Filters.vue";
import MovieList from "/src/components/MovieList/MovieList.vue";

export default {
  components: {
    Header,
    Search,
    Filters,
    MovieList,
  },
};
</script>
