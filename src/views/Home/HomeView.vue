<template>
  <div class="home">
    <Hello msg="Welcome to Your Vue.js + Vite + TypeScript App + Storybook" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hello from "/src/components/Hello/Hello.vue"; // @ is an alias to /src

@Options({
  components: {
    Hello,
  },
})
export default class HomeView extends Vue {}
</script>
