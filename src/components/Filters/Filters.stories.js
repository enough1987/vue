import "../../helpers/storybook";
import Filters from "./Filters.vue";

export default {
  template: "<div><story /><router-view /></div>",
  component: Filters,
  title: "Filters",
  tags: ["autodocs"],
  argTypes: {},
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {},
};
