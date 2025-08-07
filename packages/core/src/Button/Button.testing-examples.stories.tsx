import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@zelda/core';
import { PlusIcon, SearchLgIcon, Trash01Icon } from '@zelda/icons';

const meta: Meta<typeof Button> = {
  title: 'General/Button Testing Examples',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TestIdNamingConventions: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <Button variant="primary" testId="btn-save-game">
        Save Game
      </Button>
      <Button variant="default" testId="btn-load-game">
        Load Game
      </Button>
      <Button variant="destructive" testId="btn-delete-save">
        Delete Save
      </Button>
      <Button variant="text" testId="btn-cancel-action">
        Cancel
      </Button>
    </div>
  ),
};

export const UserInteractionTesting: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <Button variant="primary" testId="btn-click-test">
        Click Test
      </Button>
      <Button variant="default" testId="btn-keyboard-focus">
        Keyboard Focus
      </Button>
      <Button variant="default" testId="btn-keyboard-enter">
        Keyboard Enter
      </Button>
      <Button variant="default" testId="btn-keyboard-space">
        Keyboard Space
      </Button>
    </div>
  ),
};

export const IconButtonTesting: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <Button variant="default" icon={SearchLgIcon} testId="btn-search-icon">
        Search
      </Button>
      <Button variant="dashed" icon={PlusIcon} testId="btn-add-icon">
        Add Item
      </Button>
      <Button variant="destructive" icon={Trash01Icon} testId="btn-delete-icon">
        Delete
      </Button>
    </div>
  ),
};

export const IntegrationTesting: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <Button variant="primary" testId="game-menu-new-game">
        New Game
      </Button>
      <Button variant="default" testId="game-menu-continue">
        Continue
      </Button>
      <Button variant="text" testId="game-menu-settings">
        Settings
      </Button>
    </div>
  ),
};
