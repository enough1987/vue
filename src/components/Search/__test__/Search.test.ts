import { describe, test, beforeEach, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Component from "../Search.vue";
import { createPinia, setActivePinia } from "pinia";

describe("Search", () => {
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
    expect(wrapper.text()).toContain("FIND YOUR MOVIE");
  });

  test("on onToggle should change  search by from name to gengre", async () => {
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

  test("on click on search button should search", async () => {
    expect(Component).toBeTruthy();

    const wrapper = mount(Component, {
      props: {},
    });

    const input = wrapper.find(".search-input");
    (input.element as HTMLInputElement).value = "input";
    input.trigger("input");

    await wrapper.find(".search-btn").trigger("click");

    expect((input.element as HTMLInputElement).value).toContain("input");
  });
});
