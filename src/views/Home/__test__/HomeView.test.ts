import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

//import your component
import Component from "../HomeView.vue";

test("mount component", async () => {
  expect(Component).toBeTruthy();

  const wrapper = mount(Component);
  expect(wrapper.text()).toContain("netflix");
});
