import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Component from "../Filters.vue";

test("mount component", async () => {
  expect(Component).toBeTruthy();

  const wrapper = mount(Component, {
    props: {},
  });
  expect(wrapper.text()).toContain("0 movies found");
});
