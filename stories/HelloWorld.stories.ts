import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Hello World',
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: (args) => ({
    components: {},
    setup() {
      return { args };
    },
    template: '<div>Hello World</div>',
  }),
};
