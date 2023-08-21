<template>
  <div class="toggle">
    <div class="toggle-label">{{ label }}</div>
    <div
      class="toggle-left"
      v-active="active === 'left'"
      @click="changeActive('left')"
    >
      {{ left }}
    </div>
    <div
      class="toggle-right"
      v-active="active === 'right'"
      @click="changeActive('right')"
    >
      {{ right }}
    </div>
  </div>
</template>

<script lang="ts">
import { active } from "../../directives/Active/Active";

export type activeToggle = "left" | "right";

export default {
  name: "Toggle",
  props: {
    label: String,
    left: String,
    right: String,
  },
  emits: ["changeActive"],
  directives: { active },
  data: function () {
    return {
      active: "left",
    };
  },
  methods: {
    changeActive(value: activeToggle) {
      this.active = value;
      this.$emit("changeActive", value);
    },
  },
};
</script>

<style>
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
  padding: 4px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
}
.toggle-right {
  text-align: center;
  padding: 4px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
}
</style>
