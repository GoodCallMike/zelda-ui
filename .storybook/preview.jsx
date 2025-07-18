import '../packages/core/src/styles';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#111827',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      // Skip decorator for ThemeProvider stories
      if (context.parameters.themeProvider) {
        return <Story />;
      }
      
      const backgroundName = context.globals.backgrounds?.value;
      const theme = backgroundName === 'dark' ? 'dark' : 'light';
      
      // Apply theme to document
      document.documentElement.setAttribute('data-theme', theme);
      
      return (
        <div data-theme={theme}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;