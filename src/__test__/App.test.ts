import { describe, beforeEach, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import "../helpers/mocks/vueRouter";
import { mountRouterSetting } from "../helpers/mocks/vueRouter";
import App from "../App.vue";

describe("App", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test("mounting", () => {
    const wrapper = mount(App, mountRouterSetting);
    expect(wrapper.html()).toContain("");
  });
});
