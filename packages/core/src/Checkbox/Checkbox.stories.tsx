import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Typography } from '../Typography';
import { Input } from '../Input';
import { Button } from '../Button';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Checkbox component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Checkbox component provides multi-choice selection with authentic Zelda-inspired styling. It supports individual checkboxes and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Checkbox } from '@zelda/core';

// Basic usage
<Checkbox label="Accept terms" />

// With Hyrule theming
<Checkbox label="Collect all Triforce pieces" defaultChecked />
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
      description: 'Whether the checkbox has error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    label: 'Accept terms and conditions',
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    label: 'I agree to the terms',
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="dark p-6 bg-gray-900 rounded-lg">
        <Typography variant="h3" className="text-white mb-4">Dark Mode</Typography>
        <div className="space-y-4 text-white">
          <Checkbox label="Enable mystical powers" defaultChecked />
          <Checkbox label="Collect ancient artifacts" />
          <Checkbox label="Unlock secret dungeons" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox components automatically adapt to dark mode with mystical purple theming.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      {/* Settings Form */}
      <div className="p-6 border rounded-lg">
        <Typography variant="h3" className="mb-4">Game Settings</Typography>
        <form className="space-y-4">
          <Input label="Player Name" placeholder="Enter your hero name" />
          <div>
            <Typography variant="label" className="block mb-2">Audio Options:</Typography>
            <div className="space-y-2">
              <Checkbox label="Enable background music" defaultChecked />
              <Checkbox label="Enable sound effects" defaultChecked />
              <Checkbox label="Enable voice acting" />
            </div>
          </div>
          <div>
            <Typography variant="label" className="block mb-2">Gameplay Features:</Typography>
            <div className="space-y-2">
              <Checkbox label="Show damage numbers" />
              <Checkbox label="Auto-save progress" defaultChecked />
              <Checkbox label="Skip cutscenes" />
              <Checkbox label="Enable hard mode" />
            </div>
          </div>
          <div className="flex gap-2 pt-4">
            <Button variant="primary">Save Settings</Button>
            <Button variant="secondary">Reset to Default</Button>
          </div>
        </form>
      </div>

      {/* Quest Checklist */}
      <div className="p-6 border rounded-lg">
        <Typography variant="h3" className="mb-4">Quest Progress</Typography>
        <div className="space-y-3">
          <Typography variant="label" className="block mb-2">Main Quests:</Typography>
          <div className="space-y-2">
            <Checkbox label="Rescue Princess Zelda" defaultChecked />
            <Checkbox label="Collect Master Sword" defaultChecked />
            <Checkbox label="Defeat Ganon" />
          </div>
          <Typography variant="label" className="block mb-2 mt-4">Side Quests:</Typography>
          <div className="space-y-2">
            <Checkbox label="Find all Korok Seeds" />
            <Checkbox label="Complete all Shrines" />
            <Checkbox label="Upgrade all armor" />
            <Checkbox label="Collect all memories" defaultChecked />
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="p-6 border rounded-lg bg-gray-50">
        <Typography variant="h3" className="mb-4">Adventure Agreement</Typography>
        <div className="space-y-4">
          <Typography variant="body">Before beginning your quest, please review and accept the following:</Typography>
          <div className="space-y-3">
            <Checkbox label="I understand that this adventure may be dangerous" />
            <Checkbox label="I agree to help NPCs in need" />
            <Checkbox label="I will not use cheats or exploits" />
            <Checkbox label="I accept the terms of service" error />
          </div>
          <Button variant="primary" disabled>Begin Adventure</Button>
        </div>
      </div>
      
      {/* Dark Mode Complex Examples */}
      <div className="dark p-6 bg-gray-900 rounded-lg space-y-6">
        <Typography variant="h2">🌙 Night Mode Interface</Typography>
        
        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">⚔️ Combat Preferences</Typography>
          <div className="space-y-2">
            <Checkbox label="Auto-target enemies" defaultChecked />
            <Checkbox label="Show critical hit indicators" />
            <Checkbox label="Enable combo notifications" />
          </div>
        </div>
        
        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">🎒 Inventory Options</Typography>
          <div className="space-y-2">
            <Checkbox label="Auto-sort items" />
            <Checkbox label="Show item durability" defaultChecked />
            <Checkbox label="Quick-use consumables" defaultChecked />
          </div>
        </div>
        
        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">🗺️ Map Features</Typography>
          <div className="space-y-2">
            <Checkbox label="Show discovered locations" defaultChecked />
            <Checkbox label="Mark treasure chests" />
            <Checkbox label="Display fast travel points" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing Checkbox components integrated with other Zelda UI components in settings forms, quest tracking, agreement flows, and complex dark mode interfaces.',
      },
    },
  },
};