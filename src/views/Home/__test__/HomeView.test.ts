import { describe, test, beforeEach, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

//import your component
import Component from "../HomeView.vue";

describe("HomeView", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  test("mount component", async () => {
    expect(Component).toBeTruthy();

    const wrapper = mount(Component);
    expect(wrapper.text()).toContain("netflix");
  });
});
