import { describe, test, beforeEach, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import Component from "../MovieList.vue";

describe("MovieList", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("mount component", async () => {
    expect(Component).toBeTruthy();

    const wrapper = mount(Component, {
      props: {},
    });

    expect(wrapper.text()).toContain("");
  });
});
