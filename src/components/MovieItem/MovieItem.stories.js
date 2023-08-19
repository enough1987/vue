import MovieItem from './MovieItem.vue';

export default {
  component: MovieItem,
  title: 'MovieItem',
  tags: ['autodocs'],
  argTypes: {
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {},
};