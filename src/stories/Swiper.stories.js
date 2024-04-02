import MySwiper from './Swiper.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Swiper',
  component: MySwiper,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Swiper',
  },
};

export const Secondary = {
  args: {
    label: 'Swiper',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Swiper',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Swiper',
  },
};
