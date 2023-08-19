import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Component from "../Toggle.vue";

test("mount component", async () => {
  expect(Component).toBeTruthy();

  const wrapper = mount(Component, {
    props: { label: 'test-l', left: 'test-l', right: 'test-r'},
  });
  expect(wrapper.text()).toContain("test-l");
});