import type { Meta, StoryObj } from '@storybook/react';

import RichText from './richText.component';

const meta: Meta<typeof RichText> = {
  title: 'Components / RichText',
  component: RichText,
  args: {
    className: 'RichText',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
  },
};

export default meta;
type Story = StoryObj<typeof RichText>;

export const RichTextStory: Story = {};

export const RichTextHeadingsStory: Story = {
  args: {
    text: `<div>
      <h1>Heading Level 1</h1>
      <p>This is an example of a level 1 heading.</p>
      <h2>Heading Level 2</h2>
      <p>This is an example of a level 2 heading.</p>
      <h3>Heading Level 3</h3>
      <p>This is an example of a level 3 heading.</p>
      <h4>Heading Level 4</h4>
      <p>This is an example of a level 4 heading.</p>
      <h5>Heading Level 5</h5>
      <p>This is an example of a level 5 heading.</p>
      <h6>Heading Level 6</h6>
      <p>This is an example of a level 6 heading.</p>
    </div>`,
  },
};

export const RichTextLinkStory: Story = {
  args: {
    text: `<div>
        <div><p><a href="#">Basic Anchor</a> - This is an example of <a href="#">basic anchor</a> text.</p></div>
        <div><p><a href="https://www.example.com">External Link</a> - This is an example of <a href="https://www.example.com">external link</a> text.</p></div>
        <div><p><a href="/about">Internal Link</a> - This is an example of <a href="/about">internal link</a> text.</p></div>
        <div><p><a href="mailto:info@example.com">Email Link</a> - This is an example of <a href="mailto:info@example.com">email link</a> text.</p></div>
        <div><p><a href="tel:+1234567890">Phone Link</a> - This is an example of <a href="tel:+1234567890">phone link</a> text.</p></div>
        <div><p><a href="javascript:void(0);" onclick="alert('Clicked!')">JavaScript Alert</a> - This is an example of <a href="javascript:void(0);" onclick="alert('Clicked!')">javaScript alert</a> text.</p></div>
        <div><p><a href="#section">Scroll to Section</a> - This is an example of <a href="#section">scroll to section</a> text.</p></div>
    </div>`,
  },
};

export const RichTextFormattingStory: Story = {
  args: {
    text: `<div>
      <div>
          <p><strong>Bold Text</strong> - This is an example of <strong>bold</strong> text.</p>
      </div>
      <div>
          <p><em>Italic Text</em> - This is an example of <em>italic</em> text.</p>
      </div>
      <div>
          <p><u>Underlined Text</u> - This is an example of <u>underlined</u> text.</p>
      </div>
      <div>
          <p><s>Strikethrough Text</s> - This is an example of <s>strikethrough</s> text.</p>
      </div>
      <div>
          <p><strong><em>Bold and Italic Text</em></strong> - This is an example of <strong><em>bold and italic</em></strong> text.</p>
      </div>
    </div>`,
  },
};

export const RichTextStylizedStory: Story = {
  args: {
    text: `<div>
      <div>
          <p>Subscript: H<sub>2</sub>O - This is an example of subscript text.</p>
      </div>
      <div>
          <p>Superscript: x<sup>2</sup> - This is an example of superscript text.</p>
      </div>
      <div>
          <p><code>code</code> - This is an example of inline code styling.</p>
      </div>
      <div>
          <blockquote>
              This is an example of a blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </blockquote>
      </div>
    </div>`,
  },
};
