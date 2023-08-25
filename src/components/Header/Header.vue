<template>
  <p class="header-label"><b class="header-label-b">netflix</b>roulette</p>
</template>

<script lang="ts">
export default {
  name: "Header",
  setup: () => ({}),
};
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
</style>
