import { describe, test, beforeEach, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Component from "../Filters.vue";
import { createPinia, setActivePinia } from "pinia";
import "../../../helpers/mocks/vueRouter";
import { mountRouterSetting } from "../../../helpers/mocks/vueRouter";

describe("Filters", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("mount component", async () => {
    expect(Component).toBeTruthy();

    const wrapper = mount(Component, {
      ...mountRouterSetting,
      props: {},
    });
    expect(wrapper.text()).toContain("0 movies found");
  });

  test("on onToggle should change filter from date to rating", async () => {
    expect(Component).toBeTruthy();

    const wrapper = mount(Component, {
      ...mountRouterSetting,
      props: {},
    });
    await wrapper.find(".toggle-right").trigger("click");

    expect(wrapper.find(".toggle-right").attributes().style).toContain(
      "background-color: rgb(245, 109, 109);"
    );

    await wrapper.find(".toggle-left").trigger("click");

    expect(wrapper.find(".toggle-left").attributes().style).toContain(
      "background-color: gray;"
    );
  });
});
