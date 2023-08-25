<template>
  <div class="movie-list-item">
    <img class="movie-list-item-img" :src="url" alt="movie" />
    <div class="movie-list-info">
      <div class="movie-list-info-top">
        <div class="movie-list-info-name">{{ name }}</div>
        <div class="movie-list-info-year">{{ year }}</div>
      </div>
      <div class="movie-list-info-bottom">
        <div class="movie-list-info-genre">{{ gengre }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MovieItem",
  setup: () => ({}),
  props: {
    url: String,
    name: String,
    gengre: String,
    year: Number,
  },
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
  height: 55vh;
}
.movie-list-info-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.movie-list-info-name {
  font-size: 22px;
  color: rgb(222, 223, 224);
}
.movie-list-info-year {
  color: rgb(222, 223, 224);
  border: 1px solid rgb(222, 223, 224);
  padding: 2px 4px;
}
.movie-list-info-genre {
  font-size: 18px;
  color: rgb(139, 140, 141);
}
</style>
