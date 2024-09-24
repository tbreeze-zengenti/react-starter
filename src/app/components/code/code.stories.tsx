import type { Meta, StoryObj } from '@storybook/react';
import Code from './code.component';

const meta: Meta<typeof Code> = {
  title: 'Components / Code',
  component: Code,
  args: {
    code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          margin-left: 200px;
        }
      </style>
    </head>
    <body>
      <div class="center_div">
        <h1>Hello World!</h1>
        <p>This example contains some advanced CSS methods you may not have learned yet. But, we will explain these methods in a later chapter in the tutorial.</p>
      </div>
    </body>
  </html>
`,
    language: 'HTML',
    caption: 'An example Hello World HTML file',
  },
};

export default meta;

type Story = StoryObj<typeof Code>;

export const CodeStory: Story = {};
