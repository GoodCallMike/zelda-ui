import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { Typography } from '../Typography';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Card component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Card component provides content containers with authentic Zelda-inspired styling. It supports multiple variants and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Card } from '@zelda/core';

// Basic usage
<Card>Content goes here</Card>

// With variants
<Card variant="outlined">Outlined card</Card>
<Card variant="elevated">Elevated card</Card>
\`\`\`

## Variants

### Default
\`\`\`tsx
<Card>Basic card with subtle background</Card>
\`\`\`

### Outlined
\`\`\`tsx
<Card variant="outlined">Card with visible border</Card>
\`\`\`

### Elevated
\`\`\`tsx
<Card variant="elevated">Card with shadow elevation</Card>
\`\`\`

## Dark Mode

The Card component automatically adapts to dark mode with Hyrule's mystical night theme.

## Real World Examples

### Quest Panel
\`\`\`tsx
<Card className="max-w-sm">
  <Typography variant="h3">Quest Complete</Typography>
  <Typography>Temple of Time cleared!</Typography>
  <Button variant="primary">Claim Reward</Button>
</Card>
\`\`\`

### Inventory Card
\`\`\`tsx
<Card variant="outlined">
  <Typography variant="h3">Hero's Inventory</Typography>
  <Typography>Master Sword, Hylian Shield</Typography>
</Card>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
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
    children: 'Basic card content',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card>
        <Typography>Default</Typography>
      </Card>
      <Card variant="outlined">
        <Typography>Outlined</Typography>
      </Card>
      <Card variant="elevated">
        <Typography>Elevated</Typography>
      </Card>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-6 rounded">
      <div className="space-y-4">
        <Typography variant="h3" className="text-white mb-4">Ganon's Domain (Dark Mode)</Typography>
        <div className="flex gap-4">
          <Card>
            <Typography>Default</Typography>
          </Card>
          <Card variant="outlined">
            <Typography>Outlined</Typography>
          </Card>
          <Card variant="elevated">
            <Typography>Elevated</Typography>
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dark mode transforms cards with darker backgrounds and borders for night-time interfaces.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <Card className="max-w-sm">
        <Typography variant="h3" className="mb-2">🏆 Quest Complete</Typography>
        <Typography className="mb-4">You have successfully completed the Temple of Time quest!</Typography>
        <div className="flex gap-2">
          <Button variant="primary" size="small">Claim Reward</Button>
          <Button variant="default" size="small">View Details</Button>
        </div>
      </Card>
      
      <Card variant="outlined" className="max-w-sm">
        <Typography variant="h3" className="mb-2">🎒 Hero's Inventory</Typography>
        <Typography className="mb-4">Master Sword, Hylian Shield, 50 Rupees</Typography>
        <Button variant="text" size="small">Manage Items</Button>
      </Card>
      
      <Card variant="elevated" className="max-w-sm">
        <Typography variant="h3" className="mb-2">⚔️ Combat Stats</Typography>
        <div className="space-y-2 mb-4">
          <Typography>Attack: 45</Typography>
          <Typography>Defense: 32</Typography>
          <Typography>Magic: 28</Typography>
        </div>
        <Button variant="secondary" size="small">Level Up</Button>
      </Card>
    </div>
  ),
};