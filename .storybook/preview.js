import '@zelda/theme';
import './preview.css';

export const parameters = {
  options: {
    storySort: {
      order: ['General', 'Data Entry', 'Data Display', 'Navigation', 'Feedback', 'Layout'],
    },
  },

  a11y: {
    // 'todo' - show a11y violations in the test UI only
    // 'error' - fail CI on a11y violations
    // 'off' - skip a11y checks entirely
    test: 'todo'
  }
};