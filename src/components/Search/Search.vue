<template>
  <div class="search-wrapper">
    <h1 class="search-title">FIND YOUR MOVIE</h1>
    <div class="search">
      <input
        id="search-input"
        class="search-input"
        type="text"
        v-model="value"
      />
      <button id="search-btn" class="search-btn" @click="onSearch(value)">
        SEARCH
      </button>
    </div>
    <Toggle
      label="SEARCH BY"
      left="TITLE"
      right="GENDER"
      :active="active"
      @change-active="onToggle"
    ></Toggle>
  </div>
</template>

<script lang="ts">
import Toggle, { activeToggle } from "../Toggle/Toggle.vue";
import useMoviesStore, { ISearchBy } from "../../state/useMoviesStore";
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import router from "../../router/index";

export default {
  name: "Search",
  setup: () => {
    const active = ref("");
    const value = ref("");
    const route = useRoute();

    const { changeSearch, changeSearchBy } = useMoviesStore();

    onMounted(() => {
      value.value = route.query.search as string;
      active.value = route.query.searchBy === "gengre" ? "right" : "left";
      changeSearch(value.value);
    });

    watch(
      () => route.query.search as string,
      (search: string) => {
        changeSearch(search);
      }
    );

    watch(
      () => route.query.searchBy as ISearchBy,
      (searchBy: ISearchBy) => {
        active.value = searchBy === "name" ? "left" : "right";
        changeSearchBy(searchBy);
      }
    );

    return {
      value,
      active,
    };
  },
  components: {
    Toggle,
  },
  methods: {
    onToggle: (value: activeToggle) => {
      router.push({
        path: router.currentRoute.value.path,
        query: {
          ...router.currentRoute.value.query,
          searchBy: value === "left" ? "name" : "gengre",
        },
      });
    },
    onSearch: (value: string) => {
      router.push({
        path: router.currentRoute.value.path,
        query: {
          ...router.currentRoute.value.query,
          search: value,
        },
      });
    },
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
