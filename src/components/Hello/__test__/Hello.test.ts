import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

//import your component
import Component from "../Hello.vue";

test("mount component", async () => {
  expect(Component).toBeTruthy();

  const wrapper = mount(Component, {
    props: {
      msg: "test hello",
    },
  });
  expect(wrapper.text()).toContain("test hello");
});
