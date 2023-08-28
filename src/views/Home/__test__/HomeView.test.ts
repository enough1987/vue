import { describe, test, beforeEach, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import Component from "../HomeView.vue";
import "../../../helpers/mocks/vueRouter";
import { mountRouterSetting } from "../../../helpers/mocks/vueRouter";

describe("HomeView", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("mount component", async () => {
    expect(Component).toBeTruthy();

    const wrapper = mount(Component, {
      ...mountRouterSetting,
    });
    expect(wrapper.text()).toContain("netflix");
  });
});
