import { create } from 'storybook/theming/create';

const lightTheme = create({
  base: 'light',
  brandTitle: 'Zelda',
  brandUrl: 'https://github.com/your-org/zelda',
});

const darkTheme = create({
  base: 'dark',
  brandTitle: 'Zelda',
  brandUrl: 'https://github.com/your-org/zelda',
});

export default darkTheme;
export { darkTheme };
