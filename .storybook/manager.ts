import { addons } from '@storybook/manager-api';

addons.setConfig({
  sidebar: {
    renderLabel: ({ name, _type }) => {
      // Move Getting Started to the top
      if (name === 'Getting Started') {
        return `📚 ${name}`;
      }
      return name;
    },
    collapsedRoots: ['General'],
  },
});
