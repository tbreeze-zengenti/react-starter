import type { Meta, StoryObj } from '@storybook/react';
import VideoEmbed from './videoEmbed.component';

const meta: Meta<typeof VideoEmbed> = {
  title: 'Components / VideoEmbed',
  component: VideoEmbed,
  args: {
    caption: 'This is a video caption',
    src: 'https://www.youtube.com/embed/cEHP_LeBeyQ?si=SXpo2dikcd-wdSRe',
    title: 'This is a video title',
  },
};

export default meta;

type Story = StoryObj<typeof VideoEmbed>;

export const VideoEmbedStory: Story = {};
