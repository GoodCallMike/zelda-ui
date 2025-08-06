import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  Card,
  Input,
  Radio,
  RadioGroup,
  Typography,
} from '@zelda/core';

const meta: Meta<typeof Typography> = {
  title: 'General/Typography',
  component: Typography,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Typography component provides consistent text styling with Zelda-themed colors and semantic variants.

\`\`\`tsx
import { Typography } from '@zelda/core';

// Primary usage pattern
<Typography>Welcome to Hyrule</Typography>

// Key variant
<Typography variant="h1" color="triforce">The Legend of Zelda</Typography>
\`\`\`

## Variants
- **h1-h6** - Semantic headings with proper hierarchy (larger, bolder)
- **body** - Standard paragraph text (default)
- **caption** - Smaller descriptive text (metadata, timestamps)
- **label** - Form labels and UI text (medium weight)

## Colors
- **triforce** - Primary brand color (automatically adapts to theme)
- **hyrule** - Secondary blue theme
- **rupee** - Success/nature green
- **ganon** - Destructive red
- **muted** - Secondary text (gray)

## Theming
Colors automatically adapt to light/dark themes using CSS custom properties. No additional configuration required.

## Accessibility & Testing
- Uses semantic HTML elements (h1-h6, p)
- Maintains WCAG AA contrast ratios in all themes
- Supports screen readers with proper heading hierarchy

\`\`\`tsx
// Testing approach
const heading = screen.getByRole('heading', { level: 1 });
expect(heading).toHaveTextContent('The Legend of Zelda');
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body',
        'body2',
        'caption',
        'label',
      ],
      description: 'Semantic variant for text hierarchy and styling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'body' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'triforce', 'hyrule', 'rupee', 'ganon'],
      description: 'Zelda-themed color variants',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
      table: {
        type: { summary: 'string' },
      },
    },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Legend of Zelda',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Typography variant="h1">Heading 1 - Page Title</Typography>
        <Typography variant="h2">Heading 2 - Section Title</Typography>
        <Typography variant="h3">Heading 3 - Subsection</Typography>
        <Typography variant="h4">Heading 4 - Sub-subsection</Typography>
        <Typography variant="h5">Heading 5 - Minor heading</Typography>
        <Typography variant="h6">Heading 6 - Smallest heading</Typography>
        <Typography variant="body">
          Body text for paragraphs and content
        </Typography>
        <Typography variant="body2">Body 2 - Smaller body text</Typography>
        <Typography variant="caption">Caption text for metadata</Typography>
        <Typography variant="label">Label text for forms</Typography>
      </div>
      <div className="space-y-2">
        <Typography color="triforce">Triforce Gold - Primary brand</Typography>
        <Typography color="hyrule">Hyrule Blue - Secondary theme</Typography>
        <Typography color="rupee">Rupee Green - Success states</Typography>
        <Typography color="ganon">Ganon Red - Destructive actions</Typography>
        <Typography color="muted">Muted Gray - Secondary text</Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All typography variants and themed colors in one view.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      {/* Game Interface */}
      <div className="p-6 border rounded-lg">
        <Typography variant="h1" color="triforce" className="mb-4">
          The Legend of Zelda
        </Typography>
        <Typography variant="h2" className="mb-4">
          Choose Your Adventure
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Typography variant="h3">New Game</Typography>
            <Typography variant="body">
              Begin your journey as Link, the legendary hero of Hyrule. Explore
              vast kingdoms, solve ancient puzzles, and save Princess Zelda from
              the forces of darkness.
            </Typography>
            <Button variant="primary">Start Adventure</Button>
          </div>
          <div className="space-y-3">
            <Typography variant="h3">Continue</Typography>
            <Typography variant="body">
              Resume your quest from where you left off. Your progress has been
              saved at the last shrine you visited.
            </Typography>
            <Typography variant="caption" color="muted">
              Last played: Temple of Time
            </Typography>
            <Button variant="default">Load Game</Button>
          </div>
        </div>
      </div>

      {/* Character Creation */}
      <Card>
        <Typography variant="h2" className="mb-4">
          Create Your Hero
        </Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="label" className="block mb-2">
              Hero Name
            </Typography>
            <Input placeholder="Enter your hero's name" />
            <Typography variant="caption" color="muted">
              Choose a name worthy of legend
            </Typography>
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Starting Region
            </Typography>
            <RadioGroup defaultValue="central">
              <Radio
                label="Central Hyrule - Balanced adventure"
                value="central"
              />
              <Radio label="Hebra Region - Icy challenges" value="hebra" />
              <Radio label="Gerudo Desert - Scorching trials" value="gerudo" />
            </RadioGroup>
          </div>
          <div className="flex gap-2 pt-4">
            <Button variant="primary">Begin Quest</Button>
            <Button variant="default">Back to Menu</Button>
          </div>
        </div>
      </Card>

      {/* Story Content */}
      <div className="p-6 border rounded-lg">
        <Typography variant="h2" color="hyrule" className="mb-4">
          The Ancient Prophecy
        </Typography>
        <div className="space-y-4">
          <Typography variant="body">
            Long ago, when the world was young and magic flowed freely through
            the land, three golden goddesses descended upon the chaos that was
            Hyrule. Din, the goddess of power, with her strong flaming arms,
            cultivated the land and created the red earth.
          </Typography>
          <Typography variant="body">
            Nayru, the goddess of wisdom, poured her wisdom onto the earth and
            gave the spirit of law to the world. Farore, the goddess of courage,
            with her rich soul, produced all life forms who would uphold the
            law.
          </Typography>
          <Typography variant="body" color="triforce">
            These three great goddesses left behind the Triforce - three sacred
            golden triangles that represent the essence of the goddesses. When
            united, the Triforce grants the wish of whoever touches it.
          </Typography>
          <Typography variant="caption" color="muted" className="italic">
            - From the Ancient Texts of Hyrule
          </Typography>
        </div>
      </div>

      {/* Warning Message */}
      <div className="p-6 border-2 border-red-200 rounded-lg bg-red-50">
        <Typography variant="h3" color="ganon" className="mb-2">
          ⚠️ Danger Ahead
        </Typography>
        <Typography variant="body" color="ganon">
          The path you have chosen leads through the Shadow Temple. Ancient
          evils lurk within its cursed halls. Only the bravest heroes dare to
          enter.
        </Typography>
        <Typography variant="caption" color="ganon" className="mt-2 block">
          Recommended level: 45+ | Required items: Hover Boots, Silver Gauntlets
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Typography integrated with other components in realistic game interface scenarios.',
      },
    },
  },
};

export const Monospace: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <Typography variant="h2">Monospace Examples</Typography>
      <Typography variant="body" color="muted">
        Monospace typography for code and technical content.
      </Typography>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <Typography variant="label" className="block mb-2">
            JavaScript Code
          </Typography>
          <code className="font-mono text-sm block">
            const hero = &#123;
            <br />
            &nbsp;&nbsp;name: 'Link',
            <br />
            &nbsp;&nbsp;weapon: 'Master Sword',
            <br />
            &nbsp;&nbsp;shield: 'Hylian Shield'
            <br />
            &#125;;
          </code>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <Typography variant="label" className="block mb-2">
            Configuration
          </Typography>
          <pre className="font-mono text-sm">
            TRIFORCE_POWER=9001
            <br />
            HYRULE_CASTLE_COORDS=&#123;x: 0, y: 0, z: 100&#125;
            <br />
            MASTER_SWORD_DAMAGE=300
          </pre>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <Typography variant="label" className="block mb-2">
            Terminal Output
          </Typography>
          <code className="font-mono text-sm block text-green-600 dark:text-green-400">
            $ npm run storybook
            <br />✓ Starting Storybook server...
            <br />✓ Local: http://localhost:6006
            <br />✓ Ready in 2.3s
          </code>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Monospace typography for code blocks and technical content.',
      },
    },
  },
};
