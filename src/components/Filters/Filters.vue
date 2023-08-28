<template>
  <div class="filters">
    <div class="info-found">{{ moviesFiltered.length }} movies found</div>

    <Toggle
      label="SORT BY"
      left="RELEASE DATE"
      right="RATING"
      :active="active"
      @change-active="onToggle"
    ></Toggle>
  </div>
</template>

<script lang="ts">
import { mapState } from "pinia";
import { watch, onMounted, ref } from "vue";
import useMoviesStore, { ISortBy } from "../../state/useMoviesStore";
import Toggle, { activeToggle } from "../Toggle/Toggle.vue";
import router from "../../router/index";
import { useRoute } from "vue-router";

export default {
  name: "Filters",
  setup: () => {
    const active = ref("");
    const { sortBy, changeSortBy } = useMoviesStore();
    const route = useRoute();

    onMounted(() => {
      active.value = route.query.sortBy === "date" ? "left" : "right";
      changeSortBy(route.query.sortBy as ISortBy);
    });

    watch(
      () => route.query.sortBy as ISortBy,
      (sortBy: ISortBy) => {
        active.value = sortBy === "date" ? "left" : "right";
        changeSortBy(sortBy);
      }
    );

    return { active, sortBy };
  },
  computed: {
    ...mapState(useMoviesStore, ["moviesFiltered"]),
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
          sortBy: value === "left" ? "date" : "rating",
        },
      });
    },
  },
};
</script>

<style>
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
</style>
