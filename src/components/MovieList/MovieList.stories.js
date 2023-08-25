import "../../helpers/storybook";
import MovieList from "./MovieList.vue";

export default {
  component: MovieList,
  title: "MovieList",
  tags: ["autodocs"],
  argTypes: {},
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {},
};
