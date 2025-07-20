import { create } from 'storybook/theming/create';

const lightTheme = create({
  base: 'light',
  brandTitle: 'Jetstream Turbo',
  brandUrl: 'https://github.com/your-org/jetstream-turbo',
});

const darkTheme = create({
  base: 'dark',
  brandTitle: 'Jetstream Turbo',
  brandUrl: 'https://github.com/your-org/jetstream-turbo',
});

export default darkTheme;
export { darkTheme };
