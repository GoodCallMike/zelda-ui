import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@zelda/core';
import { Switch } from '@zelda/core';
import { Slider } from '@zelda/core';
import { TextField } from '@zelda/core';
import { Card } from '@zelda/core';

const meta: Meta = {
  title: '🗡️ Secret/Hyrule Theme',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `# 🗡️ Secret Hyrule Theme

A hidden Zelda-themed variant of the component library inspired by the mystical world of Hyrule.

## Activation

To activate the Hyrule theme, add \`data-theme="hyrule"\` to your root element:

\`\`\`html
<html data-theme="hyrule">
\`\`\`

## Color Palette

- **Forest Night**: Deep background inspired by Hyrule's forests
- **Moonlight**: Clean foreground text
- **Hyrule Green**: Primary actions and success states  
- **Triforce Gold**: Accent color for special elements
- **Master Sword Blue**: Secondary accent
- **Rupee Colors**: Green, Blue, Red, Purple variants
- **Ganon Red**: Destructive/error states

## Components

All components automatically adapt to the Hyrule theme when activated.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div data-theme="hyrule" className="min-h-screen bg-background text-foreground p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentShowcase: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-triforce">⚔️ Hyrule Component Library</h1>
        <p className="text-muted">Components themed for the Hero of Time</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-triforce">🗡️ Actions</h2>
          <div className="space-y-3">
            <Button>Master Sword</Button>
            <Button variant="secondary">Hylian Shield</Button>
            <Button variant="outline">Bow of Light</Button>
            <Button variant="destructive">Ganon's Bane</Button>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-triforce">⚙️ Controls</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Magic Power</label>
              <Switch checked={true} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Stamina Level</label>
              <Slider value={75} tooltip />
            </div>
            <TextField 
              label="Hero's Name" 
              placeholder="Enter your name, hero..."
              value="Link"
            />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-triforce mb-4">💎 Rupee Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg bg-rupee-green/20 border border-rupee-green/30">
            <div className="text-2xl mb-2">💚</div>
            <div className="font-semibold text-rupee-green">Green Rupee</div>
            <div className="text-sm text-muted">1 Rupee</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-rupee-blue/20 border border-rupee-blue/30">
            <div className="text-2xl mb-2">💙</div>
            <div className="font-semibold text-rupee-blue">Blue Rupee</div>
            <div className="text-sm text-muted">5 Rupees</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-rupee-red/20 border border-rupee-red/30">
            <div className="text-2xl mb-2">❤️</div>
            <div className="font-semibold text-rupee-red">Red Rupee</div>
            <div className="text-sm text-muted">20 Rupees</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-rupee-purple/20 border border-rupee-purple/30">
            <div className="text-2xl mb-2">💜</div>
            <div className="font-semibold text-rupee-purple">Purple Rupee</div>
            <div className="text-sm text-muted">50 Rupees</div>
          </div>
        </div>
      </Card>

      <div className="text-center text-muted text-sm">
        <p>🏰 "It's dangerous to go alone! Take this theme." 🏰</p>
      </div>
    </div>
  ),
};

export const ThemeActivation: Story = {
  render: () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-triforce mb-4">🔓 Theme Activation</h2>
        <div className="space-y-4">
          <p className="text-muted">
            The Hyrule theme is a secret theme that can be activated by setting the data attribute:
          </p>
          <div className="bg-secondary p-4 rounded-lg font-mono text-sm">
            {'<html data-theme="hyrule">'}
          </div>
          <p className="text-muted">
            Or programmatically:
          </p>
          <div className="bg-secondary p-4 rounded-lg font-mono text-sm">
            {"document.documentElement.setAttribute('data-theme', 'hyrule');"}
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-triforce mb-4">🎨 Color Variables</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-primary"></div>
              <code className="text-sm">--color-primary (Hyrule Green)</code>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-triforce"></div>
              <code className="text-sm">--color-triforce (Gold)</code>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-master-sword"></div>
              <code className="text-sm">--color-master-sword (Blue)</code>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-rupee-green"></div>
              <code className="text-sm">--color-rupee-green</code>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-rupee-blue"></div>
              <code className="text-sm">--color-rupee-blue</code>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-rupee-red"></div>
              <code className="text-sm">--color-rupee-red</code>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};