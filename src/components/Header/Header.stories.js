import Header from './Header.vue';

export default {
  component: Header,
  title: 'Header',
  tags: ['autodocs'],
  argTypes: {
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {},
};