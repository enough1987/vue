import MovieItem from "./MovieItem.vue";

export default {
  component: MovieItem,
  title: "MovieItem",
  tags: ["autodocs"],
  argTypes: {
    url: String,
    name: String,
    genre: String,
    year: Number,
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {
    url: "https://lumiere-a.akamaihd.net/v1/images/p_disney_elemental_homeent_v1_2292_0312c1d7.jpeg",
    name: "name1",
    gengre: "gengres1",
    year: 2023,
    rating: 1,
  },
};
