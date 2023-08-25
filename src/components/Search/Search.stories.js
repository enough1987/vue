import "../../helpers/storybook";
import Search from "./Search.vue";

export default {
  component: Search,
  title: "Search",
  tags: ["autodocs"],
  argTypes: {},
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {},
};
