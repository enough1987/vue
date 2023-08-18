<template>
  <h1 class="header-label">
    <b class="header-label-b" >netflix</b>roulette
  </h1>
  <div class="search-wrapper">
    <h1 class="search-title" >FIND YOUR MOVIE</h1>
    <div class="search">
      <input class="search-input" type="text">
      <button class="search-btn"> SEARCH </button>
    </div>
    <div class="toggle">
      <div class="toggle-label"> SEARCH BY </div>
      <div class="toggle-left"> TITLE </div>
      <div class="toggle-right"> GENDER </div>
    </div>
  </div>
  <div class="filters">
    <div class="info-found"> 7 movies found</div>

    <div class="toggle">
      <div class="toggle-label"> SORT BY </div>
      <div class="toggle-left"> RELEASE DATE </div>
      <div class="toggle-right"> RATING </div>
    </div>
  </div>
  <div class="movie-list">
    <div class="movie-list-item" v-for="n in 8">
      <img class="movie-list-item-img" src="../../assets/cinema.jpg" alt="movie">
      <div class="movie-list-info">
        <div class="movie-list-info-top">
          <div class="movie-list-info-name"> name</div>
          <div class="movie-list-info-year"> 2023</div>
        </div>
        <div class="movie-list-info-bottom">
          <div class="movie-list-info-genre"> genre</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<style>
  .header-label {
    display: flex;
    color: red;
    font-size: 28px;
    align-items: flex-end;
    margin-bottom: 30px;
    margin-left: 20px;
  }
  .header-label-b {
    color: red;
    font-weight: bold;
    font-size: 32px;
  }

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
  .toggle {
    display: flex;
    align-items: center;
    font-size: 24px;
    background-color: inherit;
  }
  .toggle-label {
    margin-right: 20px;
    background-color: inherit;
  }

  .toggle-left {
    text-align: center;
    background-color: rgb(245, 109, 109);
    padding: 4px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
  } 
  .toggle-right {
    text-align: center;
    background-color: gray;
    padding: 4px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }

  .filters {
    display: flex;
    align-items: center;
    width: 90%;
    margin-top: 40px;
    margin-left: 80px;
    justify-content: space-between;
    background-color: rgb(75, 74, 74);
    padding: 16px 8px;
  }
  .info-found {
    font-weight: bold;
    padding-left: 8px;
    background-color: rgb(75, 74, 74);
  }

  .movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: 80px;
  }
  .movie-list-item {
    width: 30%;
    margin-right: 3%;
    margin-bottom: 12px;
  }
  .movie-list-item-img {
    width: 100%;
  }

</style>
