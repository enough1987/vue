import { describe, test, beforeEach, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Component from "../Filters.vue";
import { createPinia, setActivePinia } from "pinia";

describe("Filters", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  test("mount component", async () => {
    expect(Component).toBeTruthy();

    const wrapper = mount(Component, {
      props: {},
    });
    expect(wrapper.text()).toContain("0 movies found");
  });

  test("on onToggle should change filter from date to rating", async () => {
    expect(Component).toBeTruthy();

    const wrapper = mount(Component, {
      props: {},
    });
    await wrapper.find(".toggle-right").trigger("click");

    expect(wrapper.find(".toggle-right").attributes().style).toContain(
      "background-color: rgb(245, 109, 109)"
    );

    await wrapper.find(".toggle-left").trigger("click");

    expect(wrapper.find(".toggle-left").attributes().style).toContain(
      "background-color: rgb(245, 109, 109)"
    );
  });
});
