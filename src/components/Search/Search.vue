<template>
  <div class="search-wrapper">
    <h1 class="search-title">FIND YOUR MOVIE</h1>
    <div class="search">
      <input class="search-input" type="text" />
      <button class="search-btn">SEARCH</button>
    </div>
    <Toggle label="SEARCH BY" left="TITLE" right="GENDER"></Toggle>
  </div>
</template>

<script lang="ts">
import Toggle from "../Toggle/Toggle.vue";

export default {
  name: "Search",
  components: {
    Toggle,
  },
};
</script>

<style>
.search-wrapper {
  padding-left: 80px;
  width: 90%;
}
.search-title {
  font-size: 34px;
  margin-bottom: 8px;
}
.search {
  display: flex;
  margin-bottom: 12px;
}
.search-input {
  width: 80%;
  background-color: rgb(44, 35, 35);
  border-color: rgb(44, 35, 35);
  color: white;
  padding: 8px;
  margin-right: 2%;
  font-size: 24px;
}
.search-btn {
  background-color: rgb(245, 109, 109);
  color: white;
  border-color: rgb(245, 109, 109);
  width: 18%;
  font-size: 24px;
  cursor: pointer;
}
</style>
