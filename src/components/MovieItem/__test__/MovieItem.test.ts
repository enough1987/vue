import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Component from "../MovieItem.vue";

test("mount component", async () => {
  expect(Component).toBeTruthy();

  const wrapper = mount(Component, {
    props: {
      url: "https://lumiere-a.akamaihd.net/v1/images/p_disney_elemental_homeent_v1_2292_0312c1d7.jpeg",
      name: "name1",
      gengre: "gengres1",
      year: 2023,
      rating: 1,
    },
  });
  expect(wrapper.text()).toContain("name");
});
