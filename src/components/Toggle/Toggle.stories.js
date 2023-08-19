import Toggle from "./Toggle.vue";

export default {
  component: Toggle,
  title: "Toggle",
  tags: ["autodocs"],
  argTypes: {},
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {
    label: "test-lebel",
    left: "test-left",
    right: "test-right",
  },
};
