import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Component from "../Header.vue";

describe("Header", () => {
  test("mount component", async () => {
    expect(Component).toBeTruthy();

    const wrapper = mount(Component, {
      props: {},
    });
    expect(wrapper.text()).toContain("netflix");
  });
});
