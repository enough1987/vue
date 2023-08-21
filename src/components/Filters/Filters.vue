<template>
  <div class="filters">
    <div class="info-found">{{ moviesFiltered.length }} movies found</div>

    <Toggle
      label="SORT BY"
      left="RELEASE DATE"
      right="RATING"
      @change-active="onToggle"
    ></Toggle>
  </div>
</template>

<script lang="ts">
import { useSearch } from "../../state/useSearch";
import Toggle, { activeToggle } from "../Toggle/Toggle.vue";

export default {
  name: "Filters",
  components: {
    Toggle,
  },
  setup: () => {
    const { moviesFiltered } = useSearch();

    return { moviesFiltered };
  },
  methods: {
    onToggle: (value: activeToggle) => {
      const { changeSortBy } = useSearch();

      if (value === "left") {
        changeSortBy("date");
      } else {
        changeSortBy("rating");
      }
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
