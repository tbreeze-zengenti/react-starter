import type { Meta, StoryObj } from '@storybook/react';

import Canvas from './canvas.component';

const meta: Meta<typeof Canvas> = {
  title: 'Components / Renderer',
  component: Canvas,
};
export default meta;
type Story = StoryObj<typeof Canvas>;

export const Vanilla: Story = {
  args: {
    data: [
      {
        id: '85c99046',
        type: '_paragraph',
        value: 'This is lead text',
        properties: {
          paragraphType: 'lead',
        },
      },
      {
        id: '96cacdd6',
        type: '_paragraph',
        value: [
          {
            id: 'b212710a',
            type: '_fragment',
            value: 'Lorem ipsum dolor sit amet, ',
          },
          {
            id: '52abb1f2',
            type: '_fragment',
            value: 'consectetur',
            properties: {
              decorators: ['strong'],
            },
          },
          {
            id: '9085bf18',
            type: '_fragment',
            value: ' ',
          },
          {
            id: '77802015',
            type: '_fragment',
            value: 'adipiscing',
            properties: {
              decorators: ['emphasis'],
            },
          },
          {
            id: 'f0c866d8',
            type: '_fragment',
            value: ' ',
          },
          {
            id: '93972f0f',
            type: '_fragment',
            value: 'elit',
            properties: {
              decorators: ['strikethrough'],
            },
          },
          {
            id: '12a7490e',
            type: '_fragment',
            value: ',\n',
          },
          {
            id: '42372974',
            type: '_fragment',
            value: ' sed',
            properties: {
              decorators: ['mark'],
            },
          },
          {
            id: '5ddc56fe',
            type: '_fragment',
            value: ' ',
          },
          {
            id: 'a1c4c4fc',
            type: '_fragment',
            value: 'do',
            properties: {
              decorators: ['underline'],
            },
          },
          {
            id: 'a549d529',
            type: '_fragment',
            value:
              ' eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis\n eleifend quam adipiscing vitae proin sagittis nisl. Ac turpis egestas \nmaecenas pharetra convallis posuere morbi. Tellus ',
          },
          {
            id: 'e9f261be',
            type: '_fragment',
            value: 'id interdum',
            properties: {
              decorators: ['emphasis'],
            },
          },
          {
            id: '256a93ed',
            type: '_fragment',
            value: ' velit ',
          },
          {
            id: '9b330515',
            type: '_fragment',
            value: 'laoreet',
            properties: {
              decorators: ['strikethrough'],
            },
          },
          {
            id: '99656b8c',
            type: '_fragment',
            value:
              '.\n Tempus iaculis urna id volutpat lacus laoreet non curabitur. Fermentum \ndui faucibus in ornare quam viverra orci sagittis. Etiam erat velit \nscelerisque in dictum non consectetur a erat.Molestie at elementum eu facilisis. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Bibendum enim facilisis gravida neque convallis a cras. Congue quisque egestas diam in. Vestibulum sed arcu non odio euismod lacinia at quis. Dictum sit amet justo donec enim diam vulputate ut. Proin sed libero enim sed faucibus turpis in eu. Amet justo donec enim diam vulputate ut pharetra. Eget nunc lobortis mattis aliquam.',
          },
        ],
      },
      {
        id: 'e1ef0903',
        type: '_divider',
      },
      {
        id: '36235757',
        type: '_heading',
        value: 'This is a heading 2',
        properties: {
          level: 2,
        },
      },
      {
        id: '77d3f9b5',
        type: '_heading',
        value: 'Heading 3',
        properties: {
          level: 3,
        },
      },
      {
        id: '6a167868',
        type: '_heading',
        value: 'heading 4',
        properties: {
          level: 4,
        },
      },
      {
        id: 'f838e6dd',
        type: '_heading',
        value: 'Heading 5',
        properties: {
          level: 5,
        },
      },
      {
        id: 'f3aa5dcf',
        type: '_table',
        value: [
          {
            id: '80be7a34',
            type: '_tableCaption',
            value: [],
          },
          {
            id: '8430ec6a',
            type: '_tableHeader',
            value: [
              {
                id: 'c79ba55f',
                type: '_tableRow',
                value: [
                  {
                    id: 'bf6bb89e',
                    type: '_tableHeaderCell',
                    value: 'This is a table heading',
                  },
                  {
                    id: '5b032b6f',
                    type: '_tableHeaderCell',
                    value: 'This is a table heading 2',
                  },
                ],
              },
            ],
          },
          {
            id: '2b75a89',
            type: '_tableBody',
            value: [
              {
                id: '3e4dacbb',
                type: '_tableRow',
                value: [
                  {
                    id: '97281609',
                    type: '_tableCell',
                    value: 'Cell 1',
                  },
                  {
                    id: '9a54b509',
                    type: '_tableCell',
                    value: 'Cell 2',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'ba11f33',
        type: '_panel',
        value: 'Information panel',
        properties: {
          panelType: 'info',
        },
      },
      {
        id: '3b45bcd9',
        type: '_list',
        value: [
          {
            id: '96da2ec3',
            type: '_listItem',
            value: 'Bullet item 1',
          },
          {
            id: 'f1fee7bc',
            type: '_listItem',
            value: 'Bullet item 2',
          },
          {
            id: 'd930a19a',
            type: '_listItem',
            value: 'Bullet item 3',
          },
        ],
        properties: {
          listType: 'unordered',
        },
      },
      {
        id: '1e7a163b',
        type: '_list',
        value: [
          {
            id: '58cef578',
            type: '_listItem',
            value: 'Numbered item 1',
          },
          {
            id: 'cd02fb4a',
            type: '_listItem',
            value: 'Numbered item 2',
          },
          {
            id: '4c668e1d',
            type: '_listItem',
            value: 'Numbered item 3',
          },
        ],
        properties: {
          start: 1,
          listType: 'ordered',
        },
      },
      {
        id: '20991c26',
        type: '_quote',
        value: 'This is a quote',
        properties: {
          citation: 'Reference or citation here',
          source: 'Source name here',
          url: 'https://www.bbc.co.uk/news/uk-67707647',
        },
      },
      {
        id: 'c1d1b1f8',
        type: '_panel',
        value: 'Warning panel',
        properties: {
          panelType: 'warning',
        },
      },
    ],
  },
};
