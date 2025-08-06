import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Radio, RadioGroup } from '../Radio';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'General/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Typography component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Typography component provides consistent text styling with authentic Zelda-inspired theming. It supports multiple variants, themed colors, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Typography } from '@zelda/core';

// Basic usage
<Typography>Welcome to Hyrule</Typography>

// With Hyrule theming
<Typography variant="h1" color="triforce">The Legend of Zelda</Typography>
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'body', 'caption', 'label'],
      description: 'Typography variant for different text hierarchies',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'body' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'triforce', 'hyrule', 'rupee', 'ganon'],
      description: 'Themed color variants',
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Legend of Zelda',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'The Legend of Zelda',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Breath of the Wild',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Tears of the Kingdom',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Link awakens from a deep slumber to the voice of Zelda.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Nintendo Switch Exclusive',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Form Label',
  },
};

export const ThemedColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography color="triforce">
        Triforce Gold - Primary theme color
      </Typography>
      <Typography color="hyrule">Hyrule Blue - Kingdom colors</Typography>
      <Typography color="rupee">Rupee Green - Currency and nature</Typography>
      <Typography color="ganon">Ganon Red - Danger and destruction</Typography>
      <Typography color="muted">Muted Gray - Secondary text</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Typography with Zelda-themed color variants for different contexts.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="dark p-6 bg-gray-900 rounded-lg">
        <div className="space-y-4 text-white">
          <Typography variant="h1">Dark Mode Typography</Typography>
          <Typography variant="h2">Mystical Night Theme</Typography>
          <Typography variant="h3">Enhanced Readability</Typography>
          <Typography variant="body">
            Body text maintains excellent contrast in dark mode with
            purple-tinted whites for better readability during long gaming
            sessions.
          </Typography>
          <Typography variant="caption">
            Caption text remains clear and accessible
          </Typography>
          <Typography variant="label">Form labels stay prominent</Typography>
          <div className="space-y-2 mt-4">
            <Typography color="triforce">
              Triforce elements glow with mystical energy
            </Typography>
            <Typography color="hyrule">
              Hyrule symbols shine with ethereal light
            </Typography>
            <Typography color="rupee">
              Rupee text maintains its magical essence
            </Typography>
            <Typography color="ganon">
              Ganon warnings remain clearly visible
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Typography automatically adapts to dark mode with enhanced contrast and purple-tinted colors.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
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
            <Button variant="secondary">Load Game</Button>
          </div>
        </div>
      </div>

      {/* Character Creation */}
      <div className="p-6 border rounded-lg bg-gray-50">
        <Typography variant="h2" className="mb-4">
          Create Your Hero
        </Typography>
        <form className="space-y-4">
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
            <Button variant="secondary">Back to Menu</Button>
          </div>
        </form>
      </div>

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
          'Real-world examples showing Typography integrated with other Zelda UI components in game interfaces, character creation, story content, and warning messages.',
      },
    },
  },
};

export const ZeldaColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h2" color="triforce">
        Triforce Golden
      </Typography>
      <Typography variant="h2" color="hyrule">
        Hyrule Royal Blue
      </Typography>
      <Typography variant="h2" color="rupee">
        Rupee Emerald
      </Typography>
      <Typography variant="h2" color="ganon">
        Ganon Crimson
      </Typography>
      <Typography variant="body" color="muted">
        Muted text for descriptions
      </Typography>
    </div>
  ),
};

export const MonospaceExamples: Story = {
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
        story:
          'Examples of monospace typography for code blocks, configuration, and terminal output.',
      },
    },
  },
};
