<template>
  <div class="movie-list-item">
    <img
      class="movie-list-item-img"
      src="../../assets/cinema.jpg"
      alt="movie"
    />
    <div class="movie-list-info">
      <div class="movie-list-info-top">
        <div class="movie-list-info-name">name</div>
        <div class="movie-list-info-year">2023</div>
      </div>
      <div class="movie-list-info-bottom">
        <div class="movie-list-info-genre">genre</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MovieItem",
};
</script>

<style>
.movie-list-item {
  width: 30%;
  margin-right: 3%;
  margin-bottom: 12px;
}
.movie-list-item-img {
  width: 100%;
}
</style>
